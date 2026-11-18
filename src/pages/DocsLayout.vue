<script setup lang="ts">
import { RouterView } from 'vue-router'
import DocsSidebar from '../site/DocsSidebar.vue'
</script>

<template>
  <main class="flex flex-1 flex-col">
    <div class="container min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
      <DocsSidebar />
      <div class="h-full w-full">
        <RouterView />
      </div>
    </div>
  </main>
</template>
