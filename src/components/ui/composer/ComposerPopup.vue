<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as PopoverPrimitive from '@ui-sdk/vue/popover'
import { cn } from '../../../lib/utils'
import { useComposerEditor } from './editor'

type PopoverContentProps = InstanceType<typeof PopoverPrimitive.PopoverContent>['$props']

export interface ComposerPopupProps extends /* @vue-ignore */ PopoverContentProps {
  anchor?: PopoverContentProps['anchor']
  side?: PopoverContentProps['side']
  align?: PopoverContentProps['align']
  sideOffset?: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<ComposerPopupProps>(), {
  side: 'top',
  align: 'start',
  sideOffset: 4,
})

const editor = useComposerEditor()
</script>

<template>
  <!-- Focus stays in the editor: the popup is a list the input drives. `--available-height` does not inherit, so the list gets a copy. -->
  <PopoverPrimitive.PopoverContent
    :anchor="props.anchor ?? editor?.rootEl.value"
    :side="props.side"
    :align="props.align"
    :side-offset="props.sideOffset"
    :role="editor ? 'presentation' : undefined"
    :initial-focus="editor ? 'none' : undefined"
    :final-focus="editor ? 'none' : undefined"
    :class="cn(
      'relative z-50 w-(--anchor-width) [--composer-list-height:var(--available-height)] max-w-(--available-width) rounded-lg border bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:invisible data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  >
    <slot />
  </PopoverPrimitive.PopoverContent>
</template>
