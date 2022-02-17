<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <BaseInput
    type="number"
    :model-value="modelValue"
    :error="error"
    class="number-input"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<style scoped>
.number-input {
  @apply text-right;
  -moz-appearance: textfield;
}

.number-input::-webkit-outer-spin-button,
.number-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
