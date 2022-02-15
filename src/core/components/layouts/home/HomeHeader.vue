<script setup lang="ts">
import { PROJECT_DOCUMENT, PROJECT_COMMUNITIES } from '@/src/core/constants/config'

const { t } = useI18n()
const { arrivedState } = useScroll(document)
const { top } = toRefs(arrivedState)
</script>

<template>
  <header class="relative">
    <nav
      class="h-28 md:h-32 fixed inset-0 text-white z-1031"
      :class="[!top && 'bg-black bg-opacity-70']"
    >
      <div class="container h-full">
        <ul class="flex items-center h-full -mx-2 font-display uppercase">
          <HomeHeaderItem to="/">
            <Logo class="text-xl" />
          </HomeHeaderItem>
          <ul class="h-full hidden md:flex items-center ml-auto">
            <HomeHeaderItem to="#hero">{{ t('nav.links.home') }}</HomeHeaderItem>
            <HomeHeaderItem to="#about">{{ t('nav.links.about') }}</HomeHeaderItem>
            <HomeHeaderItem :to="PROJECT_DOCUMENT.whitepaper">{{ t('nav.links.whitepaper') }}</HomeHeaderItem>
            <HomeHeaderItem to="#feature">{{ t('nav.links.features') }}</HomeHeaderItem>
            <HomeHeaderItem to="#tokenomy">{{ t('nav.links.lion') }}</HomeHeaderItem>
            <HomeHeaderItem to="#team">{{ t('nav.links.team') }}</HomeHeaderItem>
            <HomeHeaderItem to="#partner">{{ t('nav.links.partner') }}</HomeHeaderItem>
            <!-- TODO: Replace with floating-vue later -->
            <el-dropdown>
              <HomeHeaderItem to="#">
                <span>{{ t('nav.links.community') }}</span>
                <icon-bi:caret-down-fill class="text-[0.8em] ml-1" />
              </HomeHeaderItem>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <Link :to="PROJECT_COMMUNITIES.discord" class="flex items-center">
                      <icon-fa-brands:discord class="mr-2" />
                      <span>Discord</span>
                    </Link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <Link :to="PROJECT_COMMUNITIES.twitter" class="flex items-center">
                      <icon-fa-brands:twitter class="mr-2" />
                      <span>Twitter</span>
                    </Link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <Link :to="PROJECT_COMMUNITIES.telegram" class="flex items-center">
                      <icon-fa-brands:telegram class="mr-2" />
                      <span>Telegram</span>
                    </Link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <Link :to="PROJECT_COMMUNITIES.medium" class="flex items-center">
                      <icon-fa-brands:medium class="mr-2" />
                      <span>Medium</span>
                    </Link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <Link :to="PROJECT_COMMUNITIES.facebook" class="flex items-center">
                      <icon-fa-brands:facebook class="mr-2" />
                      <span>Facebook</span>
                    </Link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <Link :to="PROJECT_COMMUNITIES.youtube" class="flex items-center">
                      <icon-fa-brands:twitter class="mr-2" />
                      <span>Youtube</span>
                    </Link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <Link :to="PROJECT_COMMUNITIES.instagram" class="flex items-center">
                      <icon-fa-brands:instagram class="mr-2" />
                      <span>Instagram</span>
                    </Link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <HomeHeaderItem to="/#coming-soon">
              <HomePlayBtn />
            </HomeHeaderItem>
          </ul>
        </ul>
      </div>
      <HomeBurger
        class="absolute top-0 bottom-0 w-20 right-0 flex items-center justify-center md:hidden"
      />
    </nav>
  </header>
</template>
