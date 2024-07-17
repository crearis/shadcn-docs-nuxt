<template>
  <div class="product-catalog">
    <UiComProse class="prose-ul:max-w-[280px] prose-ul:prose-obj prose-li:min-w-full prose-li:text-right" :class="props.class" :size="props.size">
      <slot>
        <!-- reference implementation / fallback-content -->
        <h3 v-html="props.headLine ? props.headLine : 'Pricing'" />
        <ul>
          <template v-for="item in props.listItems" :key="item.value">
            <li v-html="item" />
          </template>
        </ul>
      </slot>
    </UiComProse>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { type ComProseVariants, comProseVariants } from '~/components/ui/com-prose';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  headLine?: string;
  listItems?: Array<string>;
  class?: HTMLAttributes['class'];
  size?: ComProseVariants['size'];
}>(), {
  size: 'base',
  listItems: () => ['<b>Category A</b>10,00 EUR', '<b>Category B</b>200,00 EUR'],
});
</script>

<style>
.product-catalog li > b {
  width: 160px;
  text-align: left;
  float: left;
  overflow: hidden;
  white-space: nowrap;
}
.product-catalog li > b::after {
  line-height: 0.7em;
  font-weight: 300;
  font-size: 1.2em;
  margin-left: 10px;
  content: '  ...............................................';
}
</style>
