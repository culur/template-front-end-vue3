<script lang="ts">
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { SwiperOptions } from 'swiper/types'

import 'swiper/css'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
})
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:modelValue'])
const selected = useVModel(props, 'modelValue', emit)

const swiperProps: SwiperOptions = {
  navigation: {
    nextEl: '#slide-next',
    prevEl: '#slide-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,
  modules: [Navigation],
}
</script>

<template>
  <div class="max-w-xl w-full mx-auto relative">
    <swiper v-bind="swiperProps" class="px-4">
      <swiper-slide v-for="idx in 10" :key="idx" class="py-4" @click.prevent="selected = idx">
        <HomeAnimalAvatar :idx="idx" :selected="idx === selected" />
      </swiper-slide>
    </swiper>
    <div class="absolute top-1/2 left-0 z-10 flex justify-between transform-gpu -translate-y-1/2">
      <button id="slide-prev" class="text-3xl text-white opacity-80" @click="prev">
        <icon-akar-icons:circle-chevron-left-fill />
      </button>
    </div>
    <div class="absolute top-1/2 right-0 z-10 flex justify-between transform-gpu -translate-y-1/2">
      <button id="slide-next" class="text-3xl text-white opacity-80" @click="next">
        <icon-akar-icons:circle-chevron-right-fill />
      </button>
    </div>
  </div>
</template>
