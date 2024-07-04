
<script setup lang="ts">
import { Home } from 'lucide-vue-next'

</script>

<template>
  <UiCard class="max-w-md mx-auto bg-white dark:bg-black rounded-lg shadow">
    <UiAspectRatio class="rounded-t-lg overflow-hidden" :ratio="16 / 9">
      <img src="/placeholder.svg" alt="Event Header Image" class="object-cover w-full h-full">
    </UiAspectRatio>
    
    <UiCardContent class="p-4">
      <div class="flex items-center mb-4">
        <UiAvatar class="mr-2">
          <UiAvatarImage src="/placeholder.svg" alt="Speaker" />
          <UiAvatarFallback>SP</UiAvatarFallback>
        </UiAvatar>
        <div>
          <UiLabel class="block text-sm font-bold text-gray-700 dark:text-gray-300">Speaker</UiLabel>
          <div class="text-xs text-gray-500 dark:text-gray-400">UX Designer</div>
        </div>
      </div>
      
      <div class="mb-2">
        <UiBadge class="mb-1 text-xs font-bold">LIVE</UiBadge>
        <UiCardTitle class="text-lg font-bold text-gray-800 dark:text-white">
          The Future of Web Design
        </UiCardTitle>
      </div>
      
      <div class="text-xs text-gray-600 dark:text-gray-400 mb-3">
        <Home class="inline-block w-4 h-4 mr-1" />
        Aug 10 - Aug 12, 9:00 AM - 3:00 PM
      </div>
      
      <div class="text-sm text-gray-700 dark:text-gray-300">
        Join us for a three-day conversation on the advances in web technologies, featuring keynotes, workshops and insights from industry leaders.
      </div>
    </UiCardContent>
  </UiCard>
</template>
