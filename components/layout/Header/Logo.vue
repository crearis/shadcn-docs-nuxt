<template>
  <div>
    <NuxtLink v-if="logo.light && logo.dark" to="/" :class="isDasei ? '' : 'flex'">
      <NuxtImg :src="logo.light" class="dark:hidden" :class="isDasei && variant === 'aside' ? 'py-4 w-44 md:w-48 lg:w-60' : 'h-12'" />
      <NuxtImg :src="logo.dark" class="hidden dark:block" :class="isDasei && variant === 'aside' ? 'py-4 w-44 md:w-48 lg:w-60' : 'h-12'" />
      <span v-if="showTitle && title" class="self-center font-bold" :class="isDasei && variant === 'aside' ? 'block text-lg' : 'ml-3'">
        {{ title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'top' | 'aside';
}>(), {
  variant: 'top',
});
const { logo, title, showTitle } = useConfig().value.header;
const { name } = useThemes();
const isDasei = computed(() => name.value === 'dasei');
</script>
