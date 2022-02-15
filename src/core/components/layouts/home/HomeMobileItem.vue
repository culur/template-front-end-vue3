<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()
</script>

<template>
  <li>
    <Link v-if="to.includes('#')" v-smooth-scroll class="text-center py-2 block px-2" v-bind="props">
      <slot />
    </Link>
    <Link v-else class="text-center py-2 block px-2" v-bind="props">
      <slot />
    </Link>
  </li>
</template>
