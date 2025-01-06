<script setup lang="ts">
import SideProfile from '../components/SideProfile.vue';
import { data_diri } from '../utils/data_dummy';
</script>

<template>
  <div class="lg:hidden w-full ">
  </div>
  <div class="lg:hidden">
    <SideProfile />
  </div>
  <p class="text-justify indent-10 text-xl mt-4 lg:mt-0 leading-8">
    I am a fresh graduate of Bachelor Degree of Information Technology from Politeknik Harapan Bersama, with a deep
    interest in software development, especially in the frontend area. I have a strong interest in JavaScript such as
    Vue.js and React.js. With a high passion for learning, I always strive to expand my knowledge and keep up with the
    latest trends in technology. I highly value teamwork and believe that collaboration is the key to come up with
    innovative solutions. I am ready to take on new challenges and contribute positively in the development team.
  </p>
  <div class="flex flex-col lg:flex-row mt-5">
    <p class="font-semibold w-52 pr-2 underline underline-offset-8 mb-4">Skills :</p>
    <p class="flex flex-wrap gap-x-1">
      <span v-for="(skill, index) in data_diri.hard_skills" :key="index">
        {{ skill }}<span v-if="index < data_diri.hard_skills.length - 1">,</span>
      </span>
    </p>
  </div>
</template>
