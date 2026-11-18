<script setup lang="ts">
import { CheckIcon, CopyIcon } from '@lucide/vue'
import { useClipboard } from '@vueuse/core'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Spinner } from '../components/ui/spinner'
import { anchoredToastManager, AnchoredToastProvider, toastManager, ToastProvider } from '../components/ui/toast'

const TYPES = [
  {
    description: 'Your changes have been saved.',
    label: 'Success Toast',
    title: 'Success!',
    type: 'success',
  },
  {
    description: 'There was a problem with your request.',
    label: 'Error Toast',
    title: 'Uh oh! Something went wrong.',
    type: 'error',
  },
  {
    description: 'You can add components to your app using the cli.',
    label: 'Info Toast',
    title: 'Heads up!',
    type: 'info',
  },
  {
    description: 'Your session is about to expire.',
    label: 'Warning Toast',
    title: 'Warning!',
    type: 'warning',
  },
  {
    description: 'Please wait while we process your request.',
    label: 'Loading Toast',
    title: 'Loading…',
    type: 'loading',
  },
]

function showDefault(): void {
  toastManager.add({
    description: 'Monday, January 3rd at 6:00pm',
    title: 'Event has been created',
  })
}

function performAction(): void {
  const id = toastManager.add({
    actionProps: {
      children: 'Undo',
      onClick: () => {
        toastManager.close(id)
        toastManager.add({
          description: 'The action has been reverted.',
          title: 'Action undone',
          type: 'info',
        })
      },
    },
    description: 'You can undo this action.',
    timeout: 1000000,
    title: 'Action performed',
    type: 'success',
  })
}

async function runPromise(): Promise<void> {
  try {
    await toastManager.promise(
      new Promise<string>((resolve, reject) => {
        const shouldSucceed = Math.random() > 0.3
        setTimeout(() => {
          if (shouldSucceed)
            resolve('Data loaded successfully')
          else
            reject(new Error('Failed to load data'))
        }, 2000)
      }),
      {
        error: () => ({
          description: 'Please try again.',
          title: 'Something went wrong',
        }),
        loading: {
          description: 'The promise is loading.',
          title: 'Loading…',
        },
        success: (data: string) => ({
          description: `Success: ${data}`,
          title: 'This is a success toast!',
        }),
      },
    )
  }
  catch {
    // The promise toast already presents the failure.
  }
}

function upsert(type: 'success' | 'error'): void {
  toastManager.add({
    description: type === 'success'
      ? 'Repeated clicks update this toast instead of stacking another.'
      : 'Repeated clicks update this toast; errors use a shake animation.',
    id: `coss-demo-${type}-upsert`,
    title: type === 'success'
      ? 'Saved'
      : 'Something went wrong',
    type,
  })
}

const { copy, copied } = useClipboard({ copiedDuring: 2000, legacy: true })

async function copyLink(event: MouseEvent): Promise<void> {
  // currentTarget is null once the event has been dispatched.
  const anchor = event.currentTarget as Element
  await copy('https://coss.com')
  anchoredToastManager.add({
    data: { tooltipStyle: true },
    positionerProps: { anchor },
    timeout: 2000,
    title: 'Copied!',
  })
}

const submitting = shallowRef(false)

function submitForm(event: MouseEvent): void {
  const anchor = event.currentTarget as Element
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    anchoredToastManager.add({
      description: 'The server is not responding. Please try again later.',
      id: 'coss-demo-anchored-error',
      positionerProps: { anchor, sideOffset: 4 },
      title: 'Error submitting form',
      type: 'error',
    })
  }, 2000)
}
</script>

<template>
  <ToastProvider>
    <AnchoredToastProvider>
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-wrap gap-2">
          <Button variant="outline" @click="showDefault">
            Default Toast
          </Button>
          <Button
            v-for="item in TYPES"
            :key="item.type"
            variant="outline"
            @click="toastManager.add({ description: item.description, title: item.title, type: item.type })"
          >
            {{ item.label }}
          </Button>
        </div>

        <div class="flex flex-wrap gap-2">
          <Button variant="outline" @click="performAction">
            Perform Action
          </Button>
          <Button variant="outline" @click="runPromise">
            Run Promise
          </Button>
          <Button variant="outline" @click="upsert('success')">
            One Success Toast
          </Button>
          <Button variant="outline" @click="upsert('error')">
            One Error Toast
          </Button>
        </div>

        <div class="flex flex-wrap gap-2">
          <Button
            aria-label="Copy link"
            :disabled="copied"
            size="icon"
            variant="outline"
            @click="copyLink"
          >
            <CheckIcon v-if="copied" class="size-4" />
            <CopyIcon v-else class="size-4" />
          </Button>
          <Button :disabled="submitting" variant="outline" @click="submitForm">
            <template v-if="submitting">
              <Spinner />
              Submitting…
            </template>
            <template v-else>
              Submit
            </template>
          </Button>
        </div>
      </div>
    </AnchoredToastProvider>
  </ToastProvider>
</template>
