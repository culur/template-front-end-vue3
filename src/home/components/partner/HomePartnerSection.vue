<script setup lang="ts">
const { t } = useI18n()

</script>

<template>
  <section id="partner" class="py-14">
    <div class="container text-white text-center">
      <HomeSectionHeading class="text-center mb-14">
        {{t('home.partner.title')}}
      </HomeSectionHeading>
      <div class="flex justify-center">
        <div class="px-8">
          <h3 class="underline uppercase font-bold">
            {{t('home.partner.powered_by')}}
          </h3>
          <img class="mx-auto mb-8 max-w-64" src="/img/home/partner/bsc.png" alt="Binance Smart Chain">
        </div>
        <!-- <div class="px-8">
          <h3 class="underline uppercase font-bold">
            {{t('home.partner.audit_by')}}
          </h3>
          <img class="mx-auto max-w-64" src="/img/home/partner/certik.png" alt="Certik">
        </div> -->
      </div>
    </div>
  </section>
</template>
