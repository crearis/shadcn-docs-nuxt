<template>
  <div :class="cn(comProseVariants({ variant, size }), props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { type ComProseVariants, comProseVariants } from '.';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class'];
  variant?: ComProseVariants['variant'];
  size?: ComProseVariants['size'];
}>(), {
  size: 'base',
});
</script>
