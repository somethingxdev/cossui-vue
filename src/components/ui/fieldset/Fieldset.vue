<script setup lang="ts">
import * as FieldPrimitive from '@ui-sdk/vue/field'

type FieldSetProps = InstanceType<typeof FieldPrimitive.FieldSet>['$props']

interface Props extends /* @vue-ignore */ FieldSetProps {}

defineProps<Props>()
</script>

<template>
  <FieldPrimitive.FieldSet>
    <slot />
  </FieldPrimitive.FieldSet>
</template>
