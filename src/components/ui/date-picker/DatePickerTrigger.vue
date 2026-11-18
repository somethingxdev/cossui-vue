<script setup lang="ts">
import type { Component } from 'vue'
import * as DatePickerPrimitive from '@ui-sdk/vue/date-picker'

type DatePickerTriggerProps = InstanceType<typeof DatePickerPrimitive.DatePickerTrigger>['$props']

interface Props extends /* @vue-ignore */ DatePickerTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <DatePickerPrimitive.DatePickerTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </DatePickerPrimitive.DatePickerTrigger>
</template>
