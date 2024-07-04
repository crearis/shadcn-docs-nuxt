<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="relative">
    <UiAspectRatio :ratio="16 / 9" class="w-full">
      <img
        src="/placeholder.svg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </UiAspectRatio>

    <!-- direktes Text-Overlay with background
    <div class="absolute inset-0 p-8 flex flex-col justify-center items-start space-y-4 bg-black bg-opacity-50">
      <span class="text-xs uppercase text-white tracking-widest dark:text-gray-400">Overline</span>
      <h1 class="text-4xl font-bold text-white dark:text-gray-100">Headline</h1>
      <p class="text-lg text-white dark:text-gray-300">This is a short teaser text that acts as an introductory snippet of information for the user.</p>
      <UiButton class="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 py-2 px-4 rounded-md flex items-center">
        <span>Learn More</span>
        <ArrowRight class="w-4 h-4 ml-2" />
      </UiButton>
    </div>
    -->

    <!-- Text-Overlay scolled-to-top
    <div class="absolute top-0 p-12 flex flex-col justify-start items-start space-y-4 bg-black bg-opacity-50 w-full">
      <span class="text-xs uppercase text-white tracking-widest dark:text-gray-400">Overline</span>
      <h1 class="text-4xl font-bold text-white dark:text-gray-100">Headline</h1>
      <p class="text-lg text-white dark:text-gray-300">This is a short teaser text that acts as an introductory snippet of information for the user.</p>
      <UiButton variant="primary" class="py-2 px-4 rounded-md flex items-center">
        <span>Learn More</span>
        <ArrowRight class="w-4 h-4 ml-2" />
      </UiButton>
    </div>     
    -->

    <!-- UiCard-Overlay -->
    <div class="absolute inset-0 p-8 flex justify-center items-center">
      <UiCard class="max-w-lg w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
        <UiCardHeader>
          <UiCardTitle class="text-xs uppercase text-black tracking-widest">Overline</UiCardTitle>
          <UiCardDescription class="text-4xl font-bold text-black">Headline</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-lg text-black">This is a short teaser text that acts as an introductory snippet of information for the user.</p>
        </UiCardContent>
        <UiButton class="mt-4 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Learn More
          <ArrowRight class="ml-2 w-4 h-4" />
        </UiButton>
      </UiCard>
    </div>
  </div>
</template>
  

