import type { InjectionKey } from 'vue'

export const OTPFieldContext: InjectionKey<Readonly<{ mask?: boolean }>> = Symbol('OTPFieldContext')
