<script lang="ts">
import { defineComponent } from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { ParticlesComponent as Particles } from 'particles.vue3'
import type { ISourceOptions } from 'tsparticles'

export default defineComponent({
  components: { KinesisContainer, KinesisElement, Particles },
  setup() {
    const particleConfig: ISourceOptions = {
      fpsLimit: 60,
      particles: {
        move: {
          bounce: false,
          direction: 'none',
          enable: true,
          outModes: 'out',
          random: true,
          speed: 0.6,
          straight: true,
        },
        number: { density: { enable: true, area: 800 }, value: 50 },
        opacity: {
          value: {
            min: 0.05, max: 0.2,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 10 },
        },
      },
      themes: [
        {
          name: 'light',
          options: {
            background: {
              color: 'transparent',
            },
            particles: {
              color: {
                value: '#fff',
              },
            },
          },
        },
      ],
    }
    return {
      particleConfig,
    }
  },
})
</script>

<template>
  <KinesisContainer class="text-white w-full h-full relative -mt-4">
    <KinesisElement
      v-for="index in 4"
      :key="index"
      class="absolute -left-[7%] top-0 h-[114%] w-[114%]"
      :strength="5 * index"
    >
      <picture>
        <img
          data-aos="fade"
          data-aos-delay="400"
          class="h-full w-full object-cover"
          :src="`/img/home/hero/l${5 - index}.png`"
          :alt="`Para layer ${index}`"
        >
      </picture>
    </KinesisElement>
    <KinesisElement class="absolute -left-[7%] top-0 h-[114%] w-[114%]" :strength="30">
      <div class="absolute inset-0 bottom-3/4 block bg-gradient-to-b from-black to-transparent" />
    </KinesisElement>
    <KinesisElement class="absolute -left-[7%] top-0 h-[114%] w-[114%]" :strength="0">
      <Particles id="tsparticles" :options="particleConfig" />
    </KinesisElement>
    <KinesisElement class="absolute left-1/2 top-1/2" :strength="15" type="depth">
      <div class="transform-gpu -translate-x-[50%] -translate-y-[50%]">
        <picture>
          <img
            data-aos="fade"
            data-aos-delay="400"
            class="object-contain"
            src="/img/home/hero/intro-board.png"
            alt="Intro Board"
          >
        </picture>
        <Link to="https://www.youtube.com/watch?v=8k2CqS3smes&list=RD8k2CqS3smes&start_radio=1">
          <picture>
            <img
              data-aos="fade"
              data-aos-delay="400"
              class="object-contain mx-auto -mt-12 transform-gpu transition-transform duration-300 hover:scale-115"
              src="/img/home/hero/intro-play.png"
              alt="Intro Play"
            >
          </picture>
        </Link>
      </div>
    </KinesisElement>
  </KinesisContainer>
</template>
