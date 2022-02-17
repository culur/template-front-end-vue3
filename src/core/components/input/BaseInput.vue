<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
})

const onInput = (e: Event) => {
  emit('update:modelValue', (e.currentTarget as HTMLInputElement).value)
}
</script>

<template>
  <input
    class="base-input"
    :class="{ error }"
    :type="type"
    :value="modelValue"
    @input="onInput"
  >
</template>

<style scoped>
.base-input {
  @apply h-9 px-2;
  @apply rounded-lg border-[#4A3011] border-2 focus:outline-none;
  @apply text-sub;

  box-shadow: 0px -6px 0px 0px #0000001c inset;
}
.base-input.error {
  @apply border-[#E20000] text-[#FF3131];
}
</style>
