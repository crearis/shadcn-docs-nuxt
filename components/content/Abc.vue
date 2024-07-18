<template>
  <Section class="abc">
    <UiComProse :class="props.class" :size="props.size">
      <slot>
        <!-- reference implementation / fallback-content -->
      </slot>
    </UiComProse>
  </Section>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { type ComProseVariants, comProseVariants } from '~/components/ui/com-prose';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class'];
  size?: ComProseVariants['size'];
}>(), {
  size: 'base',
});
</script>
