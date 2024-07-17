<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon"
        class="md:hidden"
      >
        <Icon name="lucide:menu" size="18" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent side="left" :class="isDasei ? 'p-0 min-w-80' : 'pr-0'">
      <LayoutHeaderLogo v-show="!isDasei" />
      <LayoutMenuAside is-mobile />
    </UiSheetContent>
  </UiSheet>
</template>

<script setup lang="ts">
const open = ref(false);
const { name } = useThemes();
const isDasei = computed(() => name.value === 'dasei');
</script>
