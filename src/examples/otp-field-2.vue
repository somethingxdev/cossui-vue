<script setup lang="ts">
import { Field, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 4
</script>

<template>
  <Field>
    <FieldLabel class="sr-only">
      One-time password
    </FieldLabel>
    <OTPField :length="OTP_LENGTH" size="lg">
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :aria-label="n === 1 ? undefined : `Character ${n} of ${OTP_LENGTH}`"
      />
    </OTPField>
  </Field>
</template>
