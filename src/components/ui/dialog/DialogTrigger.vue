<script setup lang="ts">
import type { Component } from 'vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'

type DialogTriggerProps = InstanceType<typeof DialogPrimitive.DialogTrigger>['$props']

interface Props extends /* @vue-ignore */ DialogTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.DialogTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </DialogPrimitive.DialogTrigger>
</template>
