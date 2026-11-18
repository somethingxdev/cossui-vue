<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import { Field, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'
</script>

<template>
  <Dialog>
    <DialogTrigger :as="Button" variant="outline">
      Open Dialog
    </DialogTrigger>
    <DialogPopup class="sm:max-w-sm">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <Form class="contents" @submit.prevent>
        <DialogPanel class="grid gap-4">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input default-value="Margaret Welsh" type="text" />
          </Field>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input default-value="@maggie.welsh" type="text" />
          </Field>
        </DialogPanel>
        <DialogFooter variant="bare">
          <DialogClose :as="Button" variant="ghost">
            Cancel
          </DialogClose>
          <Button type="submit">
            Save
          </Button>
        </DialogFooter>
      </Form>
    </DialogPopup>
  </Dialog>
</template>
