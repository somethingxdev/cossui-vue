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
import { Input } from '../components/ui/input'
</script>

<template>
  <Dialog>
    <DialogTrigger :as="Button" variant="outline">
      Open parent
    </DialogTrigger>
    <DialogPopup :show-close-button="false">
      <DialogHeader>
        <DialogTitle>Manage team member</DialogTitle>
        <DialogDescription>
          View and manage a user in your team.
        </DialogDescription>
      </DialogHeader>
      <DialogPanel class="grid gap-4">
        <div class="grid gap-1">
          <p class="text-muted-foreground text-sm">
            Name
          </p>
          <p class="font-medium text-sm">
            Bora Baloglu
          </p>
        </div>
        <div class="grid gap-1">
          <p class="text-muted-foreground text-sm">
            Email
          </p>
          <p class="font-medium text-sm">
            bora@example.com
          </p>
        </div>
      </DialogPanel>
      <DialogFooter>
        <Dialog>
          <DialogTrigger :as="Button" variant="outline">
            Edit details
          </DialogTrigger>
          <DialogPopup :show-close-button="false">
            <DialogHeader>
              <DialogTitle>Edit details</DialogTitle>
              <DialogDescription>
                Make changes to the member's information.
              </DialogDescription>
            </DialogHeader>
            <DialogPanel class="grid gap-4">
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input default-value="Bora Baloglu" type="text" />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input default-value="bora@example.com" type="text" />
              </Field>
            </DialogPanel>
            <DialogFooter>
              <DialogClose :as="Button" variant="ghost">
                Cancel
              </DialogClose>
              <Button type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </DialogFooter>
    </DialogPopup>
  </Dialog>
</template>
