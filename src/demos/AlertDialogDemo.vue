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

const footerVariants = ['default', 'bare'] as const
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <AlertDialog v-for="variant in footerVariants" :key="variant">
      <AlertDialogTrigger :as="Button" variant="destructive-outline">
        Delete Account{{ variant === 'bare' ? ' (bare footer)' : '' }}
      </AlertDialogTrigger>
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter :variant="variant">
          <AlertDialogClose :as="Button" variant="ghost">
            Cancel
          </AlertDialogClose>
          <AlertDialogClose :as="Button" variant="destructive">
            Delete Account
          </AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  </div>
</template>
