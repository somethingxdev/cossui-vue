<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { OTPField, OTPFieldInput, OTPFieldSeparator } from '../components/ui/otp-field'
</script>

<template>
  <div class="flex flex-col gap-8">
    <Field>
      <FieldLabel class="sr-only">
        One-time password
      </FieldLabel>
      <OTPField :length="6">
        <OTPFieldInput
          v-for="n in 6"
          :key="n"
          :aria-label="n === 1 ? undefined : `Character ${n} of 6`"
        />
      </OTPField>
    </Field>

    <Field>
      <FieldLabel class="sr-only">
        One-time password
      </FieldLabel>
      <OTPField :length="4" size="lg">
        <OTPFieldInput
          v-for="n in 4"
          :key="n"
          :aria-label="n === 1 ? undefined : `Character ${n} of 4`"
        />
      </OTPField>
    </Field>

    <Field>
      <FieldLabel class="sr-only">
        Verification code
      </FieldLabel>
      <OTPField :length="6">
        <OTPFieldInput
          v-for="n in 3"
          :key="n"
          :aria-label="n === 1 ? undefined : `Character ${n} of 6`"
        />
        <OTPFieldSeparator />
        <OTPFieldInput
          v-for="n in 3"
          :key="n + 3"
          :aria-label="`Character ${n + 3} of 6`"
        />
      </OTPField>
    </Field>

    <Field class="w-fit items-center">
      <FieldLabel>Verification code</FieldLabel>
      <OTPField :length="4">
        <OTPFieldInput
          v-for="n in 4"
          :key="n"
          :aria-label="`Character ${n} of 4`"
        />
      </OTPField>
      <FieldDescription>
        Enter the 4-digit code sent to your email.
      </FieldDescription>
    </Field>
  </div>
</template>
