<script setup lang="ts">
import type { ComposerQuery, ComposerTrigger, ComposerValue } from '../components/ui/composer'
import { ArrowUpIcon } from '@lucide/vue'
import { computed, shallowRef, watch } from 'vue'
import { Button } from '../components/ui/button'
import {
  Composer,
  ComposerActionGroup,
  ComposerActions,
  ComposerInput,
  ComposerItem,
  ComposerList,
  ComposerPopup,
  ComposerStatus,
  ComposerSubmit,
  useComposerFilter,
} from '../components/ui/composer'
import { Spinner } from '../components/ui/spinner'

const people = [
  { id: 'alex', label: 'Alex Morgan', description: 'Design' },
  { id: 'sam', label: 'Sam Rivera', description: 'Engineering' },
  { id: 'taylor', label: 'Taylor Kim', description: 'Product' },
]

const value = shallowRef<ComposerValue>([])
const queryText = shallowRef<string | null>(null)
const resultsFor = shallowRef<string>()
const items = shallowRef<typeof people>([])
const status = shallowRef<'ready' | 'loading'>('ready')
const { contains } = useComposerFilter()

watch(queryText, (text, _previous, onCleanup) => {
  if (text === null)
    return
  const timer = window.setTimeout(() => {
    items.value = people.filter(person => contains(person.label, text) || contains(person.description, text))
    resultsFor.value = text
    status.value = 'ready'
  }, 500)
  onCleanup(() => window.clearTimeout(timer))
})

function onQueryChange(query: ComposerQuery | null) {
  queryText.value = query?.text ?? null
  status.value = query ? 'loading' : 'ready'
}

const triggers = computed<ComposerTrigger[]>(() => [
  {
    character: '@',
    items: items.value,
    itemsFor: resultsFor.value,
    filter: null,
    status: status.value,
  },
])
</script>

<template>
  <div class="flex w-full max-w-xl flex-col gap-3">
    <Composer v-model:value="value" :triggers="triggers" @submit="value = []" @query-change="onQueryChange">
      <ComposerInput aria-label="Message" placeholder="Mention someone…" />
      <ComposerPopup :aria-busy="status === 'loading' || undefined">
        <ComposerStatus v-if="status === 'loading'">
          <span class="flex items-center justify-between gap-2 text-muted-foreground">
            Searching...
            <Spinner class="size-4.5 sm:size-4" />
          </span>
        </ComposerStatus>
        <ComposerList>
          <template #item="{ item }">
            <ComposerItem :value="item">
              <span class="min-w-0">
                <span class="block truncate">{{ item.label }}</span>
                <span v-if="item.description" class="block truncate text-muted-foreground text-xs">
                  {{ item.description }}
                </span>
              </span>
            </ComposerItem>
          </template>
        </ComposerList>
      </ComposerPopup>
      <ComposerActions>
        <ComposerActionGroup align="end">
          <ComposerSubmit :as="Button" aria-label="Send message" size="icon">
            <ArrowUpIcon aria-hidden="true" />
          </ComposerSubmit>
        </ComposerActionGroup>
      </ComposerActions>
    </Composer>

    <p class="text-muted-foreground text-sm">
      Search by name or team. Try @design, or @zz for no menu.
    </p>
  </div>
</template>
