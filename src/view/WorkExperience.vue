<script setup lang="ts">
import { ref } from 'vue';
import WorkCards from '../components/WorkCards.vue';
import { data_diri } from '../utils/data_dummy';

const works = ref(data_diri.work_experience)

</script>

<template>
  <div>
    <WorkCards v-for="(work, index) in works" :key="index" :title="work.work_title" :company="work.work_company"
      :role="work.work_type" :address="work.work_address" :period="work.work_period" />

  </div>
</template>
