<script setup lang="ts">
import { Field, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 6
</script>

<template>
  <Field>
    <FieldLabel class="sr-only">
      One-time password
    </FieldLabel>
    <OTPField :length="OTP_LENGTH">
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :index="n - 1"
      />
    </OTPField>
  </Field>
</template>
