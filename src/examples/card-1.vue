<script setup lang="ts">
import { CircleAlertIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from '../components/ui/card'
import { Field, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const frameworkOptions = [
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
]
</script>

<template>
  <Card class="w-full max-w-xs">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardPanel>
      <Form class="flex w-full flex-col gap-4" @submit.prevent>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input placeholder="Name of your project" type="text" />
        </Field>
        <Field>
          <FieldLabel>Framework</FieldLabel>
          <Select default-value="next" :items="frameworkOptions">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectPopup>
              <SelectItem v-for="{ label, value } in frameworkOptions" :key="value" :value="value">
                {{ label }}
              </SelectItem>
            </SelectPopup>
          </Select>
        </Field>
        <Button class="w-full" type="submit">
          Deploy
        </Button>
      </Form>
    </CardPanel>
    <CardFooter>
      <div class="flex gap-1 text-muted-foreground text-xs">
        <CircleAlertIcon class="size-3 h-lh shrink-0" />
        <p>This will take a few seconds to complete.</p>
      </div>
    </CardFooter>
  </Card>
</template>
