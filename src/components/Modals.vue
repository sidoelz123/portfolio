<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
    <div class="bg-neutral-600 border-4 border-yellow-300 rounded-lg shadow-lg max-w-lg w-4/5 h-4/5  p-6">
      <header class="flex justify-between items-center">
        <h2 class="text-xl font-semibold">{{ title }}</h2>
        <button @click="close" class="text-red-400 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </header>

      <div @click="close" class="mt-4">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';

// Props
const props = defineProps({
  title: {
    type: String,
  },
  isOpen: {
    type: Boolean,
    required: true
  }
});

// Emits
const emit = defineEmits<{
  (e: 'update:isOpen', value: boolean): void;
  (e: 'onConfirm'): void;
}>();

// State
const isVisible = ref(props.isOpen);

// Watch for prop changes
watch(() => props.isOpen, (newVal) => {
  isVisible.value = newVal;
});

// Methods
const close = () => {
  emit('update:isOpen', false);
};

</script>

<style scoped>
/* Optional: Custom styles for animations or additional customizations */
</style>
