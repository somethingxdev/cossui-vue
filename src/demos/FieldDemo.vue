<script setup lang="ts">
import { Field, FieldDescription, FieldError, FieldLabel, FieldValidity } from '../components/ui/field'
import { Input } from '../components/ui/input'
</script>

<template>
  <div class="grid max-w-sm gap-8">
    <Field>
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="Enter your name" type="text" />
      <FieldDescription>Visible on your profile</FieldDescription>
    </Field>

    <Field>
      <FieldLabel>
        Password <span class="text-destructive-foreground">*</span>
      </FieldLabel>
      <Input placeholder="Enter password" required type="password" />
      <FieldError>Please fill out this field.</FieldError>
    </Field>

    <Field disabled>
      <FieldLabel>Email</FieldLabel>
      <Input disabled placeholder="Enter your email" type="email" />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>

    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="Enter your email" required type="email" />
      <FieldValidity v-slot="validity">
        <div class="flex w-full flex-col gap-2">
          <p v-if="validity.error" class="text-destructive-foreground text-xs">
            {{ validity.error }}
          </p>
          <div class="w-full rounded-md bg-muted p-2">
            <pre class="max-h-60 overflow-y-auto font-mono text-xs [scrollbar-width:none]">{{ JSON.stringify(validity, null, 2) }}</pre>
          </div>
        </div>
      </FieldValidity>
    </Field>
  </div>
</template>
