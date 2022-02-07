<script setup lang="ts">
import type { PropType } from 'vue'
import type { TeamData } from '../../config/home-team.config'

const { t } = useI18n()
const props = defineProps({
  team: {
    type: Object as PropType<TeamData>,
    required: true,
  },
})

</script>

<template>
  <div class="text-center text-white py-4">
    <div class="rounded-40px overflow-hidden">
      <img :src="team.image" :alt="team.name" />
    </div>
    <h3 class="md:text-2xl" >{{ team.name }}</h3>
    <small class="md:text-base text-opacity-60 text-white leading-none">{{ team.title }}</small>
  </div>
</template>
