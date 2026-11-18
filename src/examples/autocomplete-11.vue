<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
  useAutocompleteFilter,
} from '../components/ui/autocomplete'

// Limit results demo
const limit = 7
interface SimpleTag { id: string, value: string }
const manyTags: SimpleTag[] = [
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
  { id: 'lang-dart', value: 'Dart' },
  { id: 'lang-objc', value: 'Objective-C' },
  { id: 'lang-julia', value: 'Julia' },
  { id: 'lang-r', value: 'R' },
  { id: 'lang-perl', value: 'Perl' },
  { id: 'lang-lua', value: 'Lua' },
  { id: 'lang-ocaml', value: 'OCaml' },
  { id: 'lang-fsharp', value: 'F#' },
]

const value = shallowRef('')
const { contains } = useAutocompleteFilter({ sensitivity: 'base' })

const totalMatches = computed(() => {
  const trimmed = value.value.trim()
  if (!trimmed)
    return manyTags.length
  return manyTags.filter(t => contains(t.value, trimmed)).length
})

const moreCount = computed(() => Math.max(0, totalMatches.value - limit))
</script>

<template>
  <Autocomplete v-model:value="value" :items="manyTags" :limit="limit">
    <AutocompleteInput placeholder="e.g. feature" />
    <AutocompletePopup>
      <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
      <AutocompleteList>
        <template #item="{ item: tag }: { item: SimpleTag }">
          <AutocompleteItem :key="tag.id" :value="tag">
            {{ tag.value }}
          </AutocompleteItem>
        </template>
      </AutocompleteList>
      <AutocompleteStatus v-if="moreCount > 0">
        +{{ moreCount }} more (keep typing to narrow down)
      </AutocompleteStatus>
    </AutocompletePopup>
  </Autocomplete>
</template>
