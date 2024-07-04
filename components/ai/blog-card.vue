<script setup lang="ts">
import { Home } from 'lucide-vue-next'

</script>

<template>
  <UiCard class="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
    <UiAspectRatio :ratio="16 / 9">
      <img src="/placeholder.svg" alt="Blog Banner" class="object-cover w-full h-full">
    </UiAspectRatio>
    <UiCardContent class="p-4">
      <div class="text-sm uppercase text-gray-500 dark:text-gray-400">Overline</div>
      <h3 class="font-bold text-xl mt-1 mb-2 text-gray-800 dark:text-gray-200">Headline</h3>
      <p class="text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo vitae eros at tempus.
      </p>
    </UiCardContent>
    <div class="px-4 pb-4">
      <button class="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 transition-colors">
        <Home class="w-5 h-5"/>
        <span>Read More</span>
      </button>
    </div>
  </UiCard>
</template>

