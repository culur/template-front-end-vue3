<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <StylizedBtn size="lg" color="green" class="justify-center min-w-32">
    {{ t('button.play') }}
  </StylizedBtn>
</template>
