<script setup lang="ts">
import type { ComposerTrigger, ComposerValue } from '../components/ui/composer'
import { ArrowUpIcon, SparklesIcon, UserRoundIcon, UsersRoundIcon } from '@lucide/vue'
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
  ComposerToken,
  getComposerText,
} from '../components/ui/composer'

const people = [
  { id: 'alex', label: 'Alex Morgan', kind: 'person' },
  { id: 'sam', label: 'Sam Rivera', kind: 'person' },
]

const teams = [
  { id: 'design', label: 'Design team', kind: 'team' },
  { id: 'engineering', label: 'Engineering team', kind: 'team' },
]

const actions = [
  { id: 'summarize', label: 'Summarize', type: 'action' as const },
  { id: 'rewrite', label: 'Rewrite', type: 'action' as const },
]

const triggers: ComposerTrigger[] = [
  {
    character: '@',
    items: [
      ...people,
      ...teams,
    ],
  },
  { character: '/', items: actions },
]

const value = shallowRef<ComposerValue>([])
const notice = shallowRef('')

function send(draft: ComposerValue) {
  notice.value = `Sent: ${getComposerText(draft)}`
  value.value = []
}
</script>

<template>
  <div class="flex w-full max-w-xl flex-col gap-3">
    <Composer v-model:value="value" :triggers="triggers" @submit="send">
      <ComposerInput aria-label="Message" placeholder="Write a message…">
        <template #token="{ token }">
          <ComposerToken :token="token" variant="chip">
            <template #icon>
              <SparklesIcon v-if="token.type === 'action'" aria-hidden="true" />
              <UsersRoundIcon v-else-if="token.kind === 'team'" aria-hidden="true" />
              <UserRoundIcon v-else aria-hidden="true" />
            </template>
          </ComposerToken>
        </template>
      </ComposerInput>
      <ComposerPopup>
        <ComposerList>
          <template #item="{ item }">
            <ComposerItem :value="item">
              <SparklesIcon v-if="item.type === 'action'" aria-hidden="true" class="size-4 opacity-80" />
              <UsersRoundIcon v-else-if="item.kind === 'team'" aria-hidden="true" class="size-4 opacity-80" />
              <UserRoundIcon v-else aria-hidden="true" class="size-4 opacity-80" />
              <span class="truncate">{{ item.label }}</span>
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
    <p class="min-h-5 text-muted-foreground text-sm" role="status">
      {{ notice }}
    </p>
  </div>
</template>
