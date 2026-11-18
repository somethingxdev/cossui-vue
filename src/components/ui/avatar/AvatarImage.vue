<script setup lang="ts">
import type { AvatarImageProps } from '@vase-ui/vue/avatar'
import type { HTMLAttributes } from 'vue'
import { Avatar as AvatarPrimitive } from '@vase-ui/vue/avatar'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AvatarImageProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.Image
    data-slot="avatar-image"
    :class="cn(
      'absolute inset-0 z-10 size-full rounded-[inherit] object-cover data-error:invisible data-loading:invisible',
      props.class,
    )"
  />
</template>
