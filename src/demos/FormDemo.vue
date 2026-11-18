<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'

type Errors = Record<string, string | string[]>

const wait = () => new Promise(resolve => setTimeout(resolve, 800))

const loading = shallowRef(false)
const result = shallowRef('')

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await wait()
  loading.value = false
  result.value = `Email: ${String(formData.get('email') ?? '')}`
}

const serverLoading = shallowRef(false)
const serverErrors = shallowRef<Errors>({})
const serverResult = shallowRef('')

// Stands in for the server: coss validates with zod here.
function validate(formData: FormData): Errors {
  const errors: Errors = {}
  const name = String(formData.get('name') ?? '')
  const age = Number(formData.get('age'))
  if (!name)
    errors.name = 'Please enter a name.'
  if (Number.isNaN(age))
    errors.age = 'Please enter a number.'
  else if (age <= 0)
    errors.age = 'Number must be positive.'
  return errors
}

async function onServerSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  serverLoading.value = true
  serverResult.value = ''
  await wait()
  serverErrors.value = validate(formData)
  serverLoading.value = false
  if (Object.keys(serverErrors.value).length === 0)
    serverResult.value = `Name: ${String(formData.get('name'))}, Age: ${String(formData.get('age'))}`
}
</script>

<template>
  <div class="flex flex-wrap gap-12">
    <div class="flex w-full max-w-64 flex-col gap-3">
      <Form class="flex w-full flex-col gap-4" @submit="onSubmit">
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <Input placeholder="you@example.com" required type="email" />
          <FieldError>Please enter a valid email.</FieldError>
        </Field>
        <Button :loading="loading" type="submit">
          Submit
        </Button>
      </Form>
      <p v-if="result" class="text-muted-foreground text-xs">
        {{ result }}
      </p>
    </div>

    <div class="flex w-full max-w-64 flex-col gap-3">
      <Form class="flex w-full flex-col gap-4" :errors="serverErrors" @submit="onServerSubmit">
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input placeholder="Enter name" />
          <FieldError />
        </Field>
        <Field name="age">
          <FieldLabel>Age</FieldLabel>
          <Input placeholder="Enter age" />
          <FieldError />
        </Field>
        <Button :loading="serverLoading" type="submit">
          Submit
        </Button>
      </Form>
      <p v-if="serverResult" class="text-muted-foreground text-xs">
        {{ serverResult }}
      </p>
    </div>
  </div>
</template>
