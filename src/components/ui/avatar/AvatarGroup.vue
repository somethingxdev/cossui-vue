<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

export interface AvatarGroupProps extends /* @vue-ignore */ HTMLAttributes {
  topmost?: 'first' | 'last'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  topmost: 'first',
})

const AVATAR_GROUP_CUT
  = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E")`
</script>

<template>
  <div
    data-slot="avatar-group"
    :data-topmost="props.topmost"
    :style="{ '--avatar-group-cut-image': AVATAR_GROUP_CUT }"
    :class="cn(
      'flex w-fit items-center',
      '[--avatar-group-size:var(--avatar-size,--spacing(8))]',
      '[--avatar-group-gap:var(--avatar-gap,calc(var(--avatar-group-size)/16))]',
      '[--avatar-group-overlap:var(--avatar-overlap,calc(var(--avatar-group-size)*0.3))]',
      '[--avatar-group-cut-end:calc(var(--avatar-group-size)*1.5-var(--avatar-group-overlap))]',
      '[--avatar-group-cut-radius:calc(var(--avatar-group-size)/2+var(--avatar-group-gap))]',
      '[--avatar-group-cut-start:calc(var(--avatar-group-overlap)-var(--avatar-group-size)/2)]',
      '[--avatar-group-mask-position:0_0,calc(var(--avatar-group-cut-x)-var(--avatar-group-cut-radius))_50%]',
      '[--avatar-group-mask-size:100%_100%,calc(var(--avatar-group-cut-radius)*2)_calc(var(--avatar-group-cut-radius)*2)]',
      '[--avatar-group-mask:none]',
      'supports-[mask-composite:subtract]:[--avatar-group-mask:var(--avatar-group-cut-image),var(--avatar-group-cut-image)]',
      '[--avatar-group-nudge:var(--avatar-nudge,calc((var(--avatar-group-overlap)+var(--avatar-group-gap))*0.3))]',
      '*:not-first:-ms-(--avatar-group-overlap)',
      props.topmost === 'first'
        ? '*:not-first:mask-(--avatar-group-mask) *:not-first:mask-subtract *:not-first:mask-position-(--avatar-group-mask-position) *:not-first:mask-no-repeat *:not-first:mask-size-(--avatar-group-mask-size) [--avatar-group-cut-x:var(--avatar-group-cut-start)] *:not-first:*:data-[slot=avatar-fallback]:ps-[calc(var(--avatar-group-nudge)*2)] supports-[mask-composite:subtract]:*:not-first:rounded-none rtl:[--avatar-group-cut-x:var(--avatar-group-cut-end)]'
        : '*:not-last:mask-(--avatar-group-mask) *:not-last:mask-subtract *:not-last:mask-position-(--avatar-group-mask-position) *:not-last:mask-no-repeat *:not-last:mask-size-(--avatar-group-mask-size) [--avatar-group-cut-x:var(--avatar-group-cut-end)] *:not-last:*:data-[slot=avatar-fallback]:pe-[calc(var(--avatar-group-nudge)*2)] supports-[mask-composite:subtract]:*:not-last:rounded-none rtl:[--avatar-group-cut-x:var(--avatar-group-cut-start)]',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
