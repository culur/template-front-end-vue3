<template>
  <section id="hero" class="h-screen overflow-hidden bg-light-900 hero-mask">
    <HomeHeroParallax />
  </section>
</template>

<style scoped>
.hero-mask {
  -webkit-mask-image: -webkit-gradient(
    linear,
    center top,
    center bottom,
    color-stop(0.94, rgba(0, 0, 0, 1)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
}
</style>