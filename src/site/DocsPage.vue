<script setup lang="ts">
import { Card, CardFrame, CardPanel } from '../components/ui/card'
import SiteFooter from './SiteFooter.vue'

const props = defineProps<{
  title: string
  description: string
  toc?: { id: string, title: string, depth?: number }[]
}>()
</script>

<template>
  <div class="flex items-stretch xl:w-full" data-slot="docs">
    <div class="relative flex w-full min-w-0 flex-1 flex-col lg:mt-8 lg:mr-4 lg:mb-8">
      <CardFrame class="border-sidebar-border shadow-lg/5 max-lg:border-none dark:bg-background">
        <Card class="max-lg:rounded-none! dark:bg-background max-lg:[clip-path:none]!">
          <CardPanel class="px-4 py-6 sm:px-6 lg:p-8">
            <div class="mx-auto w-full max-w-3xl">
              <div class="flex min-w-0 flex-col gap-8">
                <div class="flex flex-col gap-2">
                  <h1 class="scroll-m-20 font-bold font-heading text-3xl xl:text-4xl">
                    {{ props.title }}
                  </h1>
                  <p class="text-muted-foreground sm:text-lg">
                    {{ props.description }}
                  </p>
                  <div v-if="$slots.actions" class="flex flex-wrap items-center gap-2 pt-4">
                    <slot name="actions" />
                  </div>
                </div>
                <div class="w-full flex-1">
                  <slot />
                </div>
              </div>
            </div>
          </CardPanel>
        </Card>
        <div class="px-4 lg:rounded-b-2xl lg:px-8">
          <SiteFooter class="mt-0 before:hidden" />
        </div>
      </CardFrame>
    </div>
    <div
      v-if="props.toc?.length"
      class="sticky top-(--header-height) z-30 ms-auto hidden h-[calc(100svh-var(--header-height))] w-72 flex-col overflow-hidden xl:flex"
    >
      <nav class="flex flex-col gap-2 p-4 pt-[calc(var(--top-spacing)+--spacing(4))] text-sm" aria-label="On this page">
        <p class="font-medium text-muted-foreground text-xs">
          On this page
        </p>
        <a
          v-for="item in props.toc"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-muted-foreground transition-colors hover:text-foreground"
          :class="{ 'pl-3': item.depth === 3 }"
        >
          {{ item.title }}
        </a>
      </nav>
    </div>
  </div>
</template>
