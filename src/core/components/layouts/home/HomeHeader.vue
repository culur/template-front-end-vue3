<script setup lang="ts">
const { t } = useI18n()
const { arrivedState } = useScroll(document)
const { top } = toRefs(arrivedState)
</script>

<template>
  <header class="relative">
    <nav class="h-20 md:h-32 fixed inset-0 text-white z-1031" :class="[!top && 'bg-black bg-opacity-70']">
      <div class="container h-full">
        <ul class="flex items-center md:justify-start justify-center h-full -mx-2 font-display uppercase">
          <HomeHeaderItem to="/">
            <Logo class="text-xl" />
          </HomeHeaderItem>
          <ul class="h-full hidden md:flex items-center ml-auto">
            <HomeHeaderItem to="#hero">{{ t('nav.links.home') }}</HomeHeaderItem>
            <HomeHeaderItem to="#about">{{ t('nav.links.about') }}</HomeHeaderItem>
            <HomeHeaderItem to="#feature">{{ t('nav.links.features') }}</HomeHeaderItem>
            <HomeHeaderItem to="#tokenomy">{{ t('nav.links.lion') }}</HomeHeaderItem>
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
      <div class="absolute top-0 bottom-0 w-20 right-0 flex items-center justify-center md:hidden" @click="">
        <div class="w-14 h-14 text-2xl flex items-center justify-center bg-no-repeat bg-center bg-contain" style="background-image: url('/img/icons/wooden-btn.svg')">
          <img class="h-[1em] w-auto" src="/img/icons/menu-icon.svg" alt="...">
        </div>
      </div>
    </nav>
  </header>
</template>
