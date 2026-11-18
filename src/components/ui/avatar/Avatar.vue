<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import * as AvatarPrimitive from '@ui-sdk/vue/avatar'
import { cn } from '../../../lib/utils'

type AvatarProps = InstanceType<typeof AvatarPrimitive.Avatar>['$props']

interface Props extends /* @vue-ignore */ AvatarProps {
  as?: string | Component
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarPrimitive.Avatar
    :class="cn(
      'relative isolate inline-flex size-(--avatar-size,--spacing(8)) shrink-0 select-none items-center justify-center overflow-hidden rounded-full align-middle font-medium text-[calc(var(--avatar-size,--spacing(8))*0.375)]/none',
      props.class,
    )"
  >
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </AvatarPrimitive.Avatar>
</template>
