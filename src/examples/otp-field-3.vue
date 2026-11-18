<script setup lang="ts">
import { Field, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput, OTPFieldSeparator } from '../components/ui/otp-field'

const OTP_LENGTH = 6
const GROUP_LENGTH = 3
</script>

<template>
  <Field>
    <FieldLabel class="sr-only">
      Verification code
    </FieldLabel>
    <OTPField :length="OTP_LENGTH">
      <OTPFieldInput
        v-for="n in GROUP_LENGTH"
        :key="n"
        :index="n - 1"
      />
      <OTPFieldSeparator />
      <OTPFieldInput
        v-for="n in OTP_LENGTH - GROUP_LENGTH"
        :key="n + GROUP_LENGTH"
        :index="n + GROUP_LENGTH - 1"
      />
    </OTPField>
  </Field>
</template>
