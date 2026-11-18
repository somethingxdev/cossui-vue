<script setup lang="ts">
import type { Component } from 'vue'
import * as SheetPrimitive from '@ui-sdk/vue/dialog'

type DialogTriggerProps = InstanceType<typeof SheetPrimitive.DialogTrigger>['$props']

interface Props extends /* @vue-ignore */ DialogTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <SheetPrimitive.DialogTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </SheetPrimitive.DialogTrigger>
</template>
