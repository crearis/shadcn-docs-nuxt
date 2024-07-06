<template>
  <NavigationMenuRoot orientation="vertical">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          :as="RouterLink"
          to="/getting-started/introduction"
          :class="[isActive && 'font-medium text-primary']"
        >
          Getting Started
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuSub default-value="sub1">
            <NavigationMenuList>
              <NavigationMenuItem value="sub1">
                <NavigationMenuTrigger>Sub item one</NavigationMenuTrigger>
                <NavigationMenuContent> Sub item one content </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value="sub2">
                <NavigationMenuTrigger>Sub item two</NavigationMenuTrigger>
                <NavigationMenuContent> Sub item two content </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuIndicator />
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>

<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
} from 'radix-vue';
import { RouterLink } from 'vue-router';
</script>
