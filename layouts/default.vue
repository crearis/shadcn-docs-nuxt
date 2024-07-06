<template>
  <!-- LayoutHeader :class="isDasei ? 'md:hidden' : ''" / -->
  <div class="border-b min-h-screen">
    <div :class="isDasei ? 'pl-0 md:grid-cols-[246px_minmax(0,1fr)] lg:grid-cols-[290px_minmax(0,1fr)] ' : 'md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[246px_minmax(0,1fr)] '" class="container flex-1 items-start md:grid md:gap-6 lg:gap-10">
      <!-- aside class="fixed z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto" -->
      <aside :class="isDasei ? 'top-0 ' : '-ml-2 top-[102px] lg:top-[60px]'" class="fixed z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
        <LayoutMenuAside :is-mobile="false" />
      </aside>
      <main class="relative py-6" :class="[config.toc.enable && 'lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_200px]']">
        <div class="mx-auto w-full min-w-0">
          <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb" class="mb-4" />

          <slot />

          <LayoutPrevNext />
        </div>
        <div v-if="config.toc.enable" class="hidden text-sm lg:block">
          <div class="sticky top-[90px] h-[calc(100vh-3.5rem)] overflow-hidden">
            <LayoutToc :is-small="false" />
          </div>
        </div>
      </main>
    </div>
  </div>
  <LayoutFooter />
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();

const isDasei = config.value.theme.name === 'dasei';

useSeoMeta({
  title: `${page.value?.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
});
</script>
