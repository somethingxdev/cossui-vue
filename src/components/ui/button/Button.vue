<script lang="ts">
import type { UseRenderComponentProps, UseRenderElementProps } from '@vase-ui/vue/use-render'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from './variants'
</script>

<script setup lang="ts">
import { mergeProps } from '@vase-ui/vue/merge-props'
import { useRender } from '@vase-ui/vue/use-render'
import { cn } from '../../../lib/utils'
import { Spinner } from '../spinner'
import { buttonVariants } from './variants'

export interface ButtonProps extends UseRenderComponentProps, /* @vue-ignore */ UseRenderElementProps<'button'> {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  loading?: boolean
  disabled?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<ButtonProps>()

defineSlots<{
  default: () => unknown
  render: useRender.RenderProp
}>()

const { element, elementProps, tag } = useRender(props, {
  defaultTagName: 'button',
  props: attrs => mergeProps<'button'>({
    'class': cn(buttonVariants({ variant: props.variant, size: props.size }), props.class),
    'data-slot': 'button',
    'disabled': props.loading || props.disabled,
    'aria-disabled': props.loading || undefined,
    'data-loading': props.loading ? '' : undefined,
  }, attrs),
})

defineExpose({ element })
</script>

<template>
  <slot v-if="$slots.render" name="render" :props="elementProps()" :state="{}" />
  <component :is="tag" v-else v-bind="elementProps()">
    <slot />
    <Spinner
      v-if="props.loading"
      class="pointer-events-none absolute"
      data-slot="button-loading-indicator"
    />
  </component>
</template>
