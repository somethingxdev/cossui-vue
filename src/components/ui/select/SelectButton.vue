<script lang="ts">
import type { UseRenderComponentProps, UseRenderElementProps } from '@vase-ui/vue/use-render'
import type { HTMLAttributes } from 'vue'
import type { SelectTriggerVariants } from './variants'
</script>

<script setup lang="ts">
import { ChevronsUpDownIcon } from '@lucide/vue'
import { mergeProps } from '@vase-ui/vue/merge-props'
import { useRender } from '@vase-ui/vue/use-render'
import { cn } from '../../../lib/utils'
import { selectTriggerIconClassName, selectTriggerVariants } from './variants'

export interface SelectButtonProps extends UseRenderComponentProps, /* @vue-ignore */ UseRenderElementProps<'button'> {
  size?: SelectTriggerVariants['size']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<SelectButtonProps>()

const slots = defineSlots<{
  default?: () => unknown
  render?: useRender.RenderProp
}>()

const { element, elementProps, tag } = useRender(props, {
  defaultTagName: 'button',
  props: attrs => mergeProps<'button'>({
    'class': cn(selectTriggerVariants({ size: props.size }), 'min-w-0', props.class),
    'data-slot': 'select-button',
    'type': props.as || slots.render
      ? undefined
      : 'button',
  }, attrs),
})

defineExpose({ element })
</script>

<template>
  <slot v-if="$slots.render" name="render" :props="elementProps()" :state="{}" />
  <component :is="tag" v-else v-bind="elementProps()">
    <span class="flex-1 truncate in-data-placeholder:text-muted-foreground/72">
      <slot />
    </span>
    <ChevronsUpDownIcon :class="selectTriggerIconClassName" />
  </component>
</template>
