<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const isMounted = ref(false)
const close = () => emit('update:modelValue', false)

onMounted(() => isMounted.value = true)
</script>

<template>
  <Teleport v-if="isMounted" to="#modals">
    <div v-show="modelValue" class="modal__overlay" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__box">
          <div class="modal__header">
            <slot name="header" :close="close" />
          </div>
          <div class="modal__content">
            <slot :close="close" />
          </div>
        </div>
        <div class="modal__actions">
          <slot name="actions" :close="close" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal__overlay {
  @apply inset-0 absolute;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  @apply transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute;
}

.modal__box {
  @apply relative;
  @apply border-solid rounded-xl border-4 border-[#4A3011];
  @apply bg-[#FFEAB3] px-3 pt-3 pb-6 w-407px;

  box-shadow: 0px 6px 0px 0px #00000026;
}
.modal__box::before {
  @apply opacity-4 inset-0 absolute;

  content: "";
  background-image: url("/img/textures/wooden.png");
  background-size: 230px;
}
.modal__header {
  @apply relative;
  @apply font-display text-heading text-center text-2xl;
}
.modal__content {
  @apply relative;
}

.modal__actions {
  @apply relative;
  @apply flex -mt-4 items-center justify-center;
}

.modal__actions > :deep(.stylized-button):not(:first-child) {
  @apply ml-2;
}
</style>
