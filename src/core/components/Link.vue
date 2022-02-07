<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()

const isImageUrl = computed(() => /\.(png|jpg|jpeg|gif|svg)$/i.test(props.to))
const isHTTP = computed(() => /^https?:\/\//i.test(props.to))
const isHash = computed(() => /^#/i.test(props.to))
const isAHref = computed(() => isHTTP.value || isImageUrl.value || isHash.value)
</script>

<template>
  <a v-if="disabled">
    <slot />
  </a>
  <a v-else-if="isAHref" :href="props.to" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
  <router-link v-else :to="props.to">
    <slot />
  </router-link>
</template>
