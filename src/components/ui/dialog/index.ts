import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'

export { default as DialogBackdrop, default as DialogOverlay } from './DialogBackdrop.vue'
export { default as DialogClose } from './DialogClose.vue'
export { default as DialogDescription } from './DialogDescription.vue'
export { default as DialogFooter } from './DialogFooter.vue'
export { default as DialogHeader } from './DialogHeader.vue'
export { default as DialogPanel } from './DialogPanel.vue'
export { default as DialogContent, default as DialogPopup } from './DialogPopup.vue'
export { default as DialogTitle } from './DialogTitle.vue'
export { default as DialogTrigger } from './DialogTrigger.vue'
export { default as DialogViewport } from './DialogViewport.vue'
export { DialogRoot as Dialog, DialogPortal } from '@vase-ui/vue/dialog'

export const DialogCreateHandle = DialogPrimitive.createHandle

export { DialogPrimitive }
