<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from '../components/ui/alert-dialog'
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
import { Field } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Textarea } from '../components/ui/textarea'

const dialogOpen = shallowRef(false)
const confirmOpen = shallowRef(false)
const value = shallowRef('')

function onOpenChange(open: boolean): void {
  if (!open && value.value)
    confirmOpen.value = true
  else
    dialogOpen.value = open
}

function close(): void {
  value.value = ''
  dialogOpen.value = false
}

function discard(): void {
  confirmOpen.value = false
  close()
}
</script>

<template>
  <Dialog :open="dialogOpen" @update:open="onOpenChange">
    <DialogTrigger :as="Button" variant="outline">
      Compose
    </DialogTrigger>
    <DialogPopup :show-close-button="false">
      <DialogHeader>
        <DialogTitle>New message</DialogTitle>
        <DialogDescription>Type something and try closing.</DialogDescription>
      </DialogHeader>
      <Form class="contents" @submit.prevent="dialogOpen = false">
        <DialogPanel>
          <Field>
            <Textarea v-model:value="value" aria-label="Message" />
          </Field>
        </DialogPanel>
        <DialogFooter>
          <DialogClose :as="Button" variant="ghost">
            Cancel
          </DialogClose>
          <Button @click="close">
            Send
          </Button>
        </DialogFooter>
      </Form>
    </DialogPopup>

    <!-- Confirmation dialog -->
    <AlertDialog v-model:open="confirmOpen">
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>Discard changes?</AlertDialogTitle>
          <AlertDialogDescription>
            Your message will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose :as="Button" variant="ghost">
            Go back
          </AlertDialogClose>
          <Button @click="discard">
            Discard
          </Button>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  </Dialog>
</template>
