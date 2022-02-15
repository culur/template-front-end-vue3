<script setup lang="ts">
const { t } = useI18n()
const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  subText: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button
    class="aside-item"
    :class="{
      'aside-item--selected': selected,
      'aside-item--disabled': disabled
    }"
    :disabled="disabled"
  >
    <slot name="icon" />
    <div class="flex flex-col items-end">
      <div class="h-2" />
      <div class="h-19px leading-18px">
        {{ text }}
      </div>
      <div class="h-2 text-8px aside-item__sub-text">
        {{ subText }}
      </div>
    </div>
  </button>
</template>

<style scoped>
.aside-item {
  @apply flex h-56px w-full px-6 items-center;
  @apply text-[#1F1F1F];

  & :deep(svg) {
    @apply text-xl mr-1;
  }

  &:hover {
    @apply bg-[#8e5f0414];
  }

}
.aside-item__sub-text {
  @apply text-[#1F1F1F80];
}

.aside-item--selected {
  @apply bg-[#8E5F0414];

  box-shadow: 0px -4px 0px 0px #8e5f044d inset;
}

.aside-item--disabled {
  @apply opacity-60;
}
</style>
