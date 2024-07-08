import { type VariantProps, cva } from 'class-variance-authority';

export { default as Heading } from './Heading.vue';

export const headingVariants = cva(
  '',
  {
    variants: {
      variant: {
        small_xs: 'text-lg pb-1 font-semibold',
        small_md: 'text-xl pb-1.5',
        default_sm: 'text-2xl pb-2 font-semibold tracking-tight',
        default_lg: 'text-3xl pb-2.5 leading-[0.86em] font-semibold',
        display_md: 'text-[28px] pb-2 leading-[0.86em] font-bold pt-0 mt-0 tracking-tight',
        display_xl: 'text-[40px] pb-3 leading-[0.86em] font-bold pt-0 mt-0',
      },
      as: {
        h1: '',
        h2: '',
        h3: '',
        li: '',
      },
    },
    defaultVariants: {
      variant: 'default_sm',
      as: 'h1',
    },
  },
);

export type HeadingVariants = VariantProps<typeof headingVariants>;
