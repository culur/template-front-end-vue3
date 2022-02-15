<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()
</script>

<template>
  <li>
    <Link v-if="to.includes('#')" v-smooth-scroll class="flex items-center lg:justify-start justify-center" v-bind="props">
      <slot />
    </Link>
    <Link v-else class="flex items-center lg:justify-start justify-center" v-bind="props">
      <slot />
    </Link>
  </li>
</template>
