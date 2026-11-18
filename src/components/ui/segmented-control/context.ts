import type { InjectionKey } from 'vue'
import type { SegmentedControlSize } from './variants'

export const SegmentedControlContext: InjectionKey<{ readonly size: SegmentedControlSize }> = Symbol('SegmentedControlContext')
