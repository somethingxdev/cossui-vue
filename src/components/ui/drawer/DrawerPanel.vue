<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { createReusableTemplate } from '@vueuse/core'
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
</script>

<template>
  <DefineContent>
    <component
      :is="props.allowSelection ? DrawerPrimitive.Content : 'div'"
      v-bind="$attrs"
      data-slot="drawer-panel"
      :class="cn(
        'p-6 in-[[data-slot=drawer-popup]:has([data-slot=drawer-header])]:pt-1 in-[[data-slot=drawer-popup]:has([data-slot=drawer-footer]:not(.border-t))]:pb-1',
        !props.allowSelection && 'cursor-default',
        props.class,
      )"
    >
      <slot />
    </component>
  </DefineContent>
  <!-- The popup reserves keyboard space; extra viewport padding would overflow the panel. -->
  <ScrollArea
    v-if="props.scrollable"
    class="touch-auto *:data-[slot=scroll-area-viewport]:pb-0!"
    overscroll-contain
    :scroll-fade="props.scrollFade"
  >
    <ReuseContent />
  </ScrollArea>
  <ReuseContent v-else />
</template>
