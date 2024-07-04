
<script setup lang="ts">
import { useToast } from '@/components/ui/toast'
import { User, Mail, Phone, Check, Calendar as CalendarIcon } from 'lucide-vue-next'
const { toast } = useToast()
</script>

<template>
  <div class="p-6 bg-white dark:bg-black">
    <div class="max-w-lg mx-auto mb-8">
      <img src="/placeholder.svg" alt="Event Banner" class="rounded-lg object-cover">
      <p class="text-xs uppercase text-gray-500 dark:text-gray-400 mt-2">Overline</p>
      <h2 class="text-xl font-semibold mt-1 dark:text-white">Headline of the Event</h2>
      <p class="text-gray-600 dark:text-gray-300 mt-1">Brief teaser text about the event.</p>
      <div class="flex items-center space-x-2 mt-4">
        <CalendarIcon class="w-5 h-5 dark:text-white" />
        <span class="text-sm dark:text-white">Start - End Date</span>
      </div>
    </div>
    <UiCard class="max-w-lg mx-auto">
      <UiCardHeader>
        <UiCardTitle>Event Registration</UiCardTitle>
      </UiCardHeader>
      <UiCardContent class="space-y-4">
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5 dark:text-white" />
          <UiInput type="text" placeholder="Full Name" class="w-full" />
        </div>
        <div class="flex items-center space-x-2">
          <Mail class="w-5 h-5 dark:text-white" />
          <UiInput type="email" placeholder="Email Address" class="w-full"  />
        </div>
        <div class="flex items-center space-x-2">
          <Phone class="w-5 h-5 dark:text-white" />
          <UiInput type="tel" placeholder="Mobile Number" class="w-full"  />
        </div>
        <UiButton class="w-full justify-center bg-blue-500 text-white dark:bg-blue-700 dark:hover:bg-blue-800" @click="toast({ title: 'Registration Complete', description: 'Please check your email for confirmation.', icon: Check })">
          Check Out
        </UiButton>
      </UiCardContent>
    </UiCard>
  </div>
</template>
