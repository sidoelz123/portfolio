<template>
  <article class="rounded-xl text-gray-300 p-4">
    <div class="flex items-start">
      <div class="space-y-1">
        <!-- Title -->
        <h3 class="font-semibold text-2xl text-white">
          {{ title }}
        </h3>

        <!-- Subtitle -->
        <div class="sm:flex sm:items-center sm:gap-2">
          <p class="text-lg font-medium">{{ company }}</p>
          <span v-if="company && role" class="hidden sm:block" aria-hidden="true">&middot;</span>
          <p v-if="role" class="mt-2 text-lg font-medium sm:mt-0">
            {{ role }}
          </p>
        </div>

        <!-- Address -->
        <p>{{ address }}</p>

        <!-- Date -->
        <div class="sm:flex sm:items-center sm:gap-2">
          <div class="flex items-center gap-1">
            <!-- Clock Icon -->
            <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-xs font-medium">{{ period }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Separator Line -->
    <p class="border-2 border-white w-full rounded-full mt-5"></p>
  </article>
</template>

<script setup lang="ts">
// Define props for reusability
defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: "",
  },
  address: {
    type: String,
    required: false,
    default: "",
  },
  period: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
