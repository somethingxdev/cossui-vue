<script setup lang="ts">
import type { CodeLang } from './highlight'
import { CheckIcon, CopyIcon } from '@lucide/vue'
import { computedAsync, useClipboard } from '@vueuse/core'
import { Button } from '../components/ui/button'
import { cn } from '../lib/utils'
import { highlight } from './highlight'

const props = withDefaults(defineProps<{
  code: string
  lang?: CodeLang
  title?: string
  class?: string
}>(), {
  lang: 'vue',
})

// Shiki escapes the source, so the generated markup is safe for v-html.
const html = computedAsync(() => highlight(props.code.trimEnd(), props.lang), '')
const { copy, copied } = useClipboard({ legacy: true })
</script>

<template>
  <figure :class="cn('relative overflow-hidden rounded-xl border bg-code text-code-foreground', props.class)">
    <figcaption
      v-if="props.title"
      class="border-b border-border/64 px-4 py-2.5 font-mono text-muted-foreground text-xs"
    >
      {{ props.title }}
    </figcaption>
    <Button
      class="absolute end-1.5 top-1.5 z-10"
      size="icon-sm"
      variant="ghost"
      :aria-label="copied ? 'Copied' : 'Copy code'"
      @click="copy(props.code)"
    >
      <CheckIcon v-if="copied" />
      <CopyIcon v-else />
    </Button>
    <div
      v-if="html"
      class="max-h-[inherit] overflow-auto py-3.5 font-mono text-[.8125rem] leading-relaxed [&_.line]:px-4 [&_pre]:min-w-fit [&_pre]:bg-transparent! [&_pre]:outline-none"
      v-html="html"
    />
    <pre v-else class="overflow-auto px-4 py-3.5 font-mono text-[.8125rem] leading-relaxed">{{ props.code }}</pre>
  </figure>
</template>
