<script setup lang="ts">
import type { ComposerValue } from '../components/ui/composer'
import { ArrowUpIcon, PaperclipIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Composer,
  ComposerActionGroup,
  ComposerActions,
  ComposerInput,
  ComposerSubmit,
  getComposerText,
} from '../components/ui/composer'

const value = shallowRef<ComposerValue>([])
const notice = shallowRef('')

function send(draft: ComposerValue) {
  notice.value = `Sent: ${getComposerText(draft)}`
  value.value = []
}
</script>

<template>
  <div class="flex w-full max-w-xl flex-col gap-3">
    <Composer v-model:value="value" @submit="send">
      <ComposerInput as="textarea" aria-label="Plain message" placeholder="Write a message…" />
      <ComposerActions>
        <ComposerActionGroup>
          <Button
            aria-label="Attach a file"
            size="icon"
            type="button"
            variant="ghost"
            @click="notice = 'Attach a file'"
          >
            <PaperclipIcon aria-hidden="true" />
          </Button>
        </ComposerActionGroup>
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
