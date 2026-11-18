<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { Field, FieldDescription, FieldError, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 6

const value = shallowRef('')
const invalid = computed(() => value.value.length === OTP_LENGTH && value.value !== '123456')
const valid = computed(() => value.value === '123456')
</script>

<template>
  <Field class="items-center">
    <FieldLabel>Verification code</FieldLabel>
    <OTPField v-model:value="value" :length="OTP_LENGTH">
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :aria-invalid="invalid || undefined"
        :aria-label="`Character ${n} of ${OTP_LENGTH}`"
      />
    </OTPField>
    <FieldDescription v-if="!valid && !invalid">
      Enter `123456` to pass validation.
    </FieldDescription>
    <FieldError v-if="invalid" match>
      Code must be 123456.
    </FieldError>
    <FieldDescription v-if="valid">
      Code verified.
    </FieldDescription>
  </Field>
</template>
