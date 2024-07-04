
<script setup lang="ts">
import { Home, Clock } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-white dark:bg-black">
    <UiTable class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <UiTableBody class="divide-y divide-gray-200 dark:divide-gray-700">
        <UiAccordion type="single" collapsible class="w-full">
          <UiAccordionItem
            v-for="index in 6"
            :key="index"
            :value="`item-${index}`"
            class="bg-white dark:bg-gray-800"
          >
            <UiAccordionTrigger class="flex w-full">
              <UiTableCell class="py-4 px-6">
                <img class="h-16 w-16 object-cover rounded-full" src="/placeholder.svg" alt="">
              </UiTableCell>
              <UiTableCell class="py-4 px-6">
                <p class="text-sm font-semibold text-gray-500 dark:text-gray-400">OVERLINE</p>
                <p class="text-xl font-semibold text-gray-900 dark:text-white">Headline</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Teaser text goes here</p>
              </UiTableCell>
              <UiTableCell class="py-4 px-6">
                <div class="flex items-center">
                  <Clock class="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Start - End</span>
                </div>
                <div class="mt-1 flex items-center">
                  <Home class="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">City - Venue</span>
                </div>
              </UiTableCell>
            </UiAccordionTrigger>
            <UiAccordionContent>
              <UiTableCell colspan="3" class="py-4 px-6">
                Additional information about the event could be placed here.
              </UiTableCell>
            </UiAccordionContent>
          </UiAccordionItem>
        </UiAccordion>
      </UiTableBody>
    </UiTable>
  </div>
</template>
