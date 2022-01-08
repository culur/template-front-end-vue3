import type { AbstractConnector } from '@web3-react/abstract-connector'
import type { ConnectorUpdate } from '@web3-react/types'
import { normalizeAccount, normalizeChainId } from '@/src/core/utils/web3/chainNormalizer'
import { UnsupportedChainIdError } from '@/src/core/utils/web3/networkError'

export async function augmentConnectorUpdate(
  connector: AbstractConnector,
  update: ConnectorUpdate,
): Promise<ConnectorUpdate<number>> {
  const provider = update.provider === undefined ? await connector.getProvider() : update.provider
  const [_chainId, _account] = (await Promise.all([
    update.chainId === undefined ? connector.getChainId() : update.chainId,
    update.account === undefined ? connector.getAccount() : update.account,
  ])) as [Required<ConnectorUpdate>['chainId'], Required<ConnectorUpdate>['account']]

  const chainId = normalizeChainId(_chainId)
  if (!!connector.supportedChainIds && !connector.supportedChainIds.includes(chainId))
    throw new UnsupportedChainIdError(chainId, connector.supportedChainIds)

  const account = _account === null ? _account : normalizeAccount(_account)

  return { provider, chainId, account }
}
