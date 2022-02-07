<script setup lang="ts">
import { ROADMAP_NODES } from '../../config/home-roadmap.config'

</script>

<template>
  <ul class="max-w-[720px] mx-auto">
    <HomeRoadmapNode v-for="node in ROADMAP_NODES" :key="node.period" :node="node" />
  </ul>
</template>
