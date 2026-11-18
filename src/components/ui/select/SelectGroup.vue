<script setup lang="ts">
import * as SelectPrimitive from '@ui-sdk/vue/select'

type SelectGroupProps = InstanceType<typeof SelectPrimitive.SelectGroup>['$props']

interface Props extends /* @vue-ignore */ SelectGroupProps {}

defineProps<Props>()
</script>

<template>
  <SelectPrimitive.SelectGroup>
    <slot />
  </SelectPrimitive.SelectGroup>
</template>
