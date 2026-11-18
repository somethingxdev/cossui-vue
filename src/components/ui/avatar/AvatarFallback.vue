<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AvatarPrimitive from '@ui-sdk/vue/avatar'
import { cn } from '../../../lib/utils'

type AvatarFallbackProps = InstanceType<typeof AvatarPrimitive.AvatarFallback>['$props']

interface Props extends /* @vue-ignore */ AvatarFallbackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.AvatarFallback
    :class="cn(
      'absolute inset-0 flex size-full items-center justify-center rounded-[inherit] bg-border',
      props.class,
    )"
  >
    <slot />
  </AvatarPrimitive.AvatarFallback>
</template>
