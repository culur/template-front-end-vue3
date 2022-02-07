<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()
</script>

<template>
  <li>
    <Link class="flex items-center" v-bind="props" v-smooth-scroll>
      <slot />
    </Link>
  </li>
</template>
