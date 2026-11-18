<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 6
</script>

<template>
  <Field class="items-center">
    <FieldLabel>Recovery code</FieldLabel>
    <OTPField :length="OTP_LENGTH" pattern="alphanumeric">
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :index="n - 1"
      />
    </OTPField>
    <FieldDescription>
      Accept letters and numbers for backup codes such as
      <code class="font-mono text-foreground">A7C9XZ</code>.
    </FieldDescription>
  </Field>
</template>
