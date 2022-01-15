<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="bg-features">
    <div class="container text-center py-14 text-white">
      <HomeSectionHeading class="text-[#DBF425] mb-8"> {{ t("home.features.title") }} </HomeSectionHeading>
      <HomeFeatureList />
    </div>
  </section>
</template>

<style scoped>
.bg-features {
  @apply bg-[#4A2B00] bg-repeat;
  background-image: url(/img/home/features/ground-textures.png);
}
</style>
