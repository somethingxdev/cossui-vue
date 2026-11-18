import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'

export { default as DropdownMenuCheckboxItem, default as MenuCheckboxItem } from './MenuCheckboxItem.vue'
export { default as DropdownMenuGroup, default as MenuGroup } from './MenuGroup.vue'
export { default as DropdownMenuLabel, default as MenuGroupLabel } from './MenuGroupLabel.vue'
export { default as DropdownMenuItem, default as MenuItem } from './MenuItem.vue'
export { default as MenuLinkItem } from './MenuLinkItem.vue'
export { default as DropdownMenuContent, default as MenuPopup } from './MenuPopup.vue'
export { default as DropdownMenuRadioGroup, default as MenuRadioGroup } from './MenuRadioGroup.vue'
export { default as DropdownMenuRadioItem, default as MenuRadioItem } from './MenuRadioItem.vue'
export { default as DropdownMenuSeparator, default as MenuSeparator } from './MenuSeparator.vue'
export { default as DropdownMenuShortcut, default as MenuShortcut } from './MenuShortcut.vue'
export { default as DropdownMenuSubContent, default as MenuSubPopup } from './MenuSubPopup.vue'
export { default as DropdownMenuSubTrigger, default as MenuSubTrigger } from './MenuSubTrigger.vue'
export { default as DropdownMenuTrigger, default as MenuTrigger } from './MenuTrigger.vue'
// SubmenuRoot renders no element, so it is re-exported and the data-slot of coss ui is dropped.
export {
  MenuRoot as DropdownMenu,
  MenuPortal as DropdownMenuPortal,
  MenuSubmenuRoot as DropdownMenuSub,
  MenuRoot as Menu,
  MenuPortal,
  MenuSubmenuRoot as MenuSub,
} from '@vase-ui/vue/menu'

export const MenuCreateHandle = MenuPrimitive.createHandle
export const DropdownMenuCreateHandle = MenuPrimitive.createHandle

export { MenuPrimitive }
