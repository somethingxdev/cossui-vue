<script setup lang="ts">
import type { Component } from 'vue'
import * as AlertDialogPrimitive from '@ui-sdk/vue/alert-dialog'

type AlertDialogTriggerProps = InstanceType<typeof AlertDialogPrimitive.AlertDialogTrigger>['$props']

interface Props extends /* @vue-ignore */ AlertDialogTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.AlertDialogTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </AlertDialogPrimitive.AlertDialogTrigger>
</template>
