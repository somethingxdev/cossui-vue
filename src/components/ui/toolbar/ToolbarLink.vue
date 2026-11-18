<script setup lang="ts">
import * as ToolbarPrimitive from '@ui-sdk/vue/toolbar'

type ToolbarLinkProps = InstanceType<typeof ToolbarPrimitive.ToolbarLink>['$props']

interface Props extends /* @vue-ignore */ ToolbarLinkProps {}

defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.ToolbarLink>
    <slot />
  </ToolbarPrimitive.ToolbarLink>
</template>
