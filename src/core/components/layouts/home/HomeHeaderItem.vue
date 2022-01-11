<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()
</script>

<template>
  <li class="h-full">
    <Link class="h-full flex items-center px-2" v-bind="props" v-smooth-scroll>
      <slot />
    </Link>
  </li>
</template>
