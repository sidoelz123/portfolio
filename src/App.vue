<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import SideProfile from './components/SideProfile.vue';

</script>

<template>
  <div class="flex justify-between p-10 gap-10 h-screen bg-neutral-800 font-display">
    <div class="w-1/3 ">
      <SideProfile />
    </div>
    <div class="border-2 w-2/3 rounded-2xl text-white overflow-y-auto no-scrollbar scroll-smooth relative">
      <div class="sticky top-0 pb-6 bg-neutral-800 w-full">
        <h1 class="text-center text-6xl py-2">Portfolio</h1>
        <NavBar />
      </div>
      <main class="px-6 py-6 ">
        <RouterView />
      </main>

    </div>
  </div>
</template>

<style scoped></style>
