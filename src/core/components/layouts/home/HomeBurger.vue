<script setup lang="ts">
import { PROJECT_COMMUNITIES, PROJECT_DOCUMENT } from '@/src/core/constants/config'

const { t } = useI18n()
const showMenu = ref(false)

</script>

<template>
  <div
    class="absolute top-0 bottom-0 w-20 right-0 flex items-center justify-center md:hidden"
    @click="showMenu = true"
  >
    <div
      class="w-14 h-14 text-2xl flex items-center justify-center bg-no-repeat bg-center bg-contain"
      style="background-image: url('/img/icons/wooden-btn.svg')"
    >
      <img class="h-[1em] w-auto" src="/img/icons/menu-icon.svg" alt="Menu">
    </div>
  </div>
  <el-drawer
    v-model="showMenu"
    custom-class="anidrawer"
    :with-header="false"
    direction="rtl"
    :size="256"
  >
    <div class="flex flex-col h-full">
      <ul class="flex flex-col text-text" @click="showMenu = false">
        <HomeMobileItem class="mb-4" to="/#coming-soon">
          <HomePlayBtn class="block w-full" />
        </HomeMobileItem>
        <HomeMobileItem to="#hero">
          {{ t('nav.links.home') }}
        </HomeMobileItem>
        <HomeMobileItem to="#about">
          {{ t('nav.links.about') }}
        </HomeMobileItem>
        <HomeMobileItem :to="PROJECT_DOCUMENT.whitepaper">
          {{ t('nav.links.whitepaper') }}
        </HomeMobileItem>
        <HomeMobileItem to="#feature">
          {{ t('nav.links.features') }}
        </HomeMobileItem>
        <HomeMobileItem to="#tokenomy">
          {{ t('nav.links.lion') }}
        </HomeMobileItem>
        <HomeMobileItem to="#team">
          {{ t('nav.links.team') }}
        </HomeMobileItem>
        <HomeMobileItem to="#partner">
          {{ t('nav.links.partner') }}
        </HomeMobileItem>
      </ul>

      <ul
        class="max-w-9/10 mx-auto mt-4 flex justify-center flex-wrap items-center gap-2"
        @click="showMenu = false"
      >
        <!-- <HomeFooterItem :to="PROJECT_COMMUNITIES.discord">
                  <icon-fa-brands:discord />
                  <span>
                    Discord
                  </span>
        </HomeFooterItem>-->
        <HomeFooterItem :to="PROJECT_COMMUNITIES.twitter">
          <Circle class="bg-heading text-white w-10 text-xs">
            <icon-fa-brands:twitter />
          </Circle>
        </HomeFooterItem>
        <HomeFooterItem :to="PROJECT_COMMUNITIES.telegram">
          <Circle class="bg-heading text-white w-10 text-xs">
            <icon-fa-brands:telegram-plane />
          </Circle>
        </HomeFooterItem>
        <HomeFooterItem :to="PROJECT_COMMUNITIES.facebook">
          <Circle class="bg-heading text-white w-10 text-xs">
            <icon-fa-brands:facebook-f />
          </Circle>
        </HomeFooterItem>
        <HomeFooterItem :to="PROJECT_COMMUNITIES.medium">
          <Circle class="bg-heading text-white w-10 text-xs">
            <icon-fa-brands:medium-m />
          </Circle>
        </HomeFooterItem>
        <HomeFooterItem :to="PROJECT_COMMUNITIES.youtube">
          <Circle class="bg-heading text-white w-10 text-xs">
            <icon-fa-brands:youtube />
          </Circle>
        </HomeFooterItem>
        <HomeFooterItem :to="PROJECT_COMMUNITIES.instagram">
          <Circle class="bg-heading text-white w-10 text-xs">
            <icon-fa-brands:instagram />
          </Circle>
        </HomeFooterItem>
      </ul>

      <ul
        class="mt-auto text-text text-opacity-60 mb-8 gap-2 text-xs flex flex-col"
        @click="showMenu = false"
      >
        <HomeFooterItem :to="PROJECT_DOCUMENT.tnc">
          {{ t('nav.links.toc') }}
        </HomeFooterItem>
        <HomeFooterItem :to="PROJECT_DOCUMENT.faq">
          {{ t('nav.links.faq') }}
        </HomeFooterItem>
      </ul>
    </div>
  </el-drawer>
</template>

<style>
.anidrawer {
  --el-drawer-bg-color: #ffeab3;
  background-image: url(/img/textures/wooden4.png);
  @apply bg-repeat border-[#4A3011] border-l-6;
  @apply h-full;
}
</style>
