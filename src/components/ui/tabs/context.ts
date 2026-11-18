import type { InjectionKey } from 'vue'
import type { TabsSize } from './variants'

export const TabsListContext: InjectionKey<{ readonly size: TabsSize }> = Symbol('TabsListContext')
