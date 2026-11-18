import type { InjectionKey } from 'vue'
import type { ToggleVariants } from '../toggle'

export const ToggleGroupContext: InjectionKey<Readonly<ToggleVariants>> = Symbol('ToggleGroupContext')
