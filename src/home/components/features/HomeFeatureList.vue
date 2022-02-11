<template>
  <ul class="grid md:grid-cols-3 gap-12 justify-center">
    <HomeFeatureItem v-for="idx in 3" :key="idx" :idx="idx" />
  </ul>
</template>
