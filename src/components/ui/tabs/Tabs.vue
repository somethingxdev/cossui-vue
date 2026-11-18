<script setup lang="ts">
import type { TabsRootProps } from '@vase-ui/vue/tabs'
import type { HTMLAttributes } from 'vue'
import { Tabs as TabsPrimitive } from '@vase-ui/vue/tabs'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ TabsRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TabsPrimitive.Root
    data-slot="tabs"
    :class="cn('flex flex-col gap-2 data-[orientation=vertical]:flex-row', props.class)"
  >
    <slot />
  </TabsPrimitive.Root>
</template>
