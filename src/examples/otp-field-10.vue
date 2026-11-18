<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput } from '../components/ui/otp-field'

const OTP_LENGTH = 6
</script>

<template>
  <Field class="items-center">
    <FieldLabel>Access code</FieldLabel>
    <OTPField :length="OTP_LENGTH" mask>
      <OTPFieldInput
        v-for="n in OTP_LENGTH"
        :key="n"
        :index="n - 1"
      />
    </OTPField>
    <FieldDescription>
      Use <code class="font-mono text-foreground">mask</code> to obscure
      the code on shared screens.
    </FieldDescription>
  </Field>
</template>
