<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AvatarPrimitive from '@ui-sdk/vue/avatar'
import { cn } from '../../../lib/utils'

type AvatarImageProps = InstanceType<typeof AvatarPrimitive.AvatarImage>['$props']

interface Props extends /* @vue-ignore */ AvatarImageProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.AvatarImage
    :class="cn(
      'absolute inset-0 z-10 size-full rounded-[inherit] object-cover',
      props.class,
    )"
  />
</template>
