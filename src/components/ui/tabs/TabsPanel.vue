<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as TabsPrimitive from '@ui-sdk/vue/tabs'
import { cn } from '../../../lib/utils'

type TabsPanelProps = InstanceType<typeof TabsPrimitive.TabsPanel>['$props']

interface Props extends /* @vue-ignore */ TabsPanelProps {
  value: TabsPanelProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TabsPrimitive.TabsPanel
    :value="props.value"
    :class="cn('flex-1 outline-none', props.class)"
  >
    <slot />
  </TabsPrimitive.TabsPanel>
</template>
