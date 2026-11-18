<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AnchoredToastProvider, ToastProvider } from './components/ui/toast'
import SiteHeader from './site/SiteHeader.vue'
</script>

<template>
  <div class="relative isolate flex min-h-svh flex-col overflow-clip [--header-height:4rem]">
    <div
      aria-hidden="true"
      class="container pointer-events-none absolute inset-0 z-45 before:absolute before:inset-y-0 before:-left-3 before:w-px before:bg-border/64 after:absolute after:inset-y-0 after:-right-3 after:w-px after:bg-border/64"
    />
    <div
      aria-hidden="true"
      class="container pointer-events-none fixed inset-x-0 top-0 z-45 h-(--header-height) before:absolute before:top-[calc(var(--header-height)-4.5px)] before:-left-[11.5px] before:z-1 before:-ml-1 before:size-2 before:rounded-[2px] before:border before:border-border before:bg-popover before:bg-clip-padding before:shadow-xs/5 after:absolute after:top-[calc(var(--header-height)-4.5px)] after:-right-[11.5px] after:z-1 after:-mr-1 after:size-2 after:rounded-[2px] after:border after:border-border after:bg-background after:bg-clip-padding after:shadow-xs/5 dark:after:bg-clip-border dark:before:bg-clip-border"
    />
    <SiteHeader />
    <ToastProvider>
      <AnchoredToastProvider>
        <RouterView />
      </AnchoredToastProvider>
    </ToastProvider>
  </div>
</template>
