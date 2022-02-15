<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Card
    class="h-full"
    body-class="h-full py-10px px-3"
    inner-class="h-full"
    inner-shadow
  >
    <div class="flex text-heading items-center">
      <icon-foundation:paw class="text-3xl" />
      <div class="font-display ml-2 text-2xl">
        {{ t('play.my-animals') }}
      </div>
    </div>
  </Card>
</template>
