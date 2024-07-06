<template>
  <aside class="h-screen w-[300px] border-r">
    <UiScrollArea class="size-full">
      <div class="flex h-screen flex-col pt-7">
        <NuxtLink to="#" class="flex w-full items-center gap-3 px-5">
          <span class="text-xl font-bold">{{ companyName }}</span>
        </NuxtLink>
        <div class="my-6 px-5">
          <p>search</p>
        </div>
        <div class="flex h-full grow flex-col px-5 pb-8">
          <div class="mb-10 flex flex-col gap-10">
            <UiNavigationMenu orientation="vertical">
              <!-- orientation="vertical" -->
              <UiNavigationMenuList class="mb-10 flex flex-col gap-1">
                <UiNavigationMenuItem>
                  <NuxtLink to="/api/configuration">
                    Item Two
                  </NuxtLink>
                </UiNavigationMenuItem>
                <NavigationMenuIndicator class="top-full z-[90] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in" />
              </UiNavigationMenuList>
            </UiNavigationMenu>
            <nav class="flex flex-col gap-1">
              <template v-for="(n, i) in topNav" :key="i">
                <UiButton
                  v-if="!n.items"
                  :to="n.link"
                  size="default"
                  variant="ghost"
                  class="justify-start gap-4 px-3"
                >
                  <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                  <span>{{ n.title }}</span>
                </UiButton>
                <UiCollapsible v-if="n.items">
                  <UiCollapsibleTrigger as-child>
                    <UiButton
                      size="default"
                      variant="ghost"
                      class="group w-full justify-start gap-4 px-3"
                    >
                      <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                      <span>{{ n.title }}</span>
                      <Icon
                        name="lucide:chevron-down"
                        class="ml-auto size-4 text-muted-foreground transition group-data-[state=open]:rotate-180"
                      />
                    </UiButton>
                  </UiCollapsibleTrigger>
                  <UiCollapsibleContent class="flex flex-col gap-1.5 pl-4 pr-2">
                    <template v-for="(item, index) in n.items" :key="index">
                      <UiButton
                        :to="item.link"
                        size="sm"
                        variant="ghost"
                        class="justify-start gap-4 px-3"
                      >
                        <span>{{ item.title }}</span>
                      </UiButton>
                    </template>
                  </UiCollapsibleContent>
                </UiCollapsible>
              </template>
            </nav>
            <nav class="mt-auto flex flex-col gap-1">
              <template v-for="(n, i) in bottomNav" :key="i">
                <UiButton
                  v-if="!n.items"
                  :to="n.link"
                  size="default"
                  variant="ghost"
                  class="justify-start gap-4 px-3"
                >
                  <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                  <span>{{ n.title }}</span>
                </UiButton>
                <UiCollapsible v-if="n.items">
                  <UiCollapsibleTrigger as-child>
                    <UiButton
                      size="default"
                      variant="ghost"
                      class="group w-full justify-start gap-4 px-3"
                    >
                      <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                      <span>{{ n.title }}</span>
                      <Icon
                        name="lucide:chevron-down"
                        class="ml-auto size-4 text-muted-foreground transition group-data-[state=open]:rotate-180"
                      />
                    </UiButton>
                  </UiCollapsibleTrigger>
                  <UiCollapsibleContent class="flex flex-col gap-1.5 pl-4 pr-2">
                    <template v-for="(item, index) in n.items" :key="index">
                      <UiButton
                        :to="item.link"
                        size="sm"
                        variant="ghost"
                        class="justify-start gap-4 px-3"
                      >
                        <span>{{ item.title }}</span>
                      </UiButton>
                    </template>
                  </UiCollapsibleContent>
                </UiCollapsible>
              </template>
            </nav>
          </div>
          <div class="mt-auto rounded-lg bg-muted/50 p-4 text-sm">
            <div class="flex items-center justify-between">
              <p class="font-semibold">
                Used space
              </p>
              <UiButton class="size-6" size="icon-sm" variant="ghost">
                <Icon name="lucide:x" class="size-4 text-muted-foreground" />
              </UiButton>
            </div>
            <p class="mt-3 text-muted-foreground">
              Your team has used 80% of your available space. Need more?
            </p>
            <UiProgress class="my-4 h-2" :model-value="80" />

            <div class="flex items-center gap-1">
              <UiButton class="px-2" variant="ghost" size="sm">
                Dismiss
              </UiButton>
              <UiButton class="px-2 text-sky-500 hover:text-sky-600" variant="ghost" size="sm">
                Upgrade plan
              </UiButton>
            </div>
          </div>
          <hr>
          <div class="flex items-center gap-3 pb-8">
            <div class="flex items-center gap-3">
              <UiAvatar :src="user.avatar" class="size-10" />
              <div>
                <p class="text-sm font-semibold" v-html="user.username" />
                <p class="text-sm text-muted-foreground" v-html="user.email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiScrollArea>
  </aside>
</template>

<script lang="ts" setup>
import { NavigationMenuIndicator } from 'radix-vue';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const user = {
  avatar: 'https://randomuser.me/api/portraits/med/men/2.jpg',
  username: 'Jane Doe',
  email: 'muzcad@he.tg',
};

const companyName = 'Dasei';

const topNav = [
  { title: 'DAS Ei', icon: 'lucide:home', link: '#' },
  {
    title: 'Ausbildung Theaterpädagogik',
    icon: 'lucide:bar-chart-3',
    items: [
      { title: 'Einstiege ins Theaterspiel', link: '/docs/gettting-started' },
      { title: 'Grundlagenbildung Theaterpädagogik (BuT)', link: '/api' },
      { title: 'Profil Theatrales Lernen', link: '#' },
      { title: 'Profil Performance & Interkult. Theater', link: '#' },
    ],
  },
  { title: 'Projects', icon: 'lucide:folder-dot', link: '#' },
  { title: 'Tasks', icon: 'lucide:list-checks', link: '#' },
  { title: 'Users', icon: 'lucide:users', link: '#' },
];
const bottomNav = [
  { title: 'Support', icon: 'lucide:life-buoy', link: '#' },
  {
    title: 'Settings',
    icon: 'lucide:settings-2',
    items: [
      { title: 'Profile', link: '#' },
      { title: 'Account', link: '#' },
      { title: 'Security', link: '#' },
      { title: 'Billing', link: '#' },
    ],
  },
];
</script>
