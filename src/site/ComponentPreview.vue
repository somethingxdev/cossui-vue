<script setup lang="ts">
import { computedAsync } from '@vueuse/core'
import { computed, shallowRef } from 'vue'
import { Tabs, TabsList, TabsTab } from '../components/ui/tabs'
import CodeBlock from './CodeBlock.vue'
import DemoBoundary from './DemoBoundary.vue'
import { getExample, loadExampleSource } from './registry'

/** `name` is a file in `src/examples`, such as `button-1`. */
const props = defineProps<{
  name: string
}>()

const tab = shallowRef('preview')
const example = computed(() => getExample(props.name))
const source = computedAsync(() => loadExampleSource(props.name), '')
</script>

<template>
  <div class="group relative mt-4 mb-4 flex flex-col gap-2">
    <Tabs v-model:value="tab">
      <TabsList class="bg-transparent p-0 *:data-[slot=tabs-indicator]:rounded-lg *:data-[slot=tabs-indicator]:bg-accent *:data-[slot=tabs-indicator]:shadow-none">
        <TabsTab class="rounded-lg" value="preview">
          Preview
        </TabsTab>
        <TabsTab class="rounded-lg" value="code">
          Code
        </TabsTab>
      </TabsList>
    </Tabs>
    <div class="relative rounded-xl border not-dark:bg-card" :data-tab="tab">
      <div v-show="tab === 'preview'" class="flex min-h-[450px] w-full items-center justify-center overflow-y-auto p-10 max-sm:px-6">
        <div data-slot="preview" class="w-full max-w-full">
          <div class="flex justify-center">
            <DemoBoundary>
              <component :is="example" />
            </DemoBoundary>
          </div>
        </div>
      </div>
      <CodeBlock
        v-if="tab === 'code'"
        :code="source"
        class="max-h-[450px] rounded-xl border-0 [&>div]:max-h-[450px]"
      />
    </div>
  </div>
</template>
