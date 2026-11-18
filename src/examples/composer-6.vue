<script setup lang="ts">
import type { ComposerTrigger, ComposerValue } from '../components/ui/composer'
import { ArrowUpIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Composer,
  ComposerActionGroup,
  ComposerActions,
  ComposerInput,
  ComposerItem,
  ComposerList,
  ComposerPopup,
  ComposerSubmit,
  useComposerFilter,
} from '../components/ui/composer'

const people = [
  { id: 'alex', label: 'Álex Morgan', description: 'Design' },
  { id: 'sam', label: 'Sam Rivera', description: 'Engineering' },
  { id: 'taylor', label: 'Taylor Kim', description: 'Product' },
  { id: 'jordan', label: 'Jordan Lee', description: 'Marketing' },
  { id: 'casey', label: 'Casey Chen', description: 'Support' },
  { id: 'morgan', label: 'Morgan Davis', description: 'Operations' },
  { id: 'jamie', label: 'Jamie Wilson', description: 'Finance' },
  { id: 'riley', label: 'Riley Patel', description: 'Research' },
]

const value = shallowRef<ComposerValue>([])
const { startsWith } = useComposerFilter()

const triggers: ComposerTrigger[] = [
  {
    character: '@',
    items: people,
    filter: (item, query) => startsWith(item.label, query),
  },
]
</script>

<template>
  <Composer v-model:value="value" class="w-full max-w-xl" :triggers="triggers" @submit="value = []">
    <ComposerInput aria-label="Team message" placeholder="Mention a teammate…" />
    <ComposerPopup>
      <ComposerList>
        <template #item="{ item }">
          <ComposerItem :value="item">
            <span class="flex min-w-0 flex-col">
              <span class="truncate">{{ item.label }}</span>
              <span class="truncate text-muted-foreground text-xs">
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
</template>
