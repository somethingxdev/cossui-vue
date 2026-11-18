<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import * as FieldPrimitive from '@ui-sdk/vue/field'
import { computed, inject, provide, shallowRef, watch } from 'vue'
import { cn } from '../../../lib/utils'

type FieldProps = InstanceType<typeof FieldPrimitive.Field>['$props']

interface Props extends /* @vue-ignore */ FieldProps {
  as?: string | Component
  name?: string
  invalid?: boolean
  class?: HTMLAttributes['class']
}

// `invalid` must stay undefined when it is not passed: `false` hides the browser's validation.
const props = withDefaults(defineProps<Props>(), { invalid: undefined })

// `Form` provides its `errors`; a field shows the one under its `name` until the user edits the control.
const formErrors = inject<() => Record<string, string | string[]> | undefined>('form-errors', () => undefined)
const edited = shallowRef(false)
watch(formErrors, () => {
  edited.value = false
})
const error = computed(() => {
  const value = !edited.value && props.name
    ? formErrors()?.[props.name]
    : undefined
  return Array.isArray(value)
    ? value.join(' ')
    : value
})
provide('field-error', error)

// UI SDK shows errors after a submit attempt. An input outside a form has none, so Enter checks it.
function onEnter(event: KeyboardEvent) {
  if (event.target instanceof HTMLInputElement && !event.target.form)
    event.target.checkValidity()
}
</script>

<template>
  <FieldPrimitive.Field
    :name="props.name"
    :invalid="error ? true : props.invalid"
    :class="cn('flex flex-col items-start gap-2', props.class)"
    @input="edited = true"
    @keydown.enter="onEnter"
  >
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </FieldPrimitive.Field>
</template>
