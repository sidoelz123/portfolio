<script setup lang="ts">
import { data_diri } from '../utils/data_dummy';
</script>

<template>
  <p class="text-justify indent-10 text-xl leading-8">
    I am a fresh graduate of Bachelor Degree of Information Technology from Politeknik Harapan Bersama, with a deep
    interest in software development, especially in the frontend area. I have a strong interest in JavaScript such as
    Vue.js and React.js. With a high passion for learning, I always strive to expand my knowledge and keep up with the
    latest trends in technology. I highly value teamwork and believe that collaboration is the key to come up with
    innovative solutions. I am ready to take on new challenges and contribute positively in the development team.
  </p>
  <div class="flex mt-5">
    <p class="font-semibold w-52 pr-2">Skills :</p>
    <p class="flex flex-wrap gap-x-1">
      <span v-for="(skill, index) in data_diri.hard_skills" :key="index">
        {{ skill }}<span v-if="index < data_diri.hard_skills.length - 1">,</span>
      </span>
    </p>
  </div>
</template>
