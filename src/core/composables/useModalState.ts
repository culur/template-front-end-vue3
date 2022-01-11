import { storeToRefs } from 'pinia'
import { useModalStore } from '@/src/core/stores/useModalStore'

export enum ModalEnum {
  WALLET = 'WALLET',
  SEED_VIDEO = 'SEED_VIDEO',
}

export default function useModalState(modalName: ModalEnum) {
  const modalStore = useModalStore()
  const { normalizeModalState } = storeToRefs(modalStore)
  if (!normalizeModalState.value[modalName])
    modalStore.setModalState(modalName, false)

  return {
    showModal: () => {
      modalStore.setModalState(modalName, true)
    },
    hideModal: () => {
      modalStore.setModalState(modalName, false)
    },
    modalVisible: computed({
      get: () => normalizeModalState.value[modalName] || false,
      set: value => modalStore.setModalState(modalName, value),
    }),
  }
}
