<script setup lang="ts">
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'

type ComboboxValueProps = InstanceType<typeof ComboboxPrimitive.ComboboxValue>['$props']

interface Props extends /* @vue-ignore */ ComboboxValueProps {
  placeholder?: string
}

const props = defineProps<Props>()

defineSlots<{
  // `value` is the selected value, or the list of them with `multiple`.
  default?: (props: { state: ComboboxPrimitive.ComboboxValueState, value: any }) => any
}>()
</script>

<template>
  <ComboboxPrimitive.ComboboxValue v-slot="scope">
    <slot v-bind="scope">
      {{ scope.state.label || props.placeholder }}
    </slot>
  </ComboboxPrimitive.ComboboxValue>
</template>
