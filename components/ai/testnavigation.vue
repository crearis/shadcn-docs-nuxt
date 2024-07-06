<template>
  <UiNavigationMenu>
    <!-- orientation="vertical" -->
    <UiNavigationMenuList>
      <UiNavigationMenuItem>
        <NuxtLink to="/getting-started/introduction">
          <UiNavigationMenuLink :class="navigationMenuTriggerStyle()">
            Item One
          </UiNavigationMenuLink>
        </NuxtLink>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem>
        <NuxtLink to="/api/configuration">
          <UiNavigationMenuLink :class="navigationMenuTriggerStyle()">
            Item Two
          </UiNavigationMenuLink>
        </NuxtLink>
      </UiNavigationMenuItem>
      <UiNavigationMenuIndicator class="NavigationMenuIndicator" />
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
</script>

<style scoped>
.NavigationMenuIndicator {
  background-color: #c62d2d;
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: transform 0.3s;
}

</style>
