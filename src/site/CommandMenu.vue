<script setup lang="ts">
import { BookOpenIcon, ComponentIcon, CornerDownLeftIcon, SearchIcon } from '@lucide/vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { useEventListener } from '@vueuse/core'
import { shallowRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Button } from '../components/ui/button'
import { Dialog, DialogBackdrop, DialogPrimitive, DialogTrigger } from '../components/ui/dialog'
import { ScrollArea } from '../components/ui/scroll-area'
import { componentDocs } from './docs'

interface PageItem {
  label: string
  to: string
  isComponent: boolean
}

const groups: { value: string, items: PageItem[] }[] = [
  {
    value: 'Overview',
    items: [
      { label: 'Introduction', to: '/docs', isComponent: false },
      { label: 'Get Started', to: '/docs/get-started', isComponent: false },
    ],
  },
  {
    value: 'Components',
    items: componentDocs.map(doc => ({ label: doc.title, to: `/docs/components/${doc.slug}`, isComponent: true })),
  },
]

const kbdClass = 'pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-[.25rem] bg-muted px-1 font-medium font-sans text-muted-foreground text-xs [&_svg:not([class*=size-])]:size-3'
const isMac = /Mac|iPhone|iPad/.test(navigator.userAgent)
const open = shallowRef(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  open.value = false
})

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    open.value = !open.value
  }
})
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger :as="Button" variant="outline" class="w-full justify-between text-muted-foreground md:w-56">
      <span class="flex items-center gap-2">
        <SearchIcon />
        Search…
      </span>
      <span class="inline-flex items-center gap-1">
        <kbd :class="kbdClass">{{ isMac ? '⌘' : 'Ctrl' }}</kbd>
        <kbd :class="kbdClass" class="aspect-square">K</kbd>
      </span>
    </DialogTrigger>
    <DialogBackdrop />
    <DialogPrimitive.DialogContent
      aria-label="Search documentation"
      class="fixed inset-x-0 top-[max(--spacing(4),4vh)] z-50 mx-auto flex max-h-105 min-h-0 w-[calc(100%-2rem)] min-w-0 max-w-xl sm:top-[10vh] flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:bg-muted/72 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 **:data-[slot=scroll-area-viewport]:data-overflow-y:pe-1 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]"
    >
      <CommandPrimitive.Command filter="contains" class="flex min-h-0 flex-col">
        <div class="relative py-1.5">
          <SearchIcon aria-hidden="true" class="pointer-events-none absolute start-5 top-1/2 size-4.5 -translate-y-1/2 opacity-80 sm:size-4" />
          <CommandPrimitive.CommandInput
            placeholder="Search documentation…"
            aria-label="Search documentation"
            class="h-10 w-full min-w-0 bg-transparent ps-11 pe-5.5 text-base text-foreground outline-none placeholder:text-muted-foreground/72 sm:h-9 sm:ps-10.5 sm:text-sm"
          />
        </div>
        <div class="relative -mx-px flex min-h-0 flex-col rounded-t-xl border border-b-0 bg-popover bg-clip-padding shadow-xs/5 [clip-path:inset(0_1px)] before:pointer-events-none before:absolute before:inset-0 before:rounded-t-[calc(var(--radius-xl)-1px)] **:data-[slot=scroll-area-scrollbar]:mt-2">
          <CommandPrimitive.CommandEmpty class="not-empty:px-2 not-empty:py-6 text-center text-base text-muted-foreground sm:text-sm">
            No results found.
          </CommandPrimitive.CommandEmpty>
          <ScrollArea class="flex flex-col" overscroll-contain scrollbar-gutter scroll-fade>
            <CommandPrimitive.CommandList class="not-empty:scroll-py-2 not-empty:p-2 in-data-overflow-y:pe-3">
              <CommandPrimitive.CommandGroup v-for="group in groups" :key="group.value" class="[[role=group]+&]:mt-1.5">
                <CommandPrimitive.CommandGroupLabel class="px-2 py-1.5 font-medium text-muted-foreground text-xs">
                  {{ group.value }}
                </CommandPrimitive.CommandGroupLabel>
                <CommandPrimitive.CommandItem v-for="page in group.items" :key="page.to" :value="page.to" :label="page.label">
                  <template #render="{ props: part }">
                    <RouterLink
                      v-bind="part"
                      :to="page.to"
                      class="flex min-h-8 w-full cursor-default select-none items-center rounded-sm px-2 py-1 text-base outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground sm:min-h-7 sm:text-sm"
                    >
                      <ComponentIcon v-if="page.isComponent" class="me-2 size-4 opacity-80" />
                      <BookOpenIcon v-else class="me-2 size-4 opacity-80" />
                      <span class="flex-1">{{ page.label }}</span>
                    </RouterLink>
                  </template>
                </CommandPrimitive.CommandItem>
              </CommandPrimitive.CommandGroup>
            </CommandPrimitive.CommandList>
          </ScrollArea>
        </div>
        <div class="flex items-center justify-between gap-2 rounded-b-[calc(var(--radius-2xl)-1px)] border-t px-5 py-3 text-muted-foreground text-xs">
          <div class="flex items-center gap-2">
            <span class="whitespace-nowrap">Go to page</span>
            <kbd :class="kbdClass">
              <CornerDownLeftIcon />
            </kbd>
          </div>
        </div>
      </CommandPrimitive.Command>
    </DialogPrimitive.DialogContent>
  </Dialog>
</template>
