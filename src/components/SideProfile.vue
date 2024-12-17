<script setup lang="ts">
import { data_diri } from '../utils/data_dummy';
import { AkGithubFill, AkLinkedinBoxFill, AkInstagramFill } from '@kalimahapps/vue-icons';
</script>
<template>
  <div class="bg-yellow-300 rounded-2xl relative h-full">
    <div class="absolute bg-neutral-800 top-0 left-0 h-14">
      <div class="text-white flex">
        <div class="bg-yellow-300">
          <p class="rounded-br-3xl pl-4 bg-neutral-800 pr-10 py-2 ">Portfolio</p>
        </div>
        <div>
          <p class="rounded-tl-xl bg-yellow-300 h-full text-transparent">.</p>
        </div>
      </div>
      <div class="bg-yellow-300 rounded-tl-xl text-transparent h-4">.</div>
    </div>
    <div class="p-4 w-full  text-neutral-900 relative flex flex-col justify-end h-full">
      <div class="absolute right-0 top-0 overflow-hidden bg-transparent rounded-full mb-4 w-60 h-52 z-50">
        <div class="h-40 w-40 inset-0 m-auto rounded-full border-4 border-white ring-8 ring-neutral-800 absolute -z-10">
        </div>
        <div class=" z-50  h-full mx-auto w-3/4">
          <img class="z-50" :src="data_diri.foto" :alt="data_diri.foto">
        </div>
      </div>
      <p class="text-5xl font-thin text-neutral-800">i'am,</p>
      <p class="font-bold text-6xl">{{ data_diri.name }}</p>
      <p class="text-3xl font-semibold mt-5">{{ data_diri.role }}</p>
      <p>{{ data_diri.email }}</p>
      <div class="text-3xl flex space-x-2">
        <a :href=data_diri.social_media.github>
          <AkGithubFill />
        </a>
        <a :href=data_diri.social_media.linkedin>
          <AkLinkedinBoxFill />
        </a>
        <a :href=data_diri.social_media.instagram>
          <AkInstagramFill />
        </a>
      </div>
      <div class="text-center mt-5">
        <a :href="`${data_diri.link_CV}`">
          <button
            class="border-2 py-2 px-4 border-neutral-800 text-neutral-800 font-bold rounded-xl hover:bg-neutral-800 hover:text-white duration-300 transition">Download
            CV</button>
        </a>

      </div>
    </div>

  </div class="bg-yellow-300">
</template>
