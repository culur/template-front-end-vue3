<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
})
</script>

<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

// Return locale list except current used locale
const validLocales = computed(() => availableLocales.filter((l) => l !== locale.value))
const setLocale = (id: string) => {
  locale.value = id
}

const attrs = useAttrs()
</script>

<template>
  <span v-bind="attrs" class="flex items-center">
    {{ t('locale.name') }}
    <icon-carbon-caret-down class="text-xs" />
  </span>
  <div class="bg-black shadow-xl text-white overflow-hidden min-w-28">
    <div
      v-for="item in validLocales"
      :key="item"
      class="cursor-pointer"
      @click="setLocale(item)"
    >{{ t('locale.name', '-', { locale: item }) }}</div>
  </div>
</template>
