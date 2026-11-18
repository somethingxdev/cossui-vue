<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteSeparator,
  AutocompleteStatus,
  useAutocompleteFilter,
} from '../components/ui/autocomplete'

const items = [
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

const groupedTags = [
  {
    value: 'Status',
    items: [
      { id: 's-open', label: 'Open' },
      { id: 's-in-progress', label: 'In progress' },
      { id: 's-blocked', label: 'Blocked' },
    ],
  },
  {
    value: 'Priority',
    items: [
      { id: 'p-low', label: 'Low' },
      { id: 'p-medium', label: 'Medium' },
      { id: 'p-high', label: 'High' },
    ],
  },
  {
    value: 'Team',
    items: [
      { id: 't-design', label: 'Design' },
      { id: 't-frontend', label: 'Frontend' },
      { id: 't-backend', label: 'Backend' },
    ],
  },
]

const limit = 7

const languages = [
  { id: 'lang-js', value: 'JavaScript' },
  { id: 'lang-ts', value: 'TypeScript' },
  { id: 'lang-py', value: 'Python' },
  { id: 'lang-java', value: 'Java' },
  { id: 'lang-csharp', value: 'C#' },
  { id: 'lang-cpp', value: 'C++' },
  { id: 'lang-c', value: 'C' },
  { id: 'lang-go', value: 'Go' },
  { id: 'lang-rust', value: 'Rust' },
  { id: 'lang-rb', value: 'Ruby' },
  { id: 'lang-php', value: 'PHP' },
  { id: 'lang-swift', value: 'Swift' },
  { id: 'lang-kotlin', value: 'Kotlin' },
  { id: 'lang-scala', value: 'Scala' },
  { id: 'lang-elixir', value: 'Elixir' },
  { id: 'lang-hs', value: 'Haskell' },
]

const query = shallowRef('')
const { contains } = useAutocompleteFilter({ sensitivity: 'base' })

const moreCount = computed(() => {
  const trimmed = query.value.trim()
  const matches = trimmed
    ? languages.filter(language => contains(language.value, trimmed)).length
    : languages.length
  return Math.max(0, matches - limit)
})
</script>

<template>
  <div class="grid max-w-xs gap-4">
    <Autocomplete :items="items">
      <AutocompleteInput aria-label="Search items" placeholder="Search items…" />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          <template #item="{ item }">
            <AutocompleteItem :key="item.value" :value="item">
              {{ item.label }}
            </AutocompleteItem>
          </template>
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>

    <Autocomplete :items="items">
      <AutocompleteInput aria-label="Search items" placeholder="With trigger and clear…" show-clear show-trigger />
      <AutocompletePopup>
        <AutocompleteEmpty>No items found.</AutocompleteEmpty>
        <AutocompleteList>
          <template #item="{ item }">
            <AutocompleteItem :key="item.value" :value="item">
              {{ item.label }}
            </AutocompleteItem>
          </template>
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>

    <Autocomplete :items="groupedTags">
      <AutocompleteInput aria-label="Search tags" placeholder="e.g. feature" />
      <AutocompletePopup>
        <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
        <AutocompleteList>
          <template #item="{ item: group }">
            <AutocompleteGroup :items="group.items">
              <AutocompleteGroupLabel>{{ group.value }}</AutocompleteGroupLabel>
              <AutocompleteCollection v-slot="{ item: tag }">
                <AutocompleteItem :key="tag.id" :value="tag">
                  {{ tag.label }}
                </AutocompleteItem>
              </AutocompleteCollection>
            </AutocompleteGroup>
            <AutocompleteSeparator v-if="group.value !== 'Team'" />
          </template>
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>

    <Autocomplete v-model:value="query" :items="languages" :limit="limit">
      <AutocompleteInput aria-label="Search languages" placeholder="Limited to 7 results" />
      <AutocompletePopup>
        <AutocompleteEmpty>No languages found.</AutocompleteEmpty>
        <AutocompleteList>
          <template #item="{ item }">
            <AutocompleteItem :key="item.id" :value="item">
              {{ item.value }}
            </AutocompleteItem>
          </template>
        </AutocompleteList>
        <AutocompleteStatus>
          <template v-if="moreCount > 0">
            +{{ moreCount }} more (keep typing to narrow down)
          </template>
        </AutocompleteStatus>
      </AutocompletePopup>
    </Autocomplete>
  </div>
</template>
