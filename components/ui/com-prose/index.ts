import { type VariantProps, cva } from 'class-variance-authority';

export { default as ComProse } from './ComProse.vue';

export const comProseVariants = cva(
  'prose',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
      size: {
        sm: 'prose-sm',
        base: 'prose-base',
        lg: 'prose-lg',
        xl: 'prose-xl',
        xxl: 'prose-2xl',
      },      
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type ComProseVariants = VariantProps<typeof comProseVariants>;
