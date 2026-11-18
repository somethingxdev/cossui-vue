<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ComposerTokenPart } from './document'
import { cn } from '../../../lib/utils'

export type ComposerTokenVariant = 'default' | 'chip'

interface Props {
  variant?: ComposerTokenVariant
  token: ComposerTokenPart
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), { variant: 'default' })
</script>

<template>
  <span
    data-slot="composer-token"
    contenteditable="false"
    :data-kind="props.token.kind"
    :data-type="props.token.type"
    :data-variant="props.variant"
    :class="cn(
      'wrap-break-word inline cursor-default align-baseline font-normal text-primary data-[variant=default]:font-medium data-[variant=chip]:box-decoration-clone data-[variant=chip]:rounded-md data-[variant=chip]:bg-accent data-[variant=chip]:px-1.5 data-[variant=chip]:py-px data-[variant=chip]:text-accent-foreground [&_[data-slot=composer-token-icon]:empty]:hidden [&_[data-slot=composer-token-icon]>svg]:size-3.5',
      props.class,
    )"
  >
    <span
      v-if="props.variant === 'chip' && $slots.icon"
      aria-hidden="true"
      data-slot="composer-token-icon"
      class="inline whitespace-nowrap opacity-80 after:content-['\2060\00a0'] [&>svg]:inline-block [&>svg]:align-[-0.125em]"
    ><slot name="icon" /></span><span data-slot="composer-token-label">{{ props.variant === 'default' ? props.token.trigger : '' }}<slot>{{ props.token.label }}</slot></span>
  </span>
</template>
