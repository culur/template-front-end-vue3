<script setup lang="ts">

const { t } = useI18n()

</script>

<template>
  <div class="flex flex-col justify-center">
    <h1 class="font-display uppercase text-heading text-4xl">
      {{ t('home.about.title') }}
    </h1>
    <small class="text-sub font-display text-sm">
      {{ t('home.about.subtitle') }}
    </small>
    <p class="mt-10px whitespace-pre-line leading-tight ">
      {{ t('home.about.content') }}
    </p>
  </div>
</template>