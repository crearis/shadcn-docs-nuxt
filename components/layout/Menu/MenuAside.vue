<template>
  <UiScrollArea orientation="vertical" :class="isDasei ? 'bg-secondary pl-4 md:pl-6' : 'px-6'" class="relative overflow-hidden h-full py-6 text-sm" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="border-b pb-2 mb-5" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <LayoutHeaderLogo v-if="isDasei" variant="aside" />
    <UiNavigationMenu orientation="vertical" :class="isDasei ? '' : ''">
      <ul v-if="config.aside.useLevel" :class="isDasei ? 'w-[304px] md:w-[230px] lg:w-[266px]' : ''">
        <template v-for="link in navigation" :key="link._id">
          <LayoutMenuTreeItem
            :link="link"
            :class="[
              !isDasei && path.startsWith(link._path) && 'bg-muted hover:bg-muted font-semibold text-primary',
            ]"
            :level="0"
            :size="isDasei ? size : 'default'"
            variant="section"
          />
          <LayoutMenuTree v-if="isDasei && path.startsWith(link._path)" :size="size" :links="tree" :level="0" />
        </template>
      </ul>
      <LayoutMenuTree v-if="!isDasei" :links="tree" :size="size" :level="0" class="pl-3 pt-4" />
    </UiNavigationMenu>
  </UiScrollArea>
</template>

<script setup lang="ts">
defineProps<{ isMobile: boolean }>();

const { navDirFromPath } = useContentHelpers();
const { navigation } = useContent();
const config = useConfig();

const isDasei = config.value.theme.name === 'dasei';

const viewport = useViewport();
const size = ref(viewport.match('tablet') ? 'small' : 'default');

const tree = computed(() => {
  const route = useRoute();
  const path = route.path.split('/');
  if (config.value.aside.useLevel) {
    const leveledPath = path.splice(0, 2).join('/');

    const dir = navDirFromPath(leveledPath, navigation.value);
    return dir ?? [];
  }

  return navigation.value;
});

const path = useRoute().path;
</script>
