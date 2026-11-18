<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
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
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'
import { Field, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'

const isMobile = useMediaQuery('(max-width: 47.99rem)')
</script>

<template>
  <Drawer v-if="isMobile">
    <DrawerTrigger :as="Button" variant="outline">
      Open
    </DrawerTrigger>
    <DrawerPopup show-bar>
      <DrawerHeader>
        <DrawerTitle>Edit profile</DrawerTitle>
        <DrawerDescription>
          Make changes to your profile here. Click save when you're done.
        </DrawerDescription>
      </DrawerHeader>
      <Form class="contents" @submit.prevent>
        <DrawerPanel class="grid gap-4">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input default-value="Margaret Welsh" type="text" />
          </Field>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input default-value="@maggie.welsh" type="text" />
          </Field>
          <div class="flex flex-col-reverse gap-2">
            <DrawerClose :as="Button" variant="ghost">
              Cancel
            </DrawerClose>
            <Button type="submit">
              Save
            </Button>
          </div>
        </DrawerPanel>
      </Form>
    </DrawerPopup>
  </Drawer>

  <Dialog v-else>
    <DialogTrigger :as="Button" variant="outline">
      Open
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
        <DialogFooter>
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
