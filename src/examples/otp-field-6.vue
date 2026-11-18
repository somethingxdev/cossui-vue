<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 6
</script>

<template>
  <Field class="items-center">
    <FieldLabel>Tier code</FieldLabel>
    <OTPField input-mode="numeric" :length="OTP_LENGTH" :pattern="/[0-3]/">
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :index="n - 1"
      />
    </OTPField>
    <FieldDescription>Digits 0-3 only.</FieldDescription>
  </Field>
</template>
