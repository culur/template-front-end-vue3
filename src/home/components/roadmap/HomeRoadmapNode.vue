<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { RoadmapNodeData } from '../../config/home-roadmap.config'
import MarkdownIt from '~/core/components/markdown'

export default defineComponent({
  components: { MarkdownIt },
})
</script>
<script setup lang="ts">

const { t } = useI18n()
const props = defineProps({
  node: {
    type: Object as PropType<RoadmapNodeData>,
    required: true,
  },
})

</script>

<template>
  <li class="flex items-stretch">
    <div class="w-7">
      <div class="w-6 flex items-center justify-center relative h-full">
        <div class="block w-0.5 bg-[#E6F5CF] h-full" />
        <div
          class="absolute left-1/2 top-1/2 transform-gpu -translate-y-1/2 -translate-x-1/2 rounded-full w-10px h-10px"
          :class="node.active ? 'bg-[#378E04]' : 'bg-[#A05D20]'"
        />
      </div>
    </div>
    <div class="flex-1 flex items-center">
      <div class="bg-white bg-opacity-60 w-full p-8 rounded-lg my-4">
        <h3 class="text-xl font-bold" :class="node.active ? 'text-[#378E04]' : 'text-sub'">
          {{ t(node.period) }}
        </h3>
        <MarkdownIt class="roadmap-content" :content="t(node.content)" />
      </div>
    </div>
  </li>
</template>

<style scoped>
:deep(.roadmap-content li) {
  @apply list-square;
}
:deep(.roadmap-content ul) {
  @apply pl-4;
}
:deep(.roadmap-content) {
  @apply text-text text-sm;
}
</style>
