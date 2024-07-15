<template>
  <h2 :id="id" class="scroll-m-20 border-b pb-2 font-semibold tracking-tight transition-colors [&:not(:first-child)]:mt-10" :class="twprose ? '' : 'text-2xl lg:text-3xl'">
    <NuxtLink
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string; twprose?: boolean }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h2);
</script>

<!-- style scoped>
h2:has(br)::first-line {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  text-transform: uppercase;
}
h2:has(br)::nth-line(2) {
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
}
</style -->
