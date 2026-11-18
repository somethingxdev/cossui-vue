<script setup lang="ts">
import { BookOpenIcon, ComponentIcon, CornerDownLeftIcon, SearchIcon } from '@lucide/vue'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { useEventListener } from '@vueuse/core'
import { shallowRef, useTemplateRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from '../components/ui/autocomplete'
import { Button } from '../components/ui/button'
import { Dialog, DialogBackdrop, DialogPortal, DialogTrigger, DialogViewport } from '../components/ui/dialog'
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
const searchInput = useTemplateRef('searchInput')
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
    <DialogPortal>
      <DialogBackdrop />
      <DialogViewport class="flex flex-col items-center px-4 py-[max(--spacing(4),4vh)] sm:py-[10vh]">
        <DialogPrimitive.Popup
          aria-label="Search documentation"
          data-slot="command-dialog-popup"
          :initial-focus="() => searchInput?.element"
          class="relative row-start-2 flex max-h-105 min-h-0 w-full min-w-0 max-w-xl flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:bg-muted/72 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 **:data-[slot=scroll-area-viewport]:data-has-overflow-y:pe-1 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]"
        >
          <Autocomplete :items="groups" open inline auto-highlight="always" keep-highlight>
            <div class="px-2.5 py-1.5">
              <AutocompleteInput
                ref="searchInput"
                size="lg"
                placeholder="Search documentation…"
                aria-label="Search documentation"
                class="border-transparent! bg-transparent! shadow-none before:hidden has-focus-visible:ring-0"
              >
                <template #start-addon>
                  <SearchIcon />
                </template>
              </AutocompleteInput>
            </div>
            <div class="relative -mx-px min-h-0 rounded-t-xl border border-b-0 bg-popover bg-clip-padding shadow-xs/5 [clip-path:inset(0_1px)] before:pointer-events-none before:absolute before:inset-0 before:rounded-t-[calc(var(--radius-xl)-1px)] **:data-[slot=scroll-area-scrollbar]:mt-2">
              <AutocompleteEmpty class="not-empty:py-6">
                No results found.
              </AutocompleteEmpty>
              <AutocompleteList class="not-empty:scroll-py-2 not-empty:p-2">
                <template #item="{ item: group }">
                  <AutocompleteGroup :items="group.items">
                    <AutocompleteGroupLabel>{{ group.value }}</AutocompleteGroupLabel>
                    <AutocompleteCollection v-slot="{ item: page }">
                      <AutocompleteItem
                        :key="page.to"
                        :value="page"
                        :as="RouterLink"
                        :to="page.to"
                        class="flex w-full items-center"
                      >
                        <ComponentIcon v-if="page.isComponent" class="me-2 size-4 opacity-80" />
                        <BookOpenIcon v-else class="me-2 size-4 opacity-80" />
                        <span class="flex-1">{{ page.label }}</span>
                      </AutocompleteItem>
                    </AutocompleteCollection>
                  </AutocompleteGroup>
                </template>
              </AutocompleteList>
            </div>
            <div class="flex items-center justify-between gap-2 rounded-b-[calc(var(--radius-2xl)-1px)] border-t px-5 py-3 text-muted-foreground text-xs">
              <div class="flex items-center gap-2">
                <span class="whitespace-nowrap">Go to page</span>
                <kbd :class="kbdClass">
                  <CornerDownLeftIcon />
                </kbd>
              </div>
            </div>
          </Autocomplete>
        </DialogPrimitive.Popup>
      </DialogViewport>
    </DialogPortal>
  </Dialog>
</template>
