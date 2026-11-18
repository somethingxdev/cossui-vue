<script setup lang="ts">
import type { AvatarRootProps } from '@vase-ui/vue/avatar'
import type { HTMLAttributes } from 'vue'
import { Avatar as AvatarPrimitive } from '@vase-ui/vue/avatar'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AvatarRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.Root
    data-slot="avatar"
    :class="cn(
      'relative isolate inline-flex size-(--avatar-size,--spacing(8)) shrink-0 select-none items-center justify-center overflow-hidden rounded-full align-middle font-medium text-[calc(var(--avatar-size,--spacing(8))*0.375)]/none',
      props.class,
    )"
  >
    <slot />
  </AvatarPrimitive.Root>
</template>
