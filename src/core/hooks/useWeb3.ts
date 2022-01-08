import type { AbstractConnector } from '@web3-react/abstract-connector'
import type { ConnectorUpdate } from '@web3-react/types'
import { ConnectorEvent } from '@web3-react/types'
import { computed, reactive, unref } from 'vue'
import type { SupportedChainID } from '../constants/network'
import { DEFAULT_NETWORK } from '../constants/network'
import { augmentConnectorUpdate } from '@/src/core/utils/web3/connector'
import { normalizeAccount, normalizeChainId } from '@/src/core/utils/web3/chainNormalizer'
import { UnsupportedChainIdError } from '@/src/core/utils/web3/networkError'
import { SAVED_WALLET_KEY } from '@/src/core/constants/wallet'

type ErrorFn = (error: Error) => void

interface Web3ManagerState {
  connector?: AbstractConnector
  provider?: any
  chainId?: number
  account?: null | string

  onError?: ErrorFn

  error?: Error
}

export interface Web3VueManagerFunctions {
  activate?: (
    connector: AbstractConnector,
    onError?: (error: Error) => void,
    throwErrors?: boolean
  ) => Promise<void>
  setError?: (error: Error) => void
  deactivate?: () => void
}

enum ActionType {
  ACTIVATE_CONNECTOR,
  UPDATE,
  UPDATE_FROM_ERROR,
  ERROR,
  ERROR_FROM_ACTIVATION,
  DEACTIVATE_CONNECTOR,
}

interface Action {
  type: ActionType
  payload?: any
  network: number
}

export const savedWallet = useStorage(SAVED_WALLET_KEY, '')

/**
 * Temporary web3 manager
 */
const web3Manager = reactive<Map<number, Web3ManagerState>>(new Map())
export const setWeb3Manager = (network: number, state: Web3ManagerState) => {
  web3Manager.set(network, state)
}

// State reducer
function updateByAction({ type, payload, network }: Action): void {
  switch (type) {
    case ActionType.ACTIVATE_CONNECTOR: {
      const { connector, provider, chainId, account, onError, name } = payload
      const newState = { connector, provider, chainId, account, onError }
      setWeb3Manager(network, newState)
      savedWallet.value = name
      break
    }
    case ActionType.UPDATE: {
      const { provider, chainId, account } = payload
      const state = web3Manager.get(network) || {}
      const newState = {
        ...state,
        ...(provider === undefined ? {} : { provider }),
        ...(chainId === undefined ? {} : { chainId }),
        ...(account === undefined ? {} : { account }),
      }
      setWeb3Manager(network, newState)
      break
    }
    case ActionType.UPDATE_FROM_ERROR: {
      const { provider, chainId, account } = payload
      const state = web3Manager.get(network) || {}
      const newState = {
        ...state,
        ...(provider === undefined ? { provider: null } : { provider }),
        ...(chainId === undefined ? { chainId: null } : { chainId }),
        ...(account === undefined ? { account: null } : { account }),
      }
      setWeb3Manager(network, newState)
      break
    }
    case ActionType.ERROR: {
      const { error } = payload
      const state = web3Manager.get(network) || {}
      const { connector, onError } = state
      const newState = {
        connector,
        error,
        onError,
      }
      setWeb3Manager(network, newState)
      savedWallet.value = ''
      break
    }
    case ActionType.ERROR_FROM_ACTIVATION: {
      const { connector, error } = payload
      const newState = {
        connector,
        error,
      }
      setWeb3Manager(network, newState)
      savedWallet.value = ''
      break
    }
    case ActionType.DEACTIVATE_CONNECTOR: {
      // console.debug('deactivating connector')
      setWeb3Manager(network, {})
      savedWallet.value = ''
      break
    }
  }
}

// Get web3 action & states
export const useWeb3Instance = (network: SupportedChainID = DEFAULT_NETWORK) => {
  const state = computed(() => web3Manager.get(network) || {})

  const activate = async(
    connectorData: { name: string; connector: AbstractConnector },
    onError?: (error: Error) => void,
    throwErrors = false,
  ): Promise<void> => {
    const { name, connector } = connectorData
    let activated = false
    try {
      const update = await connector.activate().then((update): ConnectorUpdate => {
        activated = true
        return update
      })

      const augmentedUpdate = await augmentConnectorUpdate(connector, update)

      updateByAction({
        type: ActionType.ACTIVATE_CONNECTOR,
        payload: { connector, ...augmentedUpdate, onError, name },
        network,
      })
    }
    catch (error) {
      if (throwErrors) {
        activated && connector.deactivate()
        throw error
      }
      else if (onError) {
        activated && connector.deactivate()
        onError(error as Error)
      }
      else {
        // error handle by default in watcher cleanup
        updateByAction({
          type: ActionType.ERROR_FROM_ACTIVATION,
          payload: { connector, error },
          network,
        })
      }
    }
  }

  const setError = (error: Error): void => {
    updateByAction({ type: ActionType.ERROR, payload: { error }, network })
  }

  const deactivate = (): void => {
    updateByAction({ type: ActionType.DEACTIVATE_CONNECTOR, network })
  }

  const isActive = computed(() => {
    const { connector, chainId, account, error } = unref(state)
    return connector !== undefined && chainId !== undefined && account !== undefined && !error
  })

  return {
    state: readonly(state),
    activate,
    setError,
    deactivate,
    isActive,
  }
}

// Initialize the web3 & listeners
export const useWeb3 = (network: number) => {
  const state = computed(() => web3Manager.get(network) || {})

  const handleUpdateEvent = async(update: ConnectorUpdate): Promise<void> => {
    const { connector, error, onError } = unref(state)
    if (!connector)
      throw new Error('This should never happen, it\'s just so Typescript stops complaining')

    // handle update event with or without error
    if (!error) {
      const chainId = update.chainId === undefined ? undefined : normalizeChainId(update.chainId)
      if (
        chainId !== undefined
        && !!connector.supportedChainIds
        && !connector.supportedChainIds.includes(chainId)
      ) {
        const error = new UnsupportedChainIdError(chainId, connector.supportedChainIds)
        onError
          ? onError(error)
          : updateByAction({ type: ActionType.ERROR, payload: { error }, network })
      }
      else {
        const account
          = typeof update.account === 'string' ? normalizeAccount(update.account) : update.account
        updateByAction({
          type: ActionType.UPDATE,
          payload: { provider: update.provider, chainId, account },
          network,
        })
      }
    }
    else {
      try {
        const augmentedUpdate = await augmentConnectorUpdate(connector, update)

        updateByAction({ type: ActionType.UPDATE_FROM_ERROR, payload: augmentedUpdate, network })
      }
      catch (error: any) {
        // though we don't have to, we're re-circulating the new error
        onError
          ? onError(error)
          : updateByAction({ type: ActionType.ERROR, payload: { error }, network })
      }
    }
  }

  const handleErrorEvent = (error: Error): void => {
    const { onError } = unref(state)
    onError
      ? onError(error)
      : updateByAction({ type: ActionType.ERROR, payload: { error }, network })
  }

  const handleDeactivateEvent = (): void => {
    updateByAction({ type: ActionType.DEACTIVATE_CONNECTOR, network })
  }

  // ensure that connectors which were set are deactivated on unmount
  watch(
    () => state.value.connector,
    (connector, prevConnector, onCleanUp) => {
      const cleanUpFn = () => {
        if (connector)
          connector.deactivate()
      }
      onCleanUp(cleanUpFn)
    },
  )

  // ensure that events emitted from the set connector are handled appropriately
  watch(
    () => state.value.connector,
    (connector, prevConnector, onCleanUp) => {
      if (connector) {
        connector
          .on(ConnectorEvent.Update, handleUpdateEvent)
          .on(ConnectorEvent.Error, handleErrorEvent)
          .on(ConnectorEvent.Deactivate, handleDeactivateEvent)
      }

      const cleanUpFn = () => {
        if (connector) {
          connector
            .off(ConnectorEvent.Update, handleUpdateEvent)
            .off(ConnectorEvent.Error, handleErrorEvent)
            .off(ConnectorEvent.Deactivate, handleDeactivateEvent)
        }
      }
      onCleanUp(cleanUpFn)
    },
  )
}
