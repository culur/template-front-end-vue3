<script setup lang="ts">
const { t } = useI18n()

const props = defineProps({
  selected: {
    type: Number,
    required: true,
  },
})

</script>

<template>
  <section>
    <div class="grid">
      <div>
        <h4>{{ t(`home.animals.content.animal-${selected}.title`) }}</h4>
        <p class="whitespace-pre-line">
          {{ t(`home.animals.content.animal-${selected}.content`) }}
        </p>
      </div>
      <div>
        Test
      </div>
    </div>
  </section>
</template>
