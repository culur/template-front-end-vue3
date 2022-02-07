<script setup lang="ts">
const { t } = useI18n()
const { arrivedState } = useScroll(document)
const { top } = toRefs(arrivedState)
</script>

<template>
  <header class="relative">
    <nav :class="['h-32 fixed inset-0 text-white z-1031', !top && 'bg-black bg-opacity-70']">
      <div class="container h-full">
        <ul class="flex items-center h-full -mx-2 font-display uppercase">
          <HomeHeaderItem to="/">
            <Logo class="text-xl" />
          </HomeHeaderItem>
          <ul class="h-full hidden md:flex items-center ml-auto">
            <HomeHeaderItem to="#hero">{{ t('nav.links.home') }}</HomeHeaderItem>
            <HomeHeaderItem to="#about">{{ t('nav.links.about') }}</HomeHeaderItem>
            <HomeHeaderItem to="#features">{{ t('nav.links.features') }}</HomeHeaderItem>
            <HomeHeaderItem to="#token">{{ t('nav.links.lion') }}</HomeHeaderItem>
            <HomeHeaderItem to="#team">{{ t('nav.links.team') }}</HomeHeaderItem>
            <!-- <HomeHeaderItem to="/staking">
              <BaseBtn class="text-[#FB8428] bg-[#FCD6A3]">{{ t('button.staking') }}</BaseBtn>
            </HomeHeaderItem> -->
            <HomeHeaderItem to="/#coming-soon">
              <BaseBtn class="text-white bg-[#FB8428]">{{ t('button.play') }}</BaseBtn>
            </HomeHeaderItem>
          </ul>
        </ul>
      </div>
    </nav>
  </header>
</template>
