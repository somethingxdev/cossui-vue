<script setup lang="ts">
import type { Component } from 'vue'
import * as AlertDialogPrimitive from '@ui-sdk/vue/alert-dialog'

type AlertDialogCloseProps = InstanceType<typeof AlertDialogPrimitive.AlertDialogClose>['$props']

interface Props extends /* @vue-ignore */ AlertDialogCloseProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.AlertDialogClose>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </AlertDialogPrimitive.AlertDialogClose>
</template>
