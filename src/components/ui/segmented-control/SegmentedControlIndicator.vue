<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef, useTemplateRef } from 'vue'
import { cn } from '../../../lib/utils'
import { segmentedControlIndicatorSurfaceClassName } from './variants'

interface ActiveItemRect {
  height: number
  left: number
  top: number
  width: number
}

const activeItemSelector = ':scope > [data-checked], :scope > [aria-current="page"], :scope > [data-pressed]'
const observedAttributes = ['data-checked', 'aria-current', 'data-pressed']
const MAX_LAYOUT_ROUNDING_ERROR = 2

// The computed size keeps the fractions that offsetWidth rounds away, unless a transform distorts it.
function getCssSize(element: HTMLElement) {
  const style = getComputedStyle(element)
  const width = Number.parseFloat(style.width) || 0
  const height = Number.parseFloat(style.height) || 0
  if (Math.round(width) !== element.offsetWidth || Math.round(height) !== element.offsetHeight)
    return { height: element.offsetHeight, width: element.offsetWidth }
  return { height, width }
}

function measureItem(item: HTMLElement, root: HTMLElement): ActiveItemRect {
  const { width, height } = getCssSize(item)
  const rootSize = getCssSize(root)
  const itemRect = item.getBoundingClientRect()
  const rootRect = root.getBoundingClientRect()
  const scaleX = rootSize.width > 0
    ? rootRect.width / rootSize.width
    : 1
  const scaleY = rootSize.height > 0
    ? rootRect.height / rootSize.height
    : 1

  const rectLeft = (itemRect.left - rootRect.left) / scaleX - root.clientLeft + root.scrollLeft
  const rectTop = (itemRect.top - rootRect.top) / scaleY - root.clientTop + root.scrollTop

  const isUndistorted
    = Math.abs(rectLeft - item.offsetLeft) <= MAX_LAYOUT_ROUNDING_ERROR
      && Math.abs(rectTop - item.offsetTop) <= MAX_LAYOUT_ROUNDING_ERROR

  return {
    height,
    left: isUndistorted ? rectLeft : item.offsetLeft,
    top: isUndistorted ? rectTop : item.offsetTop,
    width,
  }
}

const indicator = useTemplateRef<HTMLSpanElement>('indicator')
const rect = shallowRef<ActiveItemRect | null>(null)
let disconnect: (() => void) | undefined

onMounted(() => {
  const root = indicator.value?.parentElement
  if (!root)
    return

  const update = () => {
    const item = root.querySelector<HTMLElement>(activeItemSelector)
    rect.value = item
      ? measureItem(item, root)
      : null
  }

  const resizeObserver = new ResizeObserver(update)
  const mutationObserver = new MutationObserver((records) => {
    if (records.some(record => record.type === 'childList'))
      observeItems()
    update()
  })
  function observeItems() {
    resizeObserver.disconnect()
    resizeObserver.observe(root!)
    for (const child of root!.children) {
      resizeObserver.observe(child)
      mutationObserver.observe(child, { attributeFilter: observedAttributes, attributes: true })
    }
  }

  update()
  mutationObserver.observe(root, { childList: true })
  observeItems()

  disconnect = () => {
    resizeObserver.disconnect()
    mutationObserver.disconnect()
  }
})

onBeforeUnmount(() => disconnect?.())
</script>

<template>
  <span
    ref="indicator"
    aria-hidden="true"
    data-slot="segmented-control-indicator"
    :hidden="!rect"
    :class="cn(
      'pointer-events-none absolute top-0 left-0 -z-1 h-(--active-item-height) w-(--active-item-width) translate-x-(--active-item-left) translate-y-(--active-item-top) transition-[width,height,translate] duration-200 ease-in-out motion-reduce:transition-none',
      segmentedControlIndicatorSurfaceClassName,
    )"
    :style="{
      '--active-item-height': `${rect?.height ?? 0}px`,
      '--active-item-left': `${rect?.left ?? 0}px`,
      '--active-item-top': `${rect?.top ?? 0}px`,
      '--active-item-width': `${rect?.width ?? 0}px`,
    }"
  />
</template>
