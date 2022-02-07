<script setup lang="ts">
const { t } = useI18n()

</script>

<template>
  <section class="py-16">
    <div class="container">
      <HomeSectionHeading class="text-center mb-14">
        {{t('home.roadmap.title')}}
      </HomeSectionHeading>
      <section>
        <HomeRoadmapNodes />
      </section>
    </div>
  </section>
</template>
