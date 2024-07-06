<!--
Licensed under the MIT License (MIT)
Copyright (c) 2024 Theaterpedia.org based on the original work of Tony Zhang (https://github.com/ZTL-UwU)

This component is used to render a single menu item in the menu tree.
It abstracts the logic from MenuAside, MenuTree, and MenuTreeItem.
It is partly themeable in shadcn-style, settings should be tweaked in the index.ts-file.
-->

<template>
  <li
    class="rounded-md transition-all underline-offset-4 [&:not(:first-child)]:pt-3"
    :class="[isDasei ? level > 0 && 'pl-1' : level > 0 && 'pl-4']"
  >
    <NuxtLink
      v-if="variant === 'section'"
      :to="link._path"
      :class="cn(menuTreeItemVariants({ variant, size }), props.class)"
    >
      <Icon
        v-if="link.icon"
        :name="link.icon"
        class="self-center"
        :size="size === 'default' ? '16' : '14'"
      />
      {{ link.title }}
    </NuxtLink>

    <UiCollapsible v-else-if="link.children" v-model:open="isOpen">
      <UiCollapsibleTrigger class="text-left pb-2">
        <div
          :class="cn(menuTreeItemVariants({ variant: 'label', size }), props.class)"
        >
          <Icon
            v-if="link.icon"
            :name="link.icon"
            class="self-center mr-1"
            :size="size === 'default' ? '16' : '14'"
          />
          {{ link.title }}
          <Icon
            :name="isOpen ? 'lucide:chevrons-down-up' : 'lucide:chevrons-up-down'"
            :size="size === 'default' ? '12' : '10'"
            class="ml-auto self-center"
          />
        </div>
      </UiCollapsibleTrigger>
      <UiCollapsibleContent>
        <LayoutMenuTree :links="link.children" :size="size" :level="level + 1" />
      </UiCollapsibleContent>
    </UiCollapsible>

    <NuxtLink
      v-else
      :to="link._path"
      :style="isDasei ? (size === 'default' ? 'line-height: 14px;' : 'line-height: 12px;') : ''"
      :class="cn(menuTreeItemVariants({ variant: 'default', size }), props.class, isDasei && level > 0 ? 'font-light' : '', isActive && 'bg-primary text-primary-foreground')"
    >
      <Icon
        v-if="link.icon"
        :name="link.icon"
        class="self-center mr-1"
        :size="size === 'default' ? '16' : '14'"
      />
      {{ link.title }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

import type { HTMLAttributes } from 'vue';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { MenuTreeItemVariants } from '.';
import { menuTreeItemVariants } from '.';
import { cn } from '@/lib/utils';

interface Props extends PrimitiveProps {
  link: NavItem;
  level: number;
  variant?: MenuTreeItemVariants['variant'];
  size?: MenuTreeItemVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'menuTreeItem',
});

const { collapse } = useConfig().value.aside;
const isDasei = useConfig().value.theme.name === 'dasei';

const collapsed = useCollapsedMap();
const isOpen = ref(collapsed.value.get(props.link._path) || (props.level < 1 && !collapse));
watch(isOpen, (v) => {
  collapsed.value.set(props.link._path, v);
});
const isActive = computed(() => props.link._path === useRoute().path);
</script>
