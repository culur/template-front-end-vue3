<script lang="ts" setup>
const props = defineProps({
  bodyClass: {
    type: String,
    default: '',
  },
  innerClass: {
    type: String,
    default: '',
  },
  innerShadow: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="card"
    :class="{
      'card--inner-shadow': innerShadow
    }"
  >
    <div class="card__inner" :class="innerClass">
      <div class="card__body" :class="bodyClass">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply relative;
  @apply border-4 rounded-20px overflow-hidden;
  @apply bg-[#946305] border-[#4A3011];
  @apply p-2.5;

  box-shadow: 0px 6px 0px 0px #00000026;
}

.card--inner-shadow .card__body {
  box-shadow: 0px 14px 0px 0px #fff2d1 inset, 0px -23px 0px 0px #0000001c inset;
}

.card::before {
  @apply opacity-30 inset-0 absolute;

  content: "";
  background-image: url("/img/textures/wooden.png");
  background-size: 230px;
}

.card__inner {
  @apply relative;
  @apply rounded-xl border-4 border-[#4A3011];
  @apply bg-[#FFEAB3];
}

.card__inner::before {
  @apply opacity-4 inset-0 absolute;

  content: "";
  background-image: url("/img/textures/wooden.png");
  background-size: 230px;
}
.card__body {
  @apply relative;
  @apply rounded-lg overflow-hidden;
}
</style>
