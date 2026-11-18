<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 6
</script>

<template>
  <Field class="items-center">
    <FieldLabel>Verification code</FieldLabel>
    <OTPField :length="OTP_LENGTH">
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :index="n - 1"
        placeholder="•"
      />
    </OTPField>
    <FieldDescription>
      Placeholder hints stay visible until the focused slot is active.
    </FieldDescription>
  </Field>
</template>
