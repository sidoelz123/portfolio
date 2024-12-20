<script setup lang="ts">
import { ref } from 'vue';
import ProjectCards from '../components/ProjectCards.vue';
import { data_diri } from '../utils/data_dummy';

const projects = ref(data_diri.projects)
</script>

<template>
  <div class="space-y-5">
    <div v-for="(project, index) in projects" :key="index">
      <ProjectCards :imageUrl="project.foto" imageAlt="A beautiful guitar" :title="project.name"
        :description="project.describe" :tags="project.tag" :link="project.link" buttonText="Open Project" />
    </div>
  </div>
</template>
