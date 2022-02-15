<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <aside>
    <Card
      class="h-full min-w-240px"
      body-class="h-full overflow-hidden"
      inner-class="h-full"
      inner-shadow
    >
      <img
        src="/img/big-logo.png"
        class="rounded-b-xl object-contain bg-[#282000] h-116px w-full p-2 block"
      >
      <div>
        <DefaultAsideItem selected :text="t('play.my-animals')">
          <template #icon>
            <icon-foundation:paw />
          </template>
        </DefaultAsideItem>
        <DefaultAsideItem :text="t('play.box-shop')">
          <template #icon>
            <icon-ant-design:gift-filled />
          </template>
        </DefaultAsideItem>

        <DefaultAsideItem
          disabled
          :text="t('play.animal-staking')"
          :sub-text="t('play.coming-soon')"
        >
          <template #icon>
            <icon-ph:vault-bold />
          </template>
        </DefaultAsideItem>
        <DefaultAsideItem :text="t('play.racetrack')">
          <template #icon>
            <icon-icons8:finish-flag />
          </template>
        </DefaultAsideItem>
        <DefaultAsideItem :text="t('play.maketplace')">
          <template #icon>
            <icon-ic:round-store />
          </template>
        </DefaultAsideItem>
        <DefaultAsideItem :text="t('play.history')">
          <template #icon>
            <icon-fluent:history-24-filled />
          </template>
        </DefaultAsideItem>
      </div>
    </Card>
  </aside>
</template>
