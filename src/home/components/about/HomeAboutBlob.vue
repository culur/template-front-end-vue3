
<script lang="ts">
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import type { BlobConfig } from '@/src/core/typings/blob.type'

export default defineComponent({
  components: { KinesisContainer, KinesisElement },
})
</script>

<script setup lang="ts">

const blobConfig: BlobConfig = {
  name: 'about-blob',
  viewBox: '0 0 637 693',
  // eslint-disable-next-line max-len
  path: 'M339.654 1.23767C408.439 9.80788 447.984 79.5733 500.8 124.465C548.477 164.989 616.946 190.454 633.321 250.846C649.557 310.727 595.132 364.405 582.318 425.11C567.14 497.018 601.61 584.131 551.604 637.988C501.054 692.431 412.614 700.466 339.654 686.462C272.545 673.581 235.693 605.585 179.585 566.58C121.67 526.319 31.0149 520.633 6.15773 454.623C-18.6781 388.671 38.0081 322.281 62.7385 256.289C86.1038 193.939 97.4539 125.422 146.429 80.3132C198.903 31.9832 268.862 -7.58248 339.654 1.23767Z',
}
</script>

<template>
  <div class="md:w-[410px] flex justify-center">
    <KinesisContainer class="w-full max-w-410px">
      <KinesisElement :strength="15" type="depth">
        <BlobMask
          class="inner-shadow relative"
          :name="blobConfig.name"
          :path="blobConfig.path"
          :view-box="blobConfig.viewBox"
        >
          <KinesisElement class="absolute inset-y-0" :strength="0">
            <picture>
              <img
                data-aos="fade"
                data-aos-delay="400"
                class="h-full object-cover"
                :src="`/img/home/about/l0.png`"
                :alt="`About layer 0`"
              >
            </picture>
          </KinesisElement>
          <KinesisElement class="absolute inset-y-0" :strength="5">
            <picture>
              <img
                data-aos="fade"
                data-aos-delay="400"
                class="h-full object-cover"
                :src="`/img/home/about/l2.png`"
                :alt="`About layer 0`"
              >
            </picture>
          </KinesisElement>
          <KinesisElement class="absolute inset-y-0" :strength="0">
            <picture>
              <img
                data-aos="fade"
                data-aos-delay="400"
                class="h-full object-cover"
                :src="`/img/home/about/l3.png`"
                :alt="`About layer 0`"
              >
            </picture>
          </KinesisElement>
          <KinesisElement class="absolute inset-y-0" :strength="10">
            <picture>
              <img
                data-aos="fade"
                data-aos-delay="400"
                class="h-full object-cover"
                :src="`/img/home/about/l1.png`"
                :alt="`About layer 0`"
              >
            </picture>
          </KinesisElement>
        </BlobMask>
      </KinesisElement>
    </KinesisContainer>
  </div>
</template>

<style scoped>
:deep(.inner-shadow) {
  filter: drop-shadow(0px 56.6627px 113.325px rgba(39, 39, 39, .5));
}
</style>
