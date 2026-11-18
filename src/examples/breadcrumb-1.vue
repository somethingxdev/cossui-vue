<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb'
import { Button } from '../components/ui/button'
import { Menu, MenuLinkItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink :as="RouterLink" to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <Menu>
          <MenuTrigger
            :as="Button"
            aria-label="More pages"
            class="-m-1.5 text-muted-foreground"
            size="icon-sm"
            variant="ghost"
          >
            <BreadcrumbEllipsis />
          </MenuTrigger>
          <MenuPopup align="start">
            <MenuLinkItem :as="RouterLink" to="/docs">
              Docs
            </MenuLinkItem>
            <MenuLinkItem :as="RouterLink" to="/docs/components">
              Components
            </MenuLinkItem>
          </MenuPopup>
        </Menu>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink :as="RouterLink" to="/docs/components">
          Components
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
