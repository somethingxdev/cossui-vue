<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 4
</script>

<template>
  <Field class="items-center">
    <FieldLabel>Verification code</FieldLabel>
    <OTPField :length="OTP_LENGTH">
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :aria-label="`Character ${n} of ${OTP_LENGTH}`"
      />
    </OTPField>
    <FieldDescription>
      Enter the {{ OTP_LENGTH }}-digit code sent to your email.
    </FieldDescription>
  </Field>
</template>
