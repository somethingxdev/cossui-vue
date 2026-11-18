import type { ComputedRef, InjectionKey } from 'vue'

export const NumberFieldContext: InjectionKey<{ fieldId: ComputedRef<string> }> = Symbol('NumberFieldContext')
