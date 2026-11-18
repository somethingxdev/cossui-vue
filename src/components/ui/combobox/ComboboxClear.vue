<script setup lang="ts">
import type { Component } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'

type ComboboxClearProps = InstanceType<typeof ComboboxPrimitive.ComboboxClear>['$props']

interface Props extends /* @vue-ignore */ ComboboxClearProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxClear>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </ComboboxPrimitive.ComboboxClear>
</template>
