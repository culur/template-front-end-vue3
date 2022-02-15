<template>
  <section class="default-layout">
    <DefaultAside class="row-span-2" />
    <DefaultHeader class="col-span-1" />
    <main>
      <router-view />
    </main>
  </section>
</template>

<style scoped>
.default-layout {
  @apply grid gap-2 grid-rows-[auto,1fr] grid-cols-[auto,1fr];
  @apply h-full p-4 relative;
  @apply bg-[#46402A];

  &:before {
    @apply inset-0 absolute;
    @apply opacity-30;

    content: '';
    background-image: url('/img/textures/dirt-pattern.png');
    background-size: 100px;
  }
}
</style>
