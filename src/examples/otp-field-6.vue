<script setup lang="ts">
import { onBeforeUnmount, shallowRef } from 'vue'
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 6

function normalizeTierCode(value: string) {
  return value.replace(/[^0-3]/g, '')
}

const focusedIndex = shallowRef(0)
const invalidPulse = shallowRef(0)
const statusMessage = shallowRef('')
let invalidTimeout: ReturnType<typeof setTimeout> | undefined
let skipClearOnNextValueChange = false

onBeforeUnmount(() => clearTimeout(invalidTimeout))

function clearInvalidFeedback() {
  clearTimeout(invalidTimeout)
  invalidPulse.value = 0
  statusMessage.value = ''
}

function handleValueChange() {
  if (skipClearOnNextValueChange) {
    skipClearOnNextValueChange = false
    return
  }
  clearInvalidFeedback()
}

function handleValueInvalid(value: string) {
  skipClearOnNextValueChange = true
  invalidPulse.value++
  statusMessage.value = `Unsupported characters were ignored from ${value}.`
  clearTimeout(invalidTimeout)
  invalidTimeout = setTimeout(() => {
    invalidPulse.value = 0
  }, 400)
}
</script>

<template>
  <Field class="items-center">
    <FieldLabel>Tier code</FieldLabel>
    <OTPField
      input-mode="numeric"
      :length="OTP_LENGTH"
      :normalize-value="normalizeTierCode"
      validation-type="none"
      @value-change="handleValueChange"
      @value-invalid="handleValueInvalid"
    >
      <OTPFieldInput
        v-for="(_, index) in OTP_LENGTH"
        :key="index"
        :aria-invalid="(invalidPulse > 0 && focusedIndex === index) || undefined"
        :aria-label="`Character ${index + 1} of ${OTP_LENGTH}`"
        @focus="focusedIndex = index"
      />
    </OTPField>
    <FieldDescription>Digits 0-3 only.</FieldDescription>
    <span aria-live="polite" class="sr-only">
      {{ statusMessage }}
    </span>
  </Field>
</template>
