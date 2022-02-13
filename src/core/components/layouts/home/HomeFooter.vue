<script setup lang="ts">
import { PROJECT_COMMUNITIES } from '@/src/core/constants/config';

const { t } = useI18n()
</script>


<template>
  <footer>
    <div>
      <img class="w-full object-cover" src="/img/home/footer/top_wave.png" alt="Footer Top Wave" />
    </div>
    <div class="bg-[#2AB1D3] -mt-3px py-14">
      <div class="container">
        <div class="flex flex-wrap lg:flex-row flex-col text-center lg:text-left">
          <div class="min-w-44 max-w-320px w-full py-8 lg:pr-16 mx-auto lg:mx-0">
            <Logo />
          </div>
          <div class="flex-1 min-w-40 py-8 text-white">
            <h3 class="font-display uppercase mb-2 text-lg">{{ t('home.footer.about.title') }}</h3>
            <ul class="leading-loose">
              <HomeFooterItem to="#hero">{{ t('nav.links.home') }}</HomeFooterItem>
              <HomeFooterItem to="#about">{{ t('nav.links.about') }}</HomeFooterItem>
              <HomeFooterItem to="#feature">{{ t('nav.links.features') }}</HomeFooterItem>
              <HomeFooterItem to="#tokenomy">{{ t('nav.links.lion') }}</HomeFooterItem>
              <HomeFooterItem to="#team">{{ t('nav.links.team') }}</HomeFooterItem>
              <HomeFooterItem to="#roadmap">{{ t('nav.links.roadmap') }}</HomeFooterItem>
              <HomeFooterItem to="#partner">{{ t('nav.links.partner') }}</HomeFooterItem>
            </ul>
          </div>
          <div class="flex-1 min-w-40 py-8 text-white">
            <h3 class="font-display uppercase mb-2 text-lg">{{ t('home.footer.faq.title') }}</h3>
            <ul class="leading-loose">
              <HomeFooterItem to="#">{{ t('nav.links.whitepaper') }}</HomeFooterItem>
              <HomeFooterItem to="#">{{ t('nav.links.disclaimer') }}</HomeFooterItem>
              <HomeFooterItem to="#">{{ t('nav.links.toc') }}</HomeFooterItem>
              <HomeFooterItem to="#">{{ t('nav.links.faq') }}</HomeFooterItem>
            </ul>
          </div>
          <div class="flex-1 min-w-40 py-8 text-white">
            <h3 class="font-display uppercase mb-2 text-lg">{{ t('home.footer.social.title') }}</h3>
            <ul class="leading-loose">
              <!-- <HomeFooterItem :to="PROJECT_COMMUNITIES.discord">
                <icon-fa-brands:discord class="mr-1" />
                <span>
                  Discord
                </span>
              </HomeFooterItem> -->
              <HomeFooterItem :to="PROJECT_COMMUNITIES.twitter">
                <icon-fa-brands:twitter class="mr-1" />
                <span>
                  Twitter
                </span>
              </HomeFooterItem>
              <HomeFooterItem :to="PROJECT_COMMUNITIES.telegram">
                <icon-fa-brands:telegram class="mr-1" />
                <span>
                  Telegram
                </span>
              </HomeFooterItem>
              <HomeFooterItem :to="PROJECT_COMMUNITIES.facebook">
                <icon-fa-brands:facebook class="mr-1" />
                <span>
                  Facebook
                </span>
              </HomeFooterItem>
              <HomeFooterItem :to="PROJECT_COMMUNITIES.medium">
                <icon-fa-brands:medium class="mr-1" />
                <span>
                  Medium
                </span>
              </HomeFooterItem>
              <HomeFooterItem :to="PROJECT_COMMUNITIES.youtube">
                <icon-fa-brands:youtube class="mr-1" />
                <span>
                  Youtube
                </span>
              </HomeFooterItem>
              <HomeFooterItem :to="PROJECT_COMMUNITIES.instagram">
                <icon-fa-brands:instagram class="mr-1" />
                <span>
                  Instagram
                </span>
              </HomeFooterItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>