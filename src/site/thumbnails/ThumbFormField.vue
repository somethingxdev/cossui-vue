<script setup lang="ts">
import ThumbCard from './ThumbCard.vue'
import ThumbCardPanel from './ThumbCardPanel.vue'
import ThumbText from './ThumbText.vue'

const props = withDefaults(defineProps<{
  labelWidth?: string
  showError?: boolean
}>(), {
  labelWidth: 'w-16',
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <ThumbText :class="props.labelWidth" />
    <ThumbCard class="[--radius-2xl:10px]" :with-gradient="false">
      <ThumbCardPanel class="py-3.5" />
    </ThumbCard>
    <ThumbText v-if="props.showError" class="w-[80%]" variant="secondary" />
  </div>
</template>
