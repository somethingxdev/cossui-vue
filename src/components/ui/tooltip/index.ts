import { Tooltip as TooltipPrimitive } from '@vase-ui/vue/tooltip'

export { default as TooltipContent, default as TooltipPopup } from './TooltipPopup.vue'
export { default as TooltipTrigger } from './TooltipTrigger.vue'
export { TooltipRoot as Tooltip, TooltipProvider } from '@vase-ui/vue/tooltip'

export const TooltipCreateHandle = TooltipPrimitive.createHandle

export { TooltipPrimitive }
