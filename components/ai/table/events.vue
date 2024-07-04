
<template>
  <section class="p-4 bg-white dark:bg-gray-900">
    <UiTable>
      <UiTableBody>
        <UiTableRow v-for="index in 6" :key="`event-${index}`">
          <UiTableCell>
            <img class="w-20 h-20 object-cover" src="/placeholder.svg" alt="Event Image" />
          </UiTableCell>
          <UiTableCell>
            <div class="flex justify-between">
              <div>
                <span class="text-sm font-semibold uppercase text-gray-400 dark:text-gray-500">Overline</span>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Headline</h3>
                <p class="text-gray-600 dark:text-gray-300">Teaser text for the event.</p>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  <p>Start Date</p>
                  <p>End Date</p>
                </div>
                <div class="mt-2 text-gray-900 dark:text-white">
                  <p>City</p>
                  <p>Venue</p>
                </div>
              </div>
            </div>
          </UiTableCell>
        </UiTableRow>
      </UiTableBody>
    </UiTable>
  </section>
</template>
