<script setup lang="ts">
import { useAsyncOptions } from '@ui-sdk/vue/async-options'
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
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

async function searchMovies(query: string): Promise<Movie[]> {
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 100))
  if (Math.random() < 0.01 || query === 'will_error')
    throw new Error('Network error')
  const text = query.toLowerCase()
  return top100Movies.filter(
    movie => movie.title.toLowerCase().includes(text) || movie.year.toString().includes(text),
  )
}

const { state: results, setQuery } = useAsyncOptions(searchMovies, { debounce: 300, minLength: 1 })
</script>

<template>
  <Autocomplete :filter="false" :status="results.status" @value-change="setQuery">
    <AutocompleteInput aria-label="Search movies" placeholder="e.g. Pulp Fiction or 1994" />
    <AutocompletePopup v-if="results.query !== ''">
      <AutocompleteStatus v-slot="{ state }" class="text-muted-foreground">
        <span v-if="state.loading" class="flex items-center justify-between gap-2 text-muted-foreground">
          Searching...
          <Spinner class="size-4.5 sm:size-4" />
        </span>
        <span v-else-if="state.status === 'error'" class="font-normal text-destructive text-sm">
          Failed to fetch movies. Please try again.
        </span>
        <span v-else-if="results.items.length === 0" class="font-normal text-muted-foreground text-sm">
          Movie or year "{{ results.query }}" does not exist in the Top 100 IMDb movies
        </span>
        <template v-else>
          {{ results.items.length }} result{{ results.items.length === 1 ? '' : 's' }} found
        </template>
      </AutocompleteStatus>
      <AutocompleteList>
        <AutocompleteItem v-for="movie in results.items" :key="movie.id" :value="movie.title" :label="movie.title">
          <div class="flex w-full flex-col gap-1">
            <div class="font-medium">
              {{ movie.title }}
            </div>
            <div class="text-muted-foreground text-xs">
              {{ movie.year }}
            </div>
          </div>
        </AutocompleteItem>
      </AutocompleteList>
    </AutocompletePopup>
  </Autocomplete>
</template>
