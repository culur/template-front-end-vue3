<script setup lang="ts">
const { t } = useI18n()

const hoverLegend = shallowRef(-1)

const onHoverLegend = (index: number) => {
  hoverLegend.value = index
}

</script>

<template>
  <section class="bg-black bg-opacity-10 py-14">
    <div class="container">
      <HomeSectionHeading class="text-center text-[#F2FFE6] mb-14">
        {{t('home.tokenomy.title')}}
      </HomeSectionHeading>

      <div class="grid grid-cols-12 max-w-screen-lg mx-auto px-4 auto-rows-min  ">
        <HomeTokenomyLegends :active="hoverLegend" class="col-span-12 lg:col-span-5 row-start-2 lg:row-start-1 -mt-16 lg:mt-0" />
        <HomeTokenomyChart @legend="onHoverLegend" class="col-span-12 lg:col-span-7" />
      </div>
    </div>
  </section>
</template>
