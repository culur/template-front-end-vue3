<script lang="ts">
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { ANIMAL_BLOB } from '../../config/home-animals.config'
import { ANIMAL_MAP } from '../../config/home-character.config'

export default defineComponent({
  components: { KinesisContainer, KinesisElement },
  props: {
    selected: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    const { t } = useI18n()
    return { t, ANIMAL_MAP, ANIMAL_BLOB }
  },
})
</script>

<template>
  <transition name="el-fade-in" mode="out-in">
    <section :key="selected" class="max-w-screen-920px mx-auto my-16">
      <div class="grid lg:grid-cols-[repeat(2,420px)] gap-8 px-4">
        <div
          class="row-start-2 lg:row-start-1 flex flex-col justify-center text-center lg:text-left"
        >
          <h4
            class="text-2xl lg:text-4xl font-display text-[#66412F] mb-4"
          >{{ t(`home.animals.content.animal-${selected}.title`) }}</h4>
          <p
            class="whitespace-pre-line lg:text-2xl text-[#33260B]"
          >{{ t(`home.animals.content.animal-${selected}.content`) }}</p>
        </div>
        <div class="row-start-1">
          <div class="flex justify-center">
            <KinesisContainer class="relative">
              <KinesisElement :strength="5" class="lg:w-396px w-full">
                <svg
                  width="100%"
                  height="auto"
                  :viewBox="ANIMAL_BLOB[selected].viewBox"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    :d="ANIMAL_BLOB[selected].d"
                    :fill="ANIMAL_BLOB[selected].fill"
                  />
                </svg>
              </KinesisElement>
              <KinesisElement
                :strength="15"
                axis="x"
                class="absolute inset-0 flex justify-center items-center"
              >
                <img
                  class="h-8/10"
                  :src="`/img/characters/${ANIMAL_MAP[selected]}.png`"
                  alt="The Animal"
                />
              </KinesisElement>
            </KinesisContainer>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>
