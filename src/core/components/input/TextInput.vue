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
    type="text"
    :model-value="modelValue"
    :error="error"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
