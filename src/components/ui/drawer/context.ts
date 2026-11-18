import type { ComputedRef, InjectionKey, MaybeRefOrGetter } from 'vue'
import { computed, inject, toValue } from 'vue'

export type DrawerPosition = 'right' | 'left' | 'top' | 'bottom'

export const drawerPositionKey: InjectionKey<MaybeRefOrGetter<DrawerPosition>> = Symbol('DrawerPosition')

/** The `position` prop of a part, or else the position of the nearest `Drawer`. */
export function useDrawerPosition(positionProp: () => DrawerPosition | undefined): ComputedRef<DrawerPosition> {
  const contextPosition = inject(drawerPositionKey, 'bottom')
  return computed(() => positionProp() ?? toValue(contextPosition))
}
