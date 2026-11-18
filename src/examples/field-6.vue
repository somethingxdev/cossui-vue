<script setup lang="ts">
import { ArrowRightIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
</script>

<template>
  <Field>
    <FieldLabel>Subscribe</FieldLabel>
    <div class="relative w-full">
      <Input class="[&_input]:pe-8" placeholder="Your best email" type="email" />
      <Button
        aria-label="Subscribe"
        class="absolute end-1 top-1/2 -translate-y-1/2"
        size="icon-xs"
        variant="ghost"
      >
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </div>
    <FieldError>Please enter a valid email address.</FieldError>
  </Field>
</template>
