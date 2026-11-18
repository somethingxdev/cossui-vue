<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Field } from '../components/ui/field'
import { Form } from '../components/ui/form'
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '../components/ui/popover'
import { Textarea } from '../components/ui/textarea'
</script>

<template>
  <Popover>
    <PopoverTrigger :as="Button" variant="outline">
      Open Popover
    </PopoverTrigger>
    <PopoverPopup class="w-80">
      <div class="mb-4">
        <PopoverTitle class="text-base">
          Send us feedback
        </PopoverTitle>
        <PopoverDescription>
          Let us know how we can improve.
        </PopoverDescription>
      </div>
      <Form class="flex w-full flex-col gap-4" @submit.prevent>
        <Field>
          <Textarea
            id="popover-1-feedback"
            aria-label="Send feedback"
            placeholder="How can we improve?"
          />
        </Field>
        <Button type="submit">
          Send feedback
        </Button>
      </Form>
    </PopoverPopup>
  </Popover>
</template>
