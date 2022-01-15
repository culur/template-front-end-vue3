<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:modelValue'])
const selected = useVModel(props, 'modelValue', emit)
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fit,65px)] md:grid-cols-[repeat(auto-fit,130px)] justify-center gap-4 md:gap-12">
    <li v-for="idx in 4" :key="idx" @click.prevent="selected = idx" class="">
      <HomeAnimalAvatar :idx="idx" :selected="idx === selected" />
    </li>
  </ul>
</template>
