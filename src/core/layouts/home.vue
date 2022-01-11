<template>
  <section class="grid grid-rows-[auto,1fr,auto] min-h-full text-base bg-home">
    <HomeHeader class />
    <main>
      <router-view />
    </main>
    <HomeFooter />
  </section>
</template>


<style scoped>
.bg-home {
  @apply bg-[#9FC210] bg-repeat;
  background-image: url('/img/home/body/grass-textures.webp');
}
</style>