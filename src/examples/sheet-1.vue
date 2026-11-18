<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Field, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet'
</script>

<template>
  <Sheet>
    <SheetTrigger :as="Button" variant="outline">
      Open Sheet
    </SheetTrigger>
    <SheetPopup>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <Form class="contents" @submit.prevent>
        <SheetPanel class="grid gap-4">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input default-value="Margaret Welsh" type="text" />
          </Field>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input default-value="@maggie.welsh" type="text" />
          </Field>
        </SheetPanel>
        <SheetFooter>
          <SheetClose :as="Button" variant="ghost">
            Cancel
          </SheetClose>
          <Button type="submit">
            Save
          </Button>
        </SheetFooter>
      </Form>
    </SheetPopup>
  </Sheet>
</template>
