<template>
  <section class="abc">
    <UiComProse class="prose-ul:max-w-full prose-em:text-sm" :class="props.class" :size="props.size">
      <slot>
        <!-- reference implementation / fallback-content -->
        <h3 v-if="props.headLine" v-html="props.headLine" />
        <ul>
          <li>
            <span v-html="props.mainLine" />
            <template v-for="item in props.subLines" :key="item.value">
              <li v-html="item" />
            </template>
          </li>
          <li>
            <span v-html="props.mainLine" />
            <template v-for="item in props.subLines" :key="item.value">
              <li v-html="item" />
            </template>
          </li>
          <li>
            <span v-html="props.mainLine" />
            <template v-for="item in props.subLines" :key="item.value">
              <li v-html="item" />
            </template>
          </li>
        </ul>
      </slot>
    </UiComProse>
  </section>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { type ComProseVariants, comProseVariants } from '~/components/ui/com-prose';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  headLine?: string;
  mainLine?: string;
  subLines?: Array<string>;
  class?: HTMLAttributes['class'];
  size?: ComProseVariants['size'];
}>(), {
  size: 'base',
  headLine: 'Seminarverlauf<strong>Wege entstehen beim Gehen</strong>',
  mainLine: '<mark>10:00 Uhr Uhr</mark><strong>Lorem ipsum dolor sit amet ipsum dolor</strong>consectetur adipiscing elit.',
  subLines: () => ['<strong>Lorem ipsum dolor</strong>Lorem ipsum dolor sit amet consectetur adipiscing elit', '<mark>10:30 Uhr</mark><em>Nulla nec purus feugiat</em>Lorem ipsum dolor sit amet consectetur adipiscing elit'],
});
</script>

<style>
section.abc {
  border: solid 1px rgb(189, 189, 189);
}
.abc h3 {
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 8px;
}

.abc ul {
  margin-left: 2px;
  margin-right: 2px;
}

.abc, .abc ul, .abc li {
  text-align: left;
  padding-inline-start: 0;
  white-space: wrap;
  list-style-type: none;
  list-style-position: outside;
}

.abc li {
  width: 100%;
}

.abc mark {
  background-color: transparent;
}

.abc ul > li > :is(mark, em) {
  font-size: 0.875em;
  height: inherit;
  font-style: normal;
  background-color: none;
  background-clip: border-box;
}

.abc ul > li > li mark {
    background-color: transparent;
  }

.abc ul em {
  float: right;
}

.abc ul > li > li {
    line-height: 1.5em;
    margin-top: 0.5em;
  }

@media (max-width: 767px) {

  .abc ul em {
    width: 102px;
    float: right;
  }

  .abc ul > li mark {
    font-weight: 800;
  }

  .abc ul > li > li mark {
    font-weight: 400;
  }

  .abc ul > li :has(mark) > mark {
    background-color: none;
    line-height: 16px;
  }
  .abc ul > li {
    border-top: solid 2px rgb(189, 189, 189);
  }
  .abc ul > li > li mark::after {
    content:': ';
  }
}

@media (min-width: 768px) {
  .abc ul {
    margin-left: 108px;
    margin-right: 148px;
  }

  .abc ul > li {
    margin-top: 24px;
  }

  .abc ul > li > li {
    border-top: dotted 1px rgb(189, 189, 189);
  }

  .abc ul em {
    width: 144px;
    margin-right: -148px;
    float: right;
  }

  .abc ul > li mark {
    background-color: rgb(217, 217, 217);
    line-height: 16px;
  }
  .abc ul > li mark {
    width: 104px;
    padding-left: 4px;
    line-height: 16px;
    margin-left: -108px;
    float: left;
  }

  .abc ul > li :has(mark) > strong {
    background-color: rgb(217, 217, 217);
    line-height: 16px;
  }

  .abc ul > li > li :is(mark, em) {
    margin-top: 0.3em;
  }
}

.abc li strong {
  display: block;
  font-weight: 700;
}
</style>
