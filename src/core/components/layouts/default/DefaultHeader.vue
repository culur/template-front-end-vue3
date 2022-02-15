<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header>
    <Card body-class="flex justify-between p-3">
      <div class="flex items-center">
        <div>
          <span class="font-display mr-1">{{ t('common.balance') }}:</span>
          <span>0 {{ t('nav.links.lion') }}</span>
        </div>
        <img class="h-4 ml-1 w-4" src="/img/token-logo.png">
      </div>
      <StylizedBtn>{{ t('button.connect-wallet') }}</StylizedBtn>
    </Card>
  </header>
</template>
