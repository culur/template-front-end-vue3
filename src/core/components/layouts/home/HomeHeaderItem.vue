<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()
</script>

<template>
  <li class="h-full !text-white">
    <Link v-if="to.includes('#')" v-smooth-scroll class="h-full flex items-center px-2" v-bind="props">
      <slot />
    </Link>
    <Link v-else class="h-full flex items-center px-2" v-bind="props">
      <slot />
    </Link>
  </li>
</template>
