<script setup lang="ts">
import { AlertCircleIcon, CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisIcon, InfoIcon, MinusIcon, PlusIcon, TextCursorIcon, UserRoundIcon, XIcon } from '@lucide/vue'
import { cn } from '../../lib/utils'
import ThumbButton from './ThumbButton.vue'
import ThumbCard from './ThumbCard.vue'
import ThumbCardPanel from './ThumbCardPanel.vue'
import ThumbCheckboxItem from './ThumbCheckboxItem.vue'
import ThumbFormField from './ThumbFormField.vue'
import ThumbSegmentedControl from './ThumbSegmentedControl.vue'
import ThumbText from './ThumbText.vue'

const props = defineProps<{
  slug: string
}>()
</script>

<template>
  <template v-if="props.slug === 'accordion'">
    <ThumbCard class="max-w-50">
      <ThumbCardPanel class="divide-y divide-border p-0">
        <div class="p-3">
          <div class="flex items-center gap-2">
            <ChevronDownIcon class="size-4 text-muted-foreground/88" />
            <ThumbText class="w-[60%]" />
          </div>
        </div>
        <div class="p-3">
          <div class="flex items-center gap-2">
            <ChevronDownIcon :class="cn('size-4 text-muted-foreground/88', 'rotate-180')" />
            <div class="flex flex-1 flex-col gap-2">
              <ThumbText class="w-[50%]" variant="main" />
              <ThumbText class="w-[90%]" variant="secondary" />
            </div>
          </div>
        </div>
        <div class="p-3">
          <div class="flex items-center gap-2">
            <ChevronDownIcon class="size-4 text-muted-foreground/88" />
            <ThumbText class="w-[60%]" />
          </div>
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'alert-dialog'">
    <ThumbCard class="max-w-50">
      <ThumbCardPanel class="flex flex-col gap-5 p-4">
        <div class="flex flex-col gap-2">
          <ThumbText class="w-[50%]" variant="main" />
          <ThumbText class="w-[90%]" variant="secondary" />
        </div>
        <div class="flex items-center justify-end gap-2">
          <ThumbButton variant="secondary" />
          <ThumbButton variant="primary" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'autocomplete'">
    <div class="flex max-w-50 flex-1 flex-col gap-2">
      <ThumbCard class="[--radius-2xl:12px]" :with-gradient="false">
        <ThumbCardPanel class="flex items-center gap-2 px-4 py-2">
          <ThumbText class="w-[40%]" />
          <TextCursorIcon class="size-4 text-muted-foreground/88" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="[--radius-2xl:10px]">
        <ThumbCardPanel class="flex flex-col gap-4 p-4">
          <ThumbText variant="secondary" />
          <ThumbText variant="secondary" />
          <ThumbText variant="secondary" />
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'avatar'">
    <ThumbCard class="size-12 [--radius-2xl:9999px]">
      <ThumbCardPanel class="flex items-center justify-center p-0">
        <div class="flex size-full items-center justify-center rounded-full">
          <UserRoundIcon class="size-4 text-muted-foreground/88" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'button'">
    <ThumbCard
      class="max-w-24 border-none bg-linear-to-b from-(--btn-from) to-(--btn-to) [--radius-2xl:14px]"
      :with-gradient="false"
    >
      <ThumbCardPanel class="px-6 py-4">
        <ThumbText class="bg-primary-foreground/40" />
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'calendar'">
    <ThumbCard class="max-w-36 [--radius-2xl:14px]">
      <ThumbCardPanel class="flex flex-col gap-4 p-4">
        <div class="flex items-center gap-2">
          <ChevronLeftIcon class="size-4 text-muted-foreground/88" />
          <ThumbText class="w-[60%]" variant="secondary" />
          <ChevronRightIcon class="size-4 text-muted-foreground/88" />
        </div>
        <div class="flex items-center gap-2">
          <ThumbText class="flex-1" variant="secondary" />
          <ThumbText class="flex-1" variant="secondary" />
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1 bg-transparent" variant="main" />
          <ThumbText class="flex-1" variant="main" />
        </div>
        <div class="flex items-center gap-2">
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1 bg-transparent" variant="main" />
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1" variant="main" />
        </div>
        <div class="flex items-center gap-2">
          <ThumbText class="flex-1 bg-transparent" variant="main" />
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1 bg-primary" variant="main" />
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1 bg-transparent" variant="main" />
        </div>
        <div class="flex items-center gap-2">
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1" variant="main" />
          <ThumbText class="flex-1 bg-transparent" variant="main" />
          <ThumbText class="flex-1" variant="secondary" />
          <ThumbText class="flex-1" variant="secondary" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'card'">
    <ThumbCard class="max-w-36 [--radius-2xl:14px]">
      <ThumbCardPanel class="flex flex-col gap-4 p-4">
        <div class="flex flex-col gap-2">
          <ThumbText class="w-[60%]" variant="main" />
          <ThumbText class="w-[90%]" variant="secondary" />
        </div>
        <div class="flex flex-col gap-2">
          <div class="h-4 rounded-sm bg-muted-foreground/8" />
          <div class="h-4 rounded-sm bg-muted-foreground/8" />
          <ThumbButton class="w-full rounded-sm" variant="primary" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'checkbox'">
    <div class="flex max-w-28 flex-1 flex-col gap-3">
      <ThumbCheckboxItem />
      <ThumbCheckboxItem checked />
    </div>
  </template>
  <template v-else-if="props.slug === 'checkbox-group'">
    <div class="flex max-w-28 flex-1 flex-col gap-3">
      <ThumbCheckboxItem checked />
      <ThumbCheckboxItem class="ps-4" />
      <ThumbCheckboxItem checked class="ps-4" />
      <ThumbCheckboxItem />
    </div>
  </template>
  <template v-else-if="props.slug === 'collapsible'">
    <ThumbCard>
      <ThumbCardPanel class="divide-y divide-border p-0">
        <div class="flex items-center justify-between px-4 py-3">
          <ThumbText class="w-[60%]" />
          <ChevronDownIcon class="size-4 text-muted-foreground/88" />
        </div>
        <div class="flex flex-col gap-2 p-4">
          <ThumbText class="w-[80%]" variant="secondary" />
          <ThumbText class="w-[70%]" variant="secondary" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'combobox'">
    <ThumbCard class="[--radius-2xl:14px]" :with-gradient="false">
      <ThumbCardPanel class="flex items-center gap-2 px-3 py-[calc(--spacing(2.5)-1px)]">
        <div class="flex h-5 items-center gap-1 rounded-sm bg-muted-foreground/8 py-0.5 ps-2 pe-1">
          <ThumbText class="w-6" />
          <XIcon class="size-4 text-muted-foreground/88" />
        </div>
        <div class="flex h-5 items-center gap-1 rounded-sm bg-muted-foreground/8 py-0.5 ps-2 pe-1">
          <ThumbText class="w-6" />
          <XIcon class="size-4 text-muted-foreground/88" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'context-menu'">
    <div class="flex max-w-50 flex-1 flex-col">
      <ThumbCard class="border-input border-dashed bg-none shadow-none [--radius-2xl:10px] before:hidden">
        <ThumbCardPanel class="min-h-20" />
      </ThumbCard>
      <ThumbCard class="ms-auto -mt-3 w-fit [--radius-2xl:10px]">
        <ThumbCardPanel class="flex flex-col gap-3 p-3">
          <ThumbText class="w-16" variant="secondary" />
          <ThumbText class="w-16" variant="secondary" />
          <ThumbText class="w-16" variant="secondary" />
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'date-picker'">
    <ThumbCard class="[--radius-2xl:14px]" :with-gradient="false">
      <ThumbCardPanel class="flex items-center gap-2 p-3">
        <CalendarIcon class="size-4 text-muted-foreground/88" />
        <ThumbText class="w-[60%]" />
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'dialog'">
    <ThumbCard class="max-w-36 [--radius-2xl:14px]">
      <ThumbCardPanel class="flex flex-col gap-4 p-4">
        <div class="flex flex-col gap-2">
          <ThumbText class="w-[60%]" variant="main" />
        </div>
        <div class="flex flex-col gap-2">
          <div class="h-4 rounded-sm bg-muted-foreground/8" />
          <div class="h-4 rounded-sm bg-muted-foreground/8" />
        </div>
        <div class="flex items-center justify-end gap-2">
          <ThumbButton variant="secondary" />
          <ThumbButton variant="primary" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'drawer'">
    <div class="flex h-full w-full flex-1 flex-col justify-end gap-2">
      <div class="flex-1 rounded-xl border border-input border-dashed" />
      <ThumbCard class="max-w-none shrink-0 [--radius-2xl:14px]">
        <ThumbCardPanel class="pt-1 pb-12">
          <div class="flex justify-center py-2">
            <div class="h-1 w-12 rounded-full bg-muted-foreground/30" />
          </div>
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'field'">
    <div class="flex max-w-50 flex-1 flex-col gap-3">
      <ThumbFormField show-error />
    </div>
  </template>
  <template v-else-if="props.slug === 'fieldset'">
    <div class="flex max-w-50 flex-1 flex-col gap-4">
      <ThumbFormField />
      <ThumbFormField />
    </div>
  </template>
  <template v-else-if="props.slug === 'form'">
    <div class="flex max-w-50 flex-1 flex-col gap-4">
      <ThumbFormField />
      <ThumbCard
        class="border-none bg-linear-to-b from-(--btn-from) to-(--btn-to) [--radius-2xl:10px]"
        :with-gradient="false"
      >
        <ThumbCardPanel class="py-3.5" />
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'input'">
    <ThumbCard class="[--radius-2xl:14px]" :with-gradient="false">
      <ThumbCardPanel class="px-6 py-4">
        <ThumbText class="w-[60%]" />
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'label'">
    <div class="flex max-w-50 flex-1 flex-col gap-3">
      <ThumbText class="w-16 bg-primary" />
      <ThumbCard class="[--radius-2xl:10px]" :with-gradient="false">
        <ThumbCardPanel class="py-3.5" />
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'menu'">
    <div class="flex max-w-50 flex-1 flex-col items-end gap-2">
      <ThumbCard class="w-fit [--radius-2xl:12px]">
        <ThumbCardPanel class="flex items-center gap-2 p-2">
          <EllipsisIcon class="size-4 text-muted-foreground/88" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="[--radius-2xl:10px]">
        <ThumbCardPanel class="flex flex-col gap-4 p-4">
          <div class="me-6">
            <ThumbText class="w-full" variant="secondary" />
          </div>
          <div class="flex items-center gap-4">
            <div class="flex-1">
              <ThumbText variant="secondary" />
            </div>
            <ChevronRightIcon :class="cn('size-4 text-muted-foreground/88', '-m-1')" />
          </div>
          <div class="me-6">
            <ThumbText class="w-full" variant="secondary" />
          </div>
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'meter'">
    <div class="flex max-w-50 flex-1 flex-col gap-2">
      <div class="flex items-center justify-between">
        <ThumbText class="w-[50%]" />
        <ThumbText class="w-8" />
      </div>
      <div class="h-2 w-full rounded-full bg-muted-foreground/20">
        <div class="h-2 w-[65%] rounded-s-full bg-linear-to-b from-(--btn-from) to-(--btn-to)" />
      </div>
    </div>
  </template>
  <template v-else-if="props.slug === 'number-field'">
    <ThumbCard class="[--radius-2xl:14px]">
      <ThumbCardPanel class="flex items-center gap-2 px-4 py-2.5">
        <MinusIcon :class="cn('size-4 text-muted-foreground/88', 'shrink-0')" />
        <div class="flex flex-1 justify-center">
          <ThumbText class="w-12" />
        </div>
        <PlusIcon :class="cn('size-4 text-muted-foreground/88', 'shrink-0')" />
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'otp-field'">
    <div class="flex max-w-50 flex-1 items-center gap-2">
      <ThumbCard class="size-10 [--radius-2xl:12px]" :with-gradient="false">
        <ThumbCardPanel class="flex items-center justify-center p-0">
          <ThumbText class="size-1.5" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="size-10 [--radius-2xl:12px]" :with-gradient="false">
        <ThumbCardPanel class="flex items-center justify-center p-0">
          <ThumbText class="size-1.5" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="size-10 [--radius-2xl:12px]" :with-gradient="false">
        <ThumbCardPanel class="flex items-center justify-center p-0">
          <ThumbText class="size-1.5" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="size-10 [--radius-2xl:12px]" :with-gradient="false">
        <ThumbCardPanel class="flex items-center justify-center p-0">
          <TextCursorIcon class="size-4 text-muted-foreground/88" />
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'popover'">
    <div class="flex max-w-50 flex-1 flex-col items-center gap-2">
      <ThumbCard class="w-fit [--radius-2xl:12px]">
        <ThumbCardPanel class="flex items-center gap-2 px-4 py-3">
          <ThumbText class="w-12" variant="main" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="[--radius-2xl:10px]">
        <ThumbCardPanel class="flex flex-col gap-3 p-4">
          <ThumbText class="w-[70%]" variant="main" />
          <div class="flex flex-col gap-1.5">
            <ThumbText class="w-[80%]" variant="secondary" />
            <ThumbText class="w-[60%]" variant="secondary" />
          </div>
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'preview-card'">
    <ThumbCard class="max-w-50">
      <ThumbCardPanel class="flex items-center gap-3 p-4">
        <div class="size-9 shrink-0 rounded-full bg-muted-foreground/20" />
        <div class="flex flex-1 flex-col gap-2">
          <ThumbText class="w-[70%]" variant="main" />
          <ThumbText variant="secondary" />
          <ThumbText class="w-[90%]" variant="secondary" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'progress'">
    <div class="flex max-w-50 flex-1 flex-col gap-2">
      <div class="h-2 w-full rounded-full bg-muted-foreground/20">
        <div class="h-2 w-[45%] rounded-s-full bg-linear-to-b from-(--btn-from) to-(--btn-to)" />
      </div>
    </div>
  </template>
  <template v-else-if="props.slug === 'radio-group'">
    <div class="flex max-w-28 flex-1 flex-col gap-3">
      <ThumbCheckboxItem radio />
      <ThumbCheckboxItem radio checked />
    </div>
  </template>
  <template v-else-if="props.slug === 'scroll-area'">
    <ThumbCard class="max-w-36 [--radius-2xl:14px]">
      <ThumbCardPanel class="relative p-0">
        <div class="flex flex-col gap-2 p-3">
          <ThumbText class="w-[80%]" variant="secondary" />
          <ThumbText class="w-[90%]" variant="secondary" />
          <ThumbText class="w-[70%]" variant="secondary" />
          <ThumbText class="w-[85%]" variant="secondary" />
          <ThumbText class="w-[90%]" variant="secondary" />
          <ThumbText class="w-[80%]" variant="secondary" />
        </div>
        <div class="absolute top-2 right-1 h-8 w-1 rounded-full bg-muted-foreground/40" />
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'select'">
    <ThumbCard class="[--radius-2xl:14px]" :with-gradient="false">
      <ThumbCardPanel class="flex gap-2 p-0">
        <div class="flex flex-1 items-center justify-between gap-2 py-2.5 ps-4 pe-2.5">
          <ThumbText class="w-[60%]" />
          <ChevronDownIcon class="size-4 text-muted-foreground/88" />
        </div>
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'separator'">
    <div class="max-w-50 flex-1 divide-y">
      <div class="flex flex-col gap-2 py-3">
        <ThumbText class="w-[60%]" />
        <ThumbText variant="secondary" />
      </div>
      <div class="flex items-center gap-2 divide-x py-3">
        <div class="-mx-2 flex-1 px-2 py-1">
          <ThumbText variant="secondary" />
        </div>
        <div class="flex-1 px-2 py-1">
          <ThumbText variant="secondary" />
        </div>
        <div class="-mx-2 flex-1 px-2 py-1">
          <ThumbText variant="secondary" />
        </div>
        <div class="flex-1 px-2 py-1">
          <ThumbText variant="secondary" />
        </div>
      </div>
    </div>
  </template>
  <template v-else-if="props.slug === 'sheet'">
    <div class="flex h-full flex-1 gap-2">
      <div class="flex-1 rounded-xl border border-input border-dashed" />
      <ThumbCard class="h-full max-w-1/3 [--radius-2xl:14px]">
        <ThumbCardPanel class="flex flex-col gap-4 p-3">
          <div class="flex flex-1 flex-col gap-2">
            <ThumbText class="w-[60%]" variant="main" />
            <ThumbText variant="secondary" />
          </div>
          <div class="flex items-center justify-end gap-2">
            <ThumbButton variant="primary" />
          </div>
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'slider'">
    <div class="flex w-full max-w-50 items-center gap-1">
      <ThumbText
        class="w-[35%] bg-linear-to-b from-(--btn-from) to-(--btn-to)"
        variant="secondary"
      />
      <div class="size-4 rounded-full bg-linear-to-b from-(--btn-from) to-(--btn-to)" />
      <ThumbText class="flex-1" variant="secondary" />
    </div>
  </template>
  <template v-else-if="props.slug === 'spinner'">
    <div class="size-8 rotate-45 rounded-full border-3 border-muted-foreground/20 border-t-primary" />
  </template>
  <template v-else-if="props.slug === 'switch'">
    <div class="h-6 w-10 rounded-full bg-muted-foreground/20 p-0.5">
      <div class="size-5 rounded-full bg-linear-to-b from-card to-card/90 shadow-xs/5 dark:from-background/90 dark:to-background" />
    </div>
  </template>
  <template v-else-if="props.slug === 'tabs'">
    <div class="flex max-w-50 flex-col gap-4">
      <ThumbSegmentedControl />
      <div class="flex flex-col gap-2">
        <ThumbText class="w-[70%]" />
        <ThumbText variant="secondary" />
      </div>
    </div>
  </template>
  <template v-else-if="props.slug === 'textarea'">
    <ThumbCard class="[--radius-2xl:14px]" :with-gradient="false">
      <ThumbCardPanel class="flex flex-col gap-2 px-6 py-4">
        <ThumbText class="w-[60%]" />
        <ThumbText class="opacity-0" />
        <ThumbText class="opacity-0" />
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'toast'">
    <div class="relative flex flex-1 justify-center">
      <ThumbCard class="absolute -top-6 scale-80">
        <ThumbCardPanel class="flex items-center gap-2 p-3" />
      </ThumbCard>
      <ThumbCard class="absolute -top-3 scale-90">
        <ThumbCardPanel class="flex items-center gap-2 p-3" />
      </ThumbCard>
      <ThumbCard>
        <ThumbCardPanel class="flex items-start gap-2 p-3">
          <AlertCircleIcon class="size-4 text-muted-foreground/88" />
          <div class="flex flex-1 flex-col gap-2">
            <ThumbText class="w-[40%]" />
            <ThumbText class="w-[70%]" variant="secondary" />
          </div>
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'toggle'">
    <div class="flex flex-1 flex-col items-center justify-center gap-2">
      <ThumbCard class="max-w-12 [--radius-2xl:14px]">
        <ThumbCardPanel class="rounded-[inherit] p-4">
          <ThumbText />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="max-w-12 shadow-none [--radius-2xl:14px] before:hidden">
        <ThumbCardPanel class="rounded-[inherit] bg-muted-foreground/8 p-4">
          <ThumbText class="bg-primary" />
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'toggle-group'">
    <ThumbCard class="w-auto flex-row divide-x [--radius-2xl:14px]">
      <ThumbCardPanel class="bg-clip-padding p-4">
        <ThumbText class="w-4" />
      </ThumbCardPanel>
      <ThumbCardPanel class="bg-muted-foreground/8 bg-clip-padding p-4">
        <ThumbText class="w-4 bg-foreground" />
      </ThumbCardPanel>
      <ThumbCardPanel class="bg-clip-padding p-4">
        <ThumbText class="w-4" />
      </ThumbCardPanel>
    </ThumbCard>
  </template>
  <template v-else-if="props.slug === 'toolbar'">
    <div class="flex items-center gap-1 rounded-xl border p-1">
      <ThumbCard class="w-fit [--radius-2xl:12px]">
        <ThumbCardPanel class="p-3.5">
          <ThumbText class="w-4" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="w-fit [--radius-2xl:12px]">
        <ThumbCardPanel class="p-3.5">
          <ThumbText class="w-4" />
        </ThumbCardPanel>
      </ThumbCard>
      <ThumbCard class="w-fit [--radius-2xl:12px]">
        <ThumbCardPanel class="p-3.5">
          <ThumbText class="w-4" />
        </ThumbCardPanel>
      </ThumbCard>
    </div>
  </template>
  <template v-else-if="props.slug === 'tooltip'">
    <div class="flex max-w-32 flex-1 flex-col items-center gap-2">
      <ThumbCard class="[--radius-2xl:10px]">
        <ThumbCardPanel class="p-4">
          <ThumbText />
        </ThumbCardPanel>
      </ThumbCard>
      <InfoIcon class="size-4 text-muted-foreground/88" />
    </div>
  </template>
</template>
