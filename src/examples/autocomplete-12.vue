<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
  useAutocompleteFilter,
} from '../components/ui/autocomplete'
import { Spinner } from '../components/ui/spinner'

interface Movie { id: string, title: string, year: number }
const top100Movies: Movie[] = [
  { id: '1', title: 'The Shawshank Redemption', year: 1994 },
  { id: '2', title: 'The Godfather', year: 1972 },
  { id: '3', title: 'The Dark Knight', year: 2008 },
  { id: '4', title: 'The Godfather Part II', year: 1974 },
  { id: '5', title: '12 Angry Men', year: 1957 },
  { id: '8', title: 'Pulp Fiction', year: 1994 },
  { id: '11', title: 'Forrest Gump', year: 1994 },
  { id: '14', title: 'Inception', year: 2010 },
]

async function searchMovies(
  query: string,
  filter: (item: string, query: string) => boolean,
): Promise<Movie[]> {
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 100))
  if (Math.random() < 0.01 || query === 'will_error')
    throw new Error('Network error')
  return top100Movies.filter(
    movie => filter(movie.title, query) || filter(movie.year.toString(), query),
  )
}

const searchValue = shallowRef('')
const isLoading = shallowRef(false)
const searchResults = shallowRef<Movie[]>([])
const error = shallowRef<string | null>(null)

const { contains } = useAutocompleteFilter({ sensitivity: 'base' })

watch(searchValue, (query, _, onCleanup) => {
  if (!query) {
    searchResults.value = []
    isLoading.value = false
    return
  }

  isLoading.value = true
  error.value = null
  let ignore = false

  const timeoutId = setTimeout(async () => {
    try {
      const results = await searchMovies(query, contains)
      if (!ignore)
        searchResults.value = results
    }
    catch {
      if (!ignore) {
        error.value = 'Failed to fetch movies. Please try again.'
        searchResults.value = []
      }
    }
    finally {
      if (!ignore)
        isLoading.value = false
    }
  }, 300)

  onCleanup(() => {
    clearTimeout(timeoutId)
    ignore = true
  })
})

const resultsText = computed(() => `${searchResults.value.length} result${searchResults.value.length === 1
  ? ''
  : 's'} found`)
</script>

<template>
  <Autocomplete
    v-model:value="searchValue"
    :filter="null"
    :items="searchResults"
    :item-to-string-value="(item: unknown) => (item as Movie).title"
  >
    <AutocompleteInput placeholder="e.g. Pulp Fiction or 1994" />
    <AutocompletePopup v-if="searchValue !== ''" :aria-busy="isLoading || undefined">
      <AutocompleteStatus class="text-muted-foreground">
        <span v-if="isLoading" class="flex items-center justify-between gap-2 text-muted-foreground">
          Searching...
          <Spinner class="size-4.5 sm:size-4" />
        </span>
        <span v-else-if="error" class="font-normal text-destructive text-sm">{{ error }}</span>
        <span v-else-if="searchResults.length === 0" class="font-normal text-muted-foreground text-sm">
          Movie or year "{{ searchValue }}" does not exist in the Top 100 IMDb movies
        </span>
        <template v-else>
          {{ resultsText }}
        </template>
      </AutocompleteStatus>
      <AutocompleteList>
        <template #item="{ item: movie }: { item: Movie }">
          <AutocompleteItem :key="movie.id" :value="movie">
            <div class="flex w-full flex-col gap-1">
              <div class="font-medium">
                {{ movie.title }}
              </div>
              <div class="text-muted-foreground text-xs">
                {{ movie.year }}
              </div>
            </div>
          </AutocompleteItem>
        </template>
      </AutocompleteList>
    </AutocompletePopup>
  </Autocomplete>
</template>
