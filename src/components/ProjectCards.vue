<template>
  <article class="flex bg-white transition border-4 border-white  hover:border-yellow-300 rounded-xl overflow-hidden">
    <div class="hidden sm:block sm:basis-56">
      <img :alt="imageAlt" :src="imageUrl" class="aspect-square h-full w-full object-cover" />
    </div>

    <div class="flex flex-1 flex-col justify-between">
      <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
        <a :href="link">
          <h3 class="font-bold uppercase text-gray-900">{{ title }}</h3>
        </a>

        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
          {{ description }}
        </p>
      </div>

      <div class="flex w-full justify-between items-center ">
        <div class="text-neutral-800 sm:px-6 px-4">
          <div class="flex flex-wrap gap-2">
            <p v-for="(tag, index) in tags" :key="index"
              class="border-2 rounded-full px-2 text-sm text-neutral-800 bg-yellow-200 border-yellow-300 w-fit">
              {{ tag }}
            </p>
          </div>
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <a :href="link"
            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
            {{ buttonText }}
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: 'Image description',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  link: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: 'Open Project',
  },
});
</script>
