<script setup lang="ts">
const { t } = useI18n()
const selectedAnimalIdx = ref(1)
</script>

<template>
  <section id="animal">
    <div class="container py-8">
      <HomeSectionHeading class="text-center my-8">
        {{t('home.animals.title')}}
      </HomeSectionHeading>
      <HomeAnimalAvatars v-model="selectedAnimalIdx" class="my-8" />
      <HomeAnimalContent :selected="selectedAnimalIdx" />
    </div>
  </section>
</template>
