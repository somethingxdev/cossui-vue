<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as TabsPrimitive from '@ui-sdk/vue/tabs'
import { cn } from '../../../lib/utils'

type TabsRootProps = InstanceType<typeof TabsPrimitive.Tabs>['$props']

interface Props extends /* @vue-ignore */ TabsRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TabsPrimitive.Tabs
    :class="cn('flex flex-col gap-2 data-[orientation=vertical]:flex-row', props.class)"
  >
    <slot />
  </TabsPrimitive.Tabs>
</template>
