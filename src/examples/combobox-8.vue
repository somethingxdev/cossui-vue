<script setup lang="ts">
import {
  Combobox,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxSeparator,
} from '../components/ui/combobox'

// Grouped items demo
interface Tag { value: string, label: string, group: 'Status' | 'Priority' | 'Team' }
interface TagGroup { type: 'group', label: string, items: Tag[] }

const tagsData: Tag[] = [
  // Status
  { group: 'Status', value: 's-open', label: 'Open' },
  { group: 'Status', value: 's-in-progress', label: 'In progress' },
  { group: 'Status', value: 's-blocked', label: 'Blocked' },
  { group: 'Status', value: 's-resolved', label: 'Resolved' },
  { group: 'Status', value: 's-closed', label: 'Closed' },
  // Priority
  { group: 'Priority', value: 'p-low', label: 'Low' },
  { group: 'Priority', value: 'p-medium', label: 'Medium' },
  { group: 'Priority', value: 'p-high', label: 'High' },
  { group: 'Priority', value: 'p-urgent', label: 'Urgent' },
  // Team
  { group: 'Team', value: 't-design', label: 'Design' },
  { group: 'Team', value: 't-frontend', label: 'Frontend' },
  { group: 'Team', value: 't-backend', label: 'Backend' },
  { group: 'Team', value: 't-devops', label: 'DevOps' },
  { group: 'Team', value: 't-qa', label: 'QA' },
  { group: 'Team', value: 't-mobile', label: 'Mobile' },
  { group: 'Team', value: 't-data', label: 'Data' },
  { group: 'Team', value: 't-security', label: 'Security' },
  { group: 'Team', value: 't-platform', label: 'Platform' },
  { group: 'Team', value: 't-infra', label: 'Infrastructure' },
  { group: 'Team', value: 't-product', label: 'Product' },
  { group: 'Team', value: 't-marketing', label: 'Marketing' },
  { group: 'Team', value: 't-sales', label: 'Sales' },
  { group: 'Team', value: 't-support', label: 'Support' },
  { group: 'Team', value: 't-research', label: 'Research' },
  { group: 'Team', value: 't-content', label: 'Content' },
  { group: 'Team', value: 't-analytics', label: 'Analytics' },
  { group: 'Team', value: 't-operations', label: 'Operations' },
  { group: 'Team', value: 't-finance', label: 'Finance' },
  { group: 'Team', value: 't-hr', label: 'HR' },
  { group: 'Team', value: 't-legal', label: 'Legal' },
  { group: 'Team', value: 't-growth', label: 'Growth' },
  { group: 'Team', value: 't-partner', label: 'Partner' },
  { group: 'Team', value: 't-community', label: 'Community' },
  { group: 'Team', value: 't-docs', label: 'Docs' },
  { group: 'Team', value: 't-l10n', label: 'Localization' },
  { group: 'Team', value: 't-a11y', label: 'Accessibility' },
  { group: 'Team', value: 't-sre', label: 'SRE' },
  { group: 'Team', value: 't-release', label: 'Release' },
  { group: 'Team', value: 't-architecture', label: 'Architecture' },
  { group: 'Team', value: 't-ux', label: 'UX' },
  { group: 'Team', value: 't-ui', label: 'UI' },
  { group: 'Team', value: 't-management', label: 'Management' },
]

function groupTags(tags: Tag[]): TagGroup[] {
  const groups: Record<string, Tag[]> = {}
  for (const tag of tags) {
    if (!groups[tag.group])
      groups[tag.group] = []
    groups[tag.group]?.push(tag)
  }

  const order: Array<TagGroup['label']> = ['Status', 'Priority', 'Team']
  return order.map(label => ({ items: groups[label] ?? [], label, type: 'group' }))
}

const groupedTags: TagGroup[] = groupTags(tagsData)
</script>

<template>
  <Combobox :items="groupedTags">
    <div class="flex flex-col items-start gap-2">
      <ComboboxInput aria-label="Search tags" placeholder="e.g. feature" />
    </div>
    <ComboboxPopup>
      <ComboboxEmpty>No tags found.</ComboboxEmpty>
      <ComboboxList>
        <template #item="{ item: group }: { item: TagGroup }">
          <ComboboxGroup :key="group.label">
            <ComboboxGroupLabel>{{ group.label }}</ComboboxGroupLabel>
            <ComboboxItem v-for="tag in group.items" :key="tag.value" :value="tag.value">
              {{ tag.label }}
            </ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator v-if="group.label !== 'Team'" />
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
