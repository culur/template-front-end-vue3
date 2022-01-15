<script setup lang="ts">
import { FEATURE_ICON_MAP } from '../../config/home-feature.config';

const { t } = useI18n()

const props = defineProps({
  idx: {
    type: Number,
    required: true,
  },
})

</script>

<template>
  <li class="feature-item">
    <div class="h-150px w-150px md:h-245px md:w-245px bg-grass-block flex items-center justify-center">
      <img class="w-5/12 h-auto block" :src="FEATURE_ICON_MAP[idx]" :alt="`Feature ${idx}`">
    </div>
    <h4 class="font-display text-2xl mt-2 mb-4 text-[#FFF47C]">
      {{ t(`home.features.content.feature-${idx}.title`) }}
    </h4>
    <p class="whitespace-pre-line">
      {{ t(`home.features.content.feature-${idx}.content`) }}
    </p>
  </li>
</template>

<style scoped>
.bg-grass-block {
  @apply bg-no-repeat bg-center bg-contain;
  background-image: url(/img/home/features/grass-block.png)
}

.feature-item {
  @apply flex flex-col items-center;
}
.feature-item .bg-grass-block {
  @apply transition duration-300;
}
.feature-item:hover .bg-grass-block {
  @apply transform-gpu scale-115 rotate-6 transition duration-300;
}
</style>
