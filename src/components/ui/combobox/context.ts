import type { ComboboxController } from '@ui-sdk/vue/combobox'
import type { InjectionKey, Ref, ShallowRef } from 'vue'

export interface ComboboxContextValue {
  anchorRef: ShallowRef<HTMLElement | null>
  controller: ComboboxController<any, any>
  multiple: Readonly<Ref<boolean>>
}

export const ComboboxContext: InjectionKey<ComboboxContextValue> = Symbol('ComboboxContext')

/** Provided by the popup, so an input knows it sits inside it. */
export const ComboboxPopupContext: InjectionKey<boolean> = Symbol('ComboboxPopupContext')
