<template>
  <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
    <HomeFeatureItem v-for="idx in 4" :key="idx" :idx="idx" />
  </ul>
</template>
