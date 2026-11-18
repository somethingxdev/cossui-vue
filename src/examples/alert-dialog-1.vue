<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog'
import { Button } from '../components/ui/button'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger :as="Button" variant="destructive-outline">
      Delete Account
    </AlertDialogTrigger>
    <AlertDialogPopup>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogClose :as="Button" variant="ghost">
          Cancel
        </AlertDialogClose>
        <AlertDialogClose :as="Button" variant="destructive">
          Delete Account
        </AlertDialogClose>
      </AlertDialogFooter>
    </AlertDialogPopup>
  </AlertDialog>
</template>
