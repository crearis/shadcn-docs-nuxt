import { type VariantProps, cva } from 'class-variance-authority';

const isDasei = true;

export { default as MenuTreeItem } from './MenuTreeItem.vue';

export const menuTreeItemVariants = isDasei
  ? cva(
    'pl-1 mr-0 pr-0 w-full flex gap-1',
    {
      variants: {
        variant: {
          default: 'font-normal',
          section: 'mt-4 pl-0 mb-1 bg-muted hover:bg-muted font-bold uppercase gap-2 transition-all',
          label: 'font-normal',
          tile: '',
        },
        size: {
          default: 'text-sm',
          small: 'text-xs',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  )
  : cva(
    'w-full flex gap-1',
    {
      variants: {
        variant: {
          default: 'hover:underline text-muted-foreground',
          section: 'px-3 py-2 mb-1 hover:bg-muted rounded-md gap-2 transition-all',
          label: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          tile:
          '',
        },
        size: {
          default: 'h-10 px-4 py-2',
          small: 'h-7 rounded px-2',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  );

export type MenuTreeItemVariants = VariantProps<typeof menuTreeItemVariants>;
