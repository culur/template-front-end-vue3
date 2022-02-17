<script lang="ts" setup>

const props = defineProps({
  size: {
    type: String,
    default: 'md',
  },
  color: {
    type: String,
    default: 'green',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  let size = props.size
  let color = props.color
  if (!['md', 'lg'].includes(size))
    size = 'md'

  if (!['green', 'yellow'].includes(color))
    color = 'green'

  return [`is-${size}`, `is-${color}`, { disabled: props.disabled }]
})

</script>

<template>
  <button
    class="flex text-white stylized-button items-center"
    :class="classes"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.stylized-button {
  @apply px-6 font-display;
  @apply transition-all duration-150;
}
.stylized-button.is-md {
  @apply h-6 text-xs rounded-lg;
}
.stylized-button.is-lg {
  @apply h-8 text-base rounded-xl;
}
.stylized-button.is-green {
  box-shadow: 0px 4px 0px #378e04;
  @apply bg-[#3AA700];
}
.stylized-button.is-green:hover {
  box-shadow: 0px 5px 0px #378e04;
  @apply transform-gpu -translate-y-1px;
  @apply bg-[#43c100];
  @apply transition-all duration-150;
}
.stylized-button.is-green:active {
  box-shadow: 0px 2px 0px #378e04;
  @apply transform-gpu translate-y-2px;
  @apply bg-[#43c100];
  @apply transition-all duration-150;
}
.stylized-button.is-yellow {
  box-shadow: 0px 4px 0px #d99c27;
  @apply bg-[#FFB82E] text-[#45320C];
}
.stylized-button.is-yellow:hover {
  box-shadow: 0px 5px 0px #d99c27;
  @apply transform-gpu -translate-y-1px;
  @apply bg-[#ffc148];
  @apply transition-all duration-150;
}
.stylized-button.is-yellow:active {
  box-shadow: 0px 2px 0px #d99c27;
  @apply transform-gpu translate-y-2px;
  @apply bg-[#ffaf15];
  @apply transition-all duration-150;
}

.stylized-button.disabled,
.stylized-button.disabled:hover,
.stylized-button.disabled:active {
  box-shadow: 0px 4px 0px 0px #7b7b7b;
  @apply cursor-not-allowed bg-[#9B9B9B] text-white;
}

.stylized-button.disabled:hover,
.stylized-button.disabled:active {
  @apply transform-none;
}
</style>
