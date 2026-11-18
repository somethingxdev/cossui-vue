<script setup lang="ts">
import type { TabsPanelProps } from '@vase-ui/vue/tabs'
import type { HTMLAttributes } from 'vue'
import { Tabs as TabsPrimitive } from '@vase-ui/vue/tabs'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ TabsPanelProps {
  value: TabsPanelProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TabsPrimitive.Panel
    data-slot="tabs-content"
    :value="props.value"
    :class="cn('flex-1 outline-none', props.class)"
  >
    <slot />
  </TabsPrimitive.Panel>
</template>
