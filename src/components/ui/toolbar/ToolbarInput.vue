<script setup lang="ts">
import * as ToolbarPrimitive from '@ui-sdk/vue/toolbar'

type ToolbarInputProps = InstanceType<typeof ToolbarPrimitive.ToolbarInput>['$props']

interface Props extends /* @vue-ignore */ ToolbarInputProps {}

defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.ToolbarInput />
</template>
