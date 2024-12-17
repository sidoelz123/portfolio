<script setup lang="ts">
import { ref } from 'vue';
import WorkCards from '../components/WorkCards.vue';
import { data_diri } from '../utils/data_dummy';

const edus = ref(data_diri.educations)

</script>

<template>
  <div>
    <WorkCards v-for="(edu, index) in edus" :key="index" :title="edu.name" :company="edu.undergraduate_level"
      :role="edu.major" :address="edu.address" :period="edu.period" />
  </div>
</template>
