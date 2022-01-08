import useModalState, { ModalEnum } from './useModalState'
import { useWeb3Instance } from '~/core/hooks/useWeb3'

export default function useConnectCheck() {
  const { state } = useWeb3Instance()
  const { showModal } = useModalState(ModalEnum.WALLET)
  const checkWalletConnection = (handler: any, extraCondition?: () => boolean) => () => {
    if (!state.value.account || extraCondition?.())
      showModal()

    else
      handler()
  }
  return checkWalletConnection
}
