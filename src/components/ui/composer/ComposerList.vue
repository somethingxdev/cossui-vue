<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { ComposerItemValue } from './document'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'
import { useComposerEditor } from './editor'

interface Props {
  as?: string | Component
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), { as: 'div' })

// `item` renders each current suggestion; without it, the default slot holds the items.
defineSlots<{
  default?: () => unknown
  item?: (props: { item: ComposerItemValue, index: number }) => unknown
}>()

const editor = useComposerEditor()

function setList(element: unknown): void {
  if (editor)
    editor.listEl.value = element as HTMLElement | null
}
</script>

<template>
  <ScrollArea
    class="h-auto! **:data-[slot=scroll-area-viewport]:h-auto! **:data-[slot=scroll-area-viewport]:max-h-[min(var(--composer-list-height),16rem)]"
    overscroll-contain
    scrollbar-gutter
    scroll-fade
  >
    <component
      :is="props.as"
      :id="editor?.listId"
      :ref="setList"
      data-slot="composer-list"
      :role="editor ? 'listbox' : undefined"
      :aria-label="editor ? 'Suggestions' : undefined"
      :class="cn('not-empty:scroll-py-1 not-empty:p-1 in-data-overflow-y:pe-3', props.class)"
      v-bind="$attrs"
    >
      <template v-if="$slots.item">
        <template v-for="(item, index) in editor?.items.value" :key="item.id">
          <slot name="item" :item="item" :index="index" />
        </template>
      </template>
      <slot v-else />
    </component>
  </ScrollArea>
</template>
