<script setup lang="ts">
import { ref } from 'vue';
import Modals from './components/Modals.vue';
import NavBar from './components/NavBar.vue';
import SideProfile from './components/SideProfile.vue';
import { GlHamburger } from '@kalimahapps/vue-icons';
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const handleConfirm = () => {
  alert('Confirmed!');
  isModalOpen.value = false;
};
</script>

<template>
  <div class="flex justify-between p-2 lg:p-10 gap-10 h-screen bg-neutral-800 font-display relative">
    <button @click="openModal" class=" lg:hidden absolute h-10 w-10 bg-yellow-300 z-50 rounded-full  top-1 right-1 ">
      <GlHamburger class=" w-3/5 h-full text-neutral-800 mx-auto" />
    </button>
    <div class="lg:w-1/3 hidden lg:block ">
      <SideProfile />
    </div>
    <div class="border-2 w-full lg:w-2/3 rounded-2xl text-white overflow-y-auto no-scrollbar scroll-smooth relative">
      <div class="lg:sticky top-0 pb-6 bg-neutral-800 w-full">
        <h1 class="text-center text-6xl py-2 underline underline-offset-8 lg:no-underline">Portfolio</h1>
        <div class="hidden lg:block">
          <NavBar />
        </div>

      </div>
      <main class="px-6 py-6 ">
        <RouterView />
      </main>
      <Transition name="fade">
        <Modals :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event" @onConfirm="handleConfirm">
          <NavBar />
        </Modals>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
