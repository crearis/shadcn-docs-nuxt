<template>
  <ul :class="[level > 0 && 'border-l', isDasei ? '' : 'py-2.5']">
    <template v-for="link in links" :key="link._id">
      <LayoutMenuTreeItem
        v-if="(!link.children && level <= maxLevel) || (link.children && level < maxLevel)"
        :link="link"
        :level="level"
        :size="size ? size : 'default'"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

defineProps<{
  links: NavItem[];
  level: number;
  size?: 'default' | 'small' | null | undefined;
}>();

const config = useConfig();
const maxLevel = config.value.aside.maxLevel;
const { name } = useThemes();
const isDasei = computed(() => name.value === 'dasei');
</script>
