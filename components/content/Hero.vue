<template>
  <section class="mx-auto flex max-w-[980px] flex-col gap-2 " :class="(announcement || showEmptyOverlineWithoutAnnouncement) ? 'py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20' : 'mt-[-12px] md:mt-[-6px] lg:mt-0' ">
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

    <!--optionally provide margin to the upper part of the page-heading (breadcrumbs)-->
    <div v-show="announcement?.title === undefined && (showEmptyOverlineWithoutAnnouncement || heading.overline || heading.shortcode)" class="mt-2 md:mt-3 lg:mt-4" />
    
    <!--differently rendersettings for heading on mobile, tablet, desktop-->
    <LayoutHeading v-if="useViewport().isGreaterThan('tablet')" :variant="(props.size === 'default') ? 'default_lg' : (props.size === 'display' ? 'display_xl' : 'small_md')" :show-empty-overline="announcement?.title !== undefined || showEmptyOverlineWithoutAnnouncement" :shortcode="heading.shortcode" :headline="heading.headline" :overline="heading.overline" :subline="heading.subline" :class="props.size !== 'small' ? 'uppercase' : ''" />
    
    <!--on mobile if we need to show shortcode we reduce sizes 'display' and 'default' to 'small'-->
    <LayoutHeading v-else-if="useViewport().isLessThan('tablet')" :variant="(props.size === 'small' || props.heading.shortcode ? 'small_xs' : props.size === 'default' ? 'default_sm' : 'display_md')" :show-empty-overline="announcement?.title !== undefined || showEmptyOverlineWithoutAnnouncement" :shortcode="heading.shortcode" :headline="heading.headline" :overline="heading.overline" :subline="heading.subline" :class="props.size !== 'small' ? 'uppercase' : ''" />
    <LayoutHeading v-else :variant="(props.size === 'default' ? 'default_sm' : props.size === 'display' ? 'display_md' : 'default_sm')" :shortcode="heading.shortcode" :headline="heading.headline" :show-empty-overline="announcement?.title !== undefined || showEmptyOverlineWithoutAnnouncement" :overline="heading.overline" :subline="heading.subline" :class="props.size !== 'small' ? 'uppercase' : ''" />

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
const props = withDefaults(defineProps<{
  size?: 'small' | 'default' | 'display';
  showEmptyOverlineWithoutAnnouncement?: boolean;
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
}>(), {
  size: 'default',
  showEmptyOverlineWithoutAnnouncement: true,
});
</script>
