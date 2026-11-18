<script setup lang="ts">
import type { Component } from 'vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'

type DialogCloseProps = InstanceType<typeof DialogPrimitive.DialogClose>['$props']

interface Props extends /* @vue-ignore */ DialogCloseProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.DialogClose>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </DialogPrimitive.DialogClose>
</template>
