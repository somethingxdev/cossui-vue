<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MenuPrimitive from '@ui-sdk/vue/menu'
import { cn } from '../../../lib/utils'

type MenuContentProps = InstanceType<typeof MenuPrimitive.MenuContent>['$props']

interface Props extends /* @vue-ignore */ MenuContentProps {
  align?: MenuContentProps['align']
  sideOffset?: MenuContentProps['sideOffset']
  // Set by MenuSubPopup: a submenu renders UI SDK's MenuSubContent.
  sub?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 4,
  align: 'center',
})
</script>

<template>
  <!-- The content is a native popover: padding, overflow and color reset what the browser gives it. -->
  <component
    :is="props.sub ? MenuPrimitive.MenuSubContent : MenuPrimitive.MenuContent"
    :align="props.align"
    :class="cn(
      `flex not-[class*='w-']:min-w-32 origin-(--transform-origin) overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding p-0 text-foreground shadow-lg/5 outline-none [--menu-height:var(--available-height)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] focus:outline-none dark:before:shadow-[0_-1px_--theme(--color-white/6%)]`,
      props.class,
    )"
    :side-offset="props.sideOffset"
  >
    <!-- --available-height does not inherit, so the content copies it for this scroller. -->
    <div class="max-h-(--menu-height) w-full overflow-y-auto p-1">
      <slot />
    </div>
  </component>
</template>
