<script setup lang="ts">
import { isDark, toggleDark } from '~/core/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <icon-carbon:campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <icon-carbon:moon v-if="isDark" />
      <icon-carbon:sun v-else />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <icon-carbon:language />
    </a>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <icon-carbon:dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <icon-carbon:logo-github />
    </a>
  </nav>
</template>
