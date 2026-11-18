<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  scrollFade?: boolean
  scrollable?: boolean
  allowSelection?: boolean
  class?: HTMLAttributes['class']
}>(), {
  scrollFade: true,
  scrollable: true,
  allowSelection: true,
})

const [DefineContent, ReuseContent] = createReusableTemplate()

// A mouse drag that starts here selects text instead of moving the drawer; touch still swipes it.
const finePointer = useMediaQuery('(pointer: fine)')
</script>

<template>
  <DefineContent>
    <div
      :data-drawer-no-drag="props.allowSelection && finePointer ? '' : undefined"
      v-bind="$attrs"
      data-slot="drawer-panel"
      :class="cn(
        'p-6 in-[[data-slot=drawer-content]:has([data-slot=drawer-header])]:pt-1 in-[[data-slot=drawer-content]:has([data-slot=drawer-footer]:not(.border-t))]:pb-1',
        !props.allowSelection && 'cursor-default',
        props.class,
      )"
    >
      <slot />
    </div>
  </DefineContent>
  <!-- The popup reserves keyboard space; extra viewport padding would overflow the panel. -->
  <ScrollArea
    v-if="props.scrollable"
    class="*:data-[slot=scroll-area-viewport]:pb-0!"
    overscroll-contain
    :scroll-fade="props.scrollFade"
  >
    <ReuseContent />
  </ScrollArea>
  <ReuseContent v-else />
</template>
