<script setup lang="ts">
import type { AvatarFallbackProps } from '@vase-ui/vue/avatar'
import type { HTMLAttributes } from 'vue'
import { Avatar as AvatarPrimitive } from '@vase-ui/vue/avatar'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AvatarFallbackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    :class="cn(
      'absolute inset-0 flex size-full items-center justify-center rounded-[inherit] bg-border',
      props.class,
    )"
  >
    <slot />
  </AvatarPrimitive.Fallback>
</template>
