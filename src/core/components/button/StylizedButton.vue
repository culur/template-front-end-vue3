<template>
  <button
    class="h-10 px-6 uppercase text-base rounded-full transform hover:scale-105 transition-transform duration-300 flex items-center active:translate-y-0.5"
  >
    <slot />
  </button>
</template>

<style scoped>
.stylized-button {
  @apply px-6;
}
.stylized-button.is-md {
  @apply h-6 text-sm;
}
.stylized-button.is-lg {
  @apply h-8 text-sm;
}
</style>
