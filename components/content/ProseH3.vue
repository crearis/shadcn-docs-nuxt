<template>
  <h3 :id="id" class="scroll-m-20 [&:not(:first-child)]:mt-8" :class="noprose ? 'text-xl lg:text-2xl font-semibold tracking-tight ' : ''">
    <NuxtLink
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string; noprose?: boolean }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h3);
</script>
