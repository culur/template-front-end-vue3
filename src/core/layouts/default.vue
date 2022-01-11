<template>
  <section class="grid grid-rows-[auto,1fr,auto] grid-cols-[auto,1fr] h-full">
    <DefaultHeader class="col-span-2" />
    <DefaultAside class />
    <main>
      <router-view />
    </main>
    <DefaultFooter class="col-span-2" />
  </section>
</template>
