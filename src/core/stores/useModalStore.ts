import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const modalMap = shallowReactive<Map<string, boolean>>(new Map())
  const normalizeModalState = computed(() => {
    const entries = Array.from(modalMap.entries())
    return Object.fromEntries(entries)
  })

  function setModalState(modalName: string, state: boolean) {
    modalMap.set(modalName, state)
  }

  return {
    modalMap,
    setModalState,
    normalizeModalState,
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
