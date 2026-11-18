import type { InjectionKey, Ref, ShallowRef } from 'vue'

export interface ComboboxContextValue {
  chipsRef: ShallowRef<Element | null>
  multiple: Readonly<Ref<boolean>>
}

export const ComboboxContext: InjectionKey<ComboboxContextValue> = Symbol('ComboboxContext')
