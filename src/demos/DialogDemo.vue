<script setup lang="ts">
import { shallowRef } from 'vue'
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

const open = shallowRef(false)
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger :as="Button" variant="outline">
      Open dialog
    </DialogTrigger>
    <DialogPopup>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you’re done.
        </DialogDescription>
      </DialogHeader>
      <DialogPanel>
        <p v-for="n in 12" :key="n" class="text-sm">
          Paragraph {{ n }} of a long scrollable panel.
        </p>
      </DialogPanel>
      <DialogFooter>
        <DialogClose :as="Button" variant="ghost">
          Cancel
        </DialogClose>
        <Button @click="open = false">
          Save
        </Button>
      </DialogFooter>
    </DialogPopup>
  </Dialog>
</template>
