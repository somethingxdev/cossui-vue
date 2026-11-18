<script setup lang="ts">
import type { Component, ComponentPublicInstance } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { inject, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { ComboboxContext } from './context'

type ComboboxTriggerProps = InstanceType<typeof ComboboxPrimitive.ComboboxTrigger>['$props']

interface Props extends /* @vue-ignore */ ComboboxTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()

const trigger = useTemplateRef<ComponentPublicInstance>('trigger')
const context = inject(ComboboxContext, null)

// With the input inside the popup, the trigger is what the popup lines up with.
onMounted(() => {
  if (context)
    context.anchorRef.value ??= trigger.value?.$el
})

onBeforeUnmount(() => {
  if (context?.anchorRef.value === trigger.value?.$el)
    context!.anchorRef.value = null
})
</script>

<template>
  <ComboboxPrimitive.ComboboxTrigger ref="trigger">
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </ComboboxPrimitive.ComboboxTrigger>
</template>
