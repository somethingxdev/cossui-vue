<script setup lang="ts">
import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from '@lucide/vue'
import { useEventListener } from '@vueuse/core'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
} from '../components/ui/command'
import { Kbd, KbdGroup } from '../components/ui/kbd'

interface Item {
  value: string
  label: string
  shortcut?: string
}

interface Group {
  value: string
  items: Item[]
}

const suggestions: Item[] = [
  { label: 'Linear', shortcut: '⌘L', value: 'linear' },
  { label: 'Figma', shortcut: '⌘F', value: 'figma' },
  { label: 'Slack', shortcut: '⌘S', value: 'slack' },
  { label: 'YouTube', shortcut: '⌘Y', value: 'youtube' },
  { label: 'Raycast', shortcut: '⌘R', value: 'raycast' },
]

const commands: Item[] = [
  { label: 'Clipboard History', shortcut: '⌘⇧C', value: 'clipboard-history' },
  { label: 'Import Extension', shortcut: '⌘I', value: 'import-extension' },
  { label: 'Create Snippet', shortcut: '⌘N', value: 'create-snippet' },
  { label: 'System Preferences', shortcut: '⌘,', value: 'system-preferences' },
  { label: 'Window Management', shortcut: '⌘⇧W', value: 'window-management' },
]

const groupedItems: Group[] = [
  { items: suggestions, value: 'Suggestions' },
  { items: commands, value: 'Commands' },
]

const open = shallowRef(false)

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'j' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    open.value = !open.value
  }
})
</script>

<template>
  <CommandDialog v-model:open="open">
    <CommandDialogTrigger :as="Button" variant="outline">
      Open Command Palette
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>J</Kbd>
      </KbdGroup>
    </CommandDialogTrigger>
    <CommandDialogPopup aria-label="Command palette">
      <Command @action="open = false">
        <CommandInput aria-label="Search for apps and commands" placeholder="Search for apps and commands..." />
        <CommandPanel>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandList>
            <template v-for="group in groupedItems" :key="group.value">
              <CommandGroup>
                <CommandGroupLabel>{{ group.value }}</CommandGroupLabel>
                <CommandItem v-for="item in group.items" :key="item.value" :value="item.value">
                  <span class="flex-1">{{ item.label }}</span>
                  <CommandShortcut v-if="item.shortcut">
                    {{ item.shortcut }}
                  </CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </template>
          </CommandList>
        </CommandPanel>
        <CommandFooter>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <KbdGroup>
                <Kbd>
                  <ArrowUpIcon />
                </Kbd>
                <Kbd>
                  <ArrowDownIcon />
                </Kbd>
              </KbdGroup>
              <span>Navigate</span>
            </div>
            <div class="flex items-center gap-2">
              <Kbd>
                <CornerDownLeftIcon />
              </Kbd>
              <span>Open</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Kbd>Esc</Kbd>
            <span>Close</span>
          </div>
        </CommandFooter>
      </Command>
    </CommandDialogPopup>
  </CommandDialog>
</template>
