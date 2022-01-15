<script setup lang="ts">

const { t } = useI18n()

</script>

<template>
  <div class="flex flex-col justify-center">
    <HomeSectionHeading>
      {{ t('home.about.title') }}
    </HomeSectionHeading>
    <small class="text-sub font-display text-sm">
      {{ t('home.about.subtitle') }}
    </small>
    <p class="mt-10px whitespace-pre-line leading-tight ">
      {{ t('home.about.content') }}
    </p>
  </div>
</template>