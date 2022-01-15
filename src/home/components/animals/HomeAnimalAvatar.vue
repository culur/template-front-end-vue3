<script lang="ts">
import { defineComponent } from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import type { BlobConfig } from '@/src/core/typings/blob.type'

export default defineComponent({
  components: { KinesisContainer, KinesisElement },
  props: {
    idx: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<template>
  <KinesisContainer class="aspect-square relative cursor-pointer">
    <KinesisElement strength="15" type="rotate" class="inset-0 absolute">
      <div class="absolute inset-x-0 top-0 bottom-1 overflow-hidden rounded-5xl bg-[#375B18]">
        <img
          :src="`/img/home/animals/animal-${idx}.png`"
          :alt="`Animal ${idx}`"
          class="w-full h-full object-cover"
        >
      </div>
      <div class="inset-0 absolute bg-leaves-frame block" :class="selected && 'is-active'" />
    </KinesisElement>
  </KinesisContainer>
</template>

<style scoped>
.bg-leaves-frame {
  @apply bg-contain bg-no-repeat bg-center;
  background-image: url(/img/home/animals/leaves-frame.png), url(/img/home/animals/leaves-frame-highlighted.png);
}
.bg-leaves-frame.is-active {
  background-image: url(/img/home/animals/leaves-frame-highlighted.png);
}
</style>
