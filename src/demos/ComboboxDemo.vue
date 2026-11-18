<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
} from '../components/ui/combobox'
import { SelectButton } from '../components/ui/select'

interface Fruit {
  label: string
  value: string
}

const fruits: Fruit[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Mango', value: 'mango' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
]

const selectedFruits = [fruits[0]!, fruits[4]!]

interface Tag {
  id: string
  label: string
}

const groupedTags: { value: string, items: Tag[] }[] = [
  {
    value: 'Status',
    items: [
      { id: 's-open', label: 'Open' },
      { id: 's-in-progress', label: 'In progress' },
      { id: 's-blocked', label: 'Blocked' },
      { id: 's-resolved', label: 'Resolved' },
    ],
  },
  {
    value: 'Priority',
    items: [
      { id: 'p-low', label: 'Low' },
      { id: 'p-medium', label: 'Medium' },
      { id: 'p-high', label: 'High' },
      { id: 'p-urgent', label: 'Urgent' },
    ],
  },
  {
    value: 'Team',
    items: [
      { id: 't-design', label: 'Design' },
      { id: 't-frontend', label: 'Frontend' },
      { id: 't-backend', label: 'Backend' },
      { id: 't-devops', label: 'DevOps' },
      { id: 't-qa', label: 'QA' },
    ],
  },
]
</script>

<template>
  <div class="grid max-w-xs gap-4">
    <Combobox :items="fruits">
      <ComboboxInput aria-label="Select a item" placeholder="Select a item…" />
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          <template #item="{ item }">
            <ComboboxItem :key="item.value" :value="item">
              {{ item.label }}
            </ComboboxItem>
          </template>
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>

    <Combobox :items="fruits">
      <ComboboxInput aria-label="Select a item" placeholder="With clear button…" show-clear />
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          <template #item="{ item }">
            <ComboboxItem :key="item.value" :value="item">
              {{ item.label }}
            </ComboboxItem>
          </template>
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>

    <Combobox :items="fruits">
      <ComboboxInput aria-label="Search items" placeholder="Search items…" size="sm">
        <template #start-addon>
          <SearchIcon />
        </template>
      </ComboboxInput>
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          <template #item="{ item }">
            <ComboboxItem :key="item.value" :value="item">
              {{ item.label }}
            </ComboboxItem>
          </template>
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>

    <Combobox :items="groupedTags">
      <ComboboxInput aria-label="Search tags" placeholder="e.g. feature" />
      <ComboboxPopup>
        <ComboboxEmpty>No tags found.</ComboboxEmpty>
        <ComboboxList>
          <template #item="{ item: group }">
            <ComboboxGroup :items="group.items">
              <ComboboxGroupLabel>{{ group.value }}</ComboboxGroupLabel>
              <ComboboxCollection v-slot="{ item: tag }">
                <ComboboxItem :key="tag.id" :value="tag">
                  {{ tag.label }}
                </ComboboxItem>
              </ComboboxCollection>
            </ComboboxGroup>
            <ComboboxSeparator v-if="group.value !== 'Team'" />
          </template>
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>

    <Combobox :default-value="selectedFruits" :items="fruits" multiple>
      <ComboboxChips>
        <template #start-addon>
          <SearchIcon />
        </template>
        <ComboboxValue v-slot="{ value }">
          <ComboboxChip v-for="item in value" :key="item.value" :aria-label="item.label">
            {{ item.label }}
          </ComboboxChip>
          <ComboboxChipsInput
            aria-label="Select a item"
            :placeholder="value.length > 0 ? undefined : 'Select a item…'"
          />
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          <template #item="{ item }">
            <ComboboxItem :key="item.value" :value="item">
              {{ item.label }}
            </ComboboxItem>
          </template>
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>

    <Combobox :items="fruits">
      <ComboboxTrigger :as="SelectButton">
        <ComboboxValue placeholder="Select a fruit" />
      </ComboboxTrigger>
      <ComboboxPopup aria-label="Select a fruit">
        <div class="border-b p-2">
          <ComboboxInput
            class="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
            placeholder="Search fruits…"
            :show-trigger="false"
          >
            <template #start-addon>
              <SearchIcon />
            </template>
          </ComboboxInput>
        </div>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          <template #item="{ item }">
            <ComboboxItem :key="item.value" :value="item">
              {{ item.label }}
            </ComboboxItem>
          </template>
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  </div>
</template>
