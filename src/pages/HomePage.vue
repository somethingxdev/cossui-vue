<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '../components/ui/button'
import ComponentGrid from '../site/ComponentGrid.vue'
import { componentDocs } from '../site/docs'
import SiteFooter from '../site/SiteFooter.vue'
import VueBlueprint from '../site/VueBlueprint.vue'

const cornerMarks = 'before:absolute before:top-[-3.5px] before:-left-[11.5px] before:z-1 before:-ml-1 before:size-2 before:rounded-[2px] before:border before:border-border before:bg-popover before:bg-clip-padding before:shadow-xs after:absolute after:top-[-3.5px] after:-right-[11.5px] after:z-1 after:-mr-1 after:size-2 after:rounded-[2px] after:border after:border-border after:bg-background after:bg-clip-padding after:shadow-xs dark:after:bg-clip-border dark:before:bg-clip-border'
</script>

<template>
  <main class="flex flex-1 flex-col">
    <section class="container grid w-full items-center gap-6 py-10 md:py-14 lg:grid-cols-2 lg:gap-10 lg:py-28 xl:gap-16">
      <div class="flex w-full min-w-0 max-w-xl flex-col items-start gap-5 [font-optical-sizing:auto] [font-synthesis:none]">
        <h1 class="text-balance font-bold font-heading text-[clamp(2.25rem,1.5rem+2.6vw,4rem)] leading-none [font-variation-settings:'GEOM'_50]">
          A modern Vue UI component library.
        </h1>
        <p class="text-muted-foreground lg:text-lg">
          The accessible components of
          <a class="underline underline-offset-4 hover:text-foreground" href="https://coss.com/ui" target="_blank" rel="noreferrer">coss ui</a>,
          ported to Vue, powered by
          <a class="underline underline-offset-4 hover:text-foreground" href="https://ui-sdk.dev" target="_blank" rel="noreferrer">UI SDK</a>
          and styled with Tailwind CSS. Source code you can make your own.
        </p>
        <div class="mt-1 flex flex-wrap gap-2">
          <Button :as="RouterLink" to="/docs" size="lg">
            Get started
          </Button>
          <Button :as="RouterLink" to="/docs/components" size="lg" variant="outline">
            Browse {{ componentDocs.length }} components
          </Button>
        </div>
      </div>
      <div class="pointer-events-none mx-auto hidden w-full max-w-140 select-none lg:-my-24 lg:block">
        <VueBlueprint />
      </div>
    </section>

    <div class="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border/64">
      <div aria-hidden="true" class="container pointer-events-none absolute inset-0 z-50" :class="cornerMarks" />
      <div class="container w-full pt-8">
        <ComponentGrid />
      </div>
    </div>
    <SiteFooter />
  </main>
</template>
