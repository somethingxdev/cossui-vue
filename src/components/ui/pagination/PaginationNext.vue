<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PaginationLinkProps } from './PaginationLink.vue'
import { ChevronRightIcon } from '@lucide/vue'
import { cn } from '../../../lib/utils'
import PaginationLink from './PaginationLink.vue'

interface Props extends /* @vue-ignore */ PaginationLinkProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    :class="cn('max-sm:aspect-square max-sm:p-0', props.class)"
  >
    <span class="max-sm:hidden">Next</span>
    <ChevronRightIcon class="sm:-me-1" />
  </PaginationLink>
</template>
