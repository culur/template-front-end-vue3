<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()
</script>

<template>
  <li>
    <Link class="text-center py-3 block px-2" v-bind="props" v-smooth-scroll>
      <slot />
    </Link>
  </li>
</template>
