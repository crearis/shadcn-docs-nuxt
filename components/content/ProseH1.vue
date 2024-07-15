<template>
  <h1 :id="id" class="scroll-m-20 " :class="noprose ? 'text-3xl lg:text-5xl font-bold tracking-tight has-[em]:*:block first-line:has-[em]:uppercase has-[em]*:lowercase first-line:has-[em]:block first-line:has-[em]:text-xl lg:first-line:has-[em]:text-2xl' : 'max-sm:prose-em:hidden max-sm:prose-strong:text-3xl'">
    <NuxtLink
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string; noprose?: boolean }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);
</script>

<!-- style scoped>
h1:has(em)::first-line {
  font-size: 24px;
  display: block;
  font-style: normal;
  font-weight: 300;
  text-transform: uppercase;
}
</style -->
