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
  innerShadowTop: {
    type: Boolean,
    default: false,
  },
  innerShadowBottom: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="card"
    :class="{
      'card--inner-shadow-top': innerShadowTop,
      'card--inner-shadow-bottom': innerShadowBottom,
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
  @apply border-[#4A3011];
  @apply p-2.5;

  box-shadow: 0px 6px 0px 0px #00000026;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    #946305;
}

.card--inner-shadow-top .card__body {
  box-shadow: 0px 14px 0px 0px #fff2d1 inset;
}
.card--inner-shadow-bottom .card__body {
  box-shadow: 0px -23px 0px 0px #0000001c inset;
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
