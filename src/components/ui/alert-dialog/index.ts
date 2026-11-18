import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'

export { default as AlertDialogBackdrop, default as AlertDialogOverlay } from './AlertDialogBackdrop.vue'
export { default as AlertDialogClose } from './AlertDialogClose.vue'
export { default as AlertDialogDescription } from './AlertDialogDescription.vue'
export { default as AlertDialogFooter } from './AlertDialogFooter.vue'
export { default as AlertDialogHeader } from './AlertDialogHeader.vue'
export { default as AlertDialogContent, default as AlertDialogPopup } from './AlertDialogPopup.vue'
export { default as AlertDialogTitle } from './AlertDialogTitle.vue'
export { default as AlertDialogTrigger } from './AlertDialogTrigger.vue'
export { default as AlertDialogViewport } from './AlertDialogViewport.vue'
export { AlertDialogRoot as AlertDialog, AlertDialogPortal } from '@vase-ui/vue/alert-dialog'

export const AlertDialogCreateHandle = AlertDialogPrimitive.createHandle

export { AlertDialogPrimitive }
