<template>
  <section class="mx-auto flex max-w-[980px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
    <NuxtLink
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="inline-flex self-start items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <template v-if="announcement.icon">
        <Icon :name="announcement.icon" size="16" />
        <UiSeparator class="mx-2 h-4" orientation="vertical" />
      </template>
      <span class="sm:hidden">{{ announcement.title }}</span>
      <span class="hidden sm:inline">
        {{ announcement.title }}
      </span>
      <Icon name="lucide:arrow-right" class="ml-1 h-4 w-4" />
    </NuxtLink>

    <LayoutHeading :variant="headingsize" :shortcode="heading.shortcode" :headline="heading.headline" :overline="heading.overline" :subline="heading.subline" :class="props.size !== 'small' ? 'uppercase' : ''" />

    <section class="flex self-start items-center justify-center space-x-4 py-4 md:pb-10">
      <NuxtLink
        v-for="(action, i) in actions"
        :key="i"
        :to="action.to"
        :target="action.target"
      >
        <UiButton :variant="action.variant">
          <Icon v-if="action.leftIcon" :name="action.leftIcon" class="mr-1" />
          {{ action.name }}
          <Icon v-if="action.rightIcon" :name="action.rightIcon" class="ml-1" />
        </UiButton>
      </NuxtLink>
    </section>
  </section>
</template>

<script setup lang="ts">
import { headingVariants } from '../layout/Heading';

const props = defineProps<{
  size?: 'small' | 'default' | 'display';
  heading: {
    shortcode?: string;
    overline?: string;
    headline: string;
    subline?: string;
  };
  announcement?: {
    to?: string;
    target?: string;
    icon?: string;
    title: string;
  };
  actions: [{
    name: string;
    leftIcon?: string;
    rightIcon?: string;
    variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    to: string;
    target?: string;
  }];
}>();

const viewport = useViewport();
const headingsize = viewport.isLessThan('desktop')
  ? (!props.size || props.size === 'small' ? 'small_xs' : props.size === 'display' ? 'display_md' : 'default_sm')
  : ((!props.size || props.size === 'default') ? 'default_lg' : props.size === 'display' ? 'display_xl' : 'small_md');
</script>
