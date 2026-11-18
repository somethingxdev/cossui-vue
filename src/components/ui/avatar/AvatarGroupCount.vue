<script setup lang="ts">
import type { AvatarRootProps } from '@vase-ui/vue/avatar'
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import Avatar from './Avatar.vue'
import AvatarFallback from './AvatarFallback.vue'

interface Props extends /* @vue-ignore */ AvatarRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Avatar data-slot="avatar-group-count" :class="cn('text-muted-foreground', props.class)">
    <AvatarFallback>
      <slot />
    </AvatarFallback>
  </Avatar>
</template>
