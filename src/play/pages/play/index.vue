<script setup lang="ts">
const { t } = useI18n()

const isShow = ref(false)
const text = ref('abc')
const number = ref('123')
</script>

<template>
  <div class="flex text-heading items-center">
    <icon-foundation:paw class="text-3xl" />
    <div class="font-display ml-2 text-2xl">
      {{ t('play.my-animals') }}
    </div>
    <StylizedBtn class="ml-2" @click="isShow = true">
      Open modal
    </StylizedBtn>
    <TextInput v-model="text" error />
    <NumberInput v-model="number" />
  </div>
  <Modal v-model="isShow">
    <template #header>
      Modal
    </template>
    <template #default>
      content
    </template>
    <template #actions="{ close }">
      <StylizedBtn color="yellow" @click="close">
        Cancel
      </StylizedBtn>
      <StylizedBtn>Proceed</StylizedBtn>
    </template>
  </Modal>
</template>
