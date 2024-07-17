<template>
  <!-- ProseH2 class="w-full" :class="cn(headingVariants({ variant }), props.class, '')">
    <ContentSlot :use="$slots.default" unwrap="h1, h2" />
  </! -->
  <component :is="component" twprose class="w-full">
    <code v-if="props.shortcode">
      {{ shortcode }}
    </code>
    <span v-if="hasOverline">
      {{ overline }}
    </span>
    <strong>
      {{ headline }}
    </strong>
    <span v-if="hasSubline">
      {{ subline }}
    </span>
  </component>
</template>

<script setup lang="ts">
import consola from 'consola';
import type { HTMLAttributes } from 'vue';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { HeadingVariants } from '.';
import { headingVariants } from '.';
import { cn } from '@/lib/utils';

interface Props extends PrimitiveProps {
  as?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  meta?: string;
  shortcode?: string;
  content: string;
  variant?: HeadingVariants['variant'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'H1',
  variant: 'default_sm',
});

/* const cls = {
  shortcode: {
    small_xs: 'leading-none md:leading-none md:mb-none md:float-left text-xs md:text-5xl md:leading-[1.1em] font-bold mr-1',
    small_md: 'float-left text-4xl leading-[0.96em] font-bold mr-1.5',
    default_sm: 'float-left text-sm md:text-[56px] md:leading-[1em] font-bold mr-2',
    default_lg: 'float-left text-[62px] leading-[0.96em] font-bold mr-2.5',
    display_md: 'float-left text-base md:text-[74px] md:leading-[0.9em] font-bold mr-3',
    display_xl: 'float-left text-[74px] leading-[0.9em] font-bold mr-3',
  }
}; */

const firstStar = props.content.indexOf('**');
const secondStar = props.content.indexOf('**', firstStar + 1);
const hasHeadline = secondStar > firstStar + 3;
const hasOverline = firstStar > 3 || !hasHeadline;
const hasSubline = hasHeadline && !hasOverline && props.content.length > secondStar + 3;

const overline = hasOverline ? (!hasHeadline ? props.content : props.content.split('**')[0].trim()) : '';
const headline = hasHeadline ? props.content.split('**')[1].trim() : '';
const subline = hasSubline ? props.content.split('**')[2].trim() : '';

const component = `Prose${props.as}`;

const { name } = useThemes();
const isDasei = computed(() => name.value === 'dasei');
</script>
