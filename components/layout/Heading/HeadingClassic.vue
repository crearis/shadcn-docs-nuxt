<template>
  <component :is="props.as" class="w-full">
    <span v-if="props.shortcode && !props.variant?.startsWith('display')" :class="cn(props.variant && cls.shortcode[props.variant])">
      {{ shortcode }}
    </span>
    <span v-if="!props.variant?.startsWith('display')" :class="cn(props.variant && cls.overline[props.variant])" v-text="overline ? overline : ''" />
    <br v-if="showEmptyOverline || props.overline || props.shortcode">
    <!-- span :class="cn(headingVariants({ variant }), props.class, '')" -->
    <span :class="cn(headingVariants({ variant }), props.class, '')">
      {{ headline }}
    </span>
    <br v-show="props.overline && props.variant?.startsWith('display')">
    <span v-show="props.overline && props.variant?.startsWith('display')" :class="cn(props.variant && cls.overline[props.variant])" v-text="overline ? overline : ''" />
  </component>
  <p v-if="subline" :class="cn(props.variant && cls.subline[props.variant])">
    {{ subline }}
  </p>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { HeadingVariants } from '.';
import { headingVariants } from '.';
import { cn } from '@/lib/utils';

interface Props extends PrimitiveProps {
  shortcode?: string;
  showEmptyOverline?: boolean;
  overline?: string;
  headline: string;
  subline?: string;
  variant?: HeadingVariants['variant'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h1',
  variant: 'default_sm',
  showEmptyOverline: true,
});

const cls = {
  shortcode: {
    small_xs: 'leading-none md:leading-none md:mb-none md:float-left text-xs md:text-5xl md:leading-[1.1em] font-bold mr-1',
    small_md: 'float-left text-4xl leading-[0.96em] font-bold mr-1.5',
    default_sm: 'float-left text-sm md:text-[56px] md:leading-[1em] font-bold mr-2',
    default_lg: 'float-left text-[62px] leading-[0.96em] font-bold mr-2.5',
    display_md: 'float-left text-base md:text-[74px] md:leading-[0.9em] font-bold mr-3',
    display_xl: 'float-left text-[74px] leading-[0.9em] font-bold mr-3',
  },
  overline: {
    small_xs: 'text-xs',
    small_md: 'text-sm',
    default_sm: 'text-sm',
    default_lg: 'text-lg',
    display_md: 'text-base bg-primary text-primary-contrast block max-w px-4 md:px-6 mx-[-16px] md:mx-[-24px] leading-[1em] mb-10',
    display_xl: 'text-lg bg-primary text-primary-contrast block max-w px-10 ml-[-40px] mr-[-30px] leading-[1em] mb-10',
  },
  subline: {
    small_xs: 'text-base',
    small_md: 'text-lg',
    default_sm: 'text-base',
    default_lg: 'text-xl',
    display_md: 'text-lg',
    display_xl: 'text-xl',
  },
};

const isDasei = useConfig().value.theme.name === 'dasei';
</script>
