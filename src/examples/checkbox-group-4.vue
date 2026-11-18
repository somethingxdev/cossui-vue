<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { Checkbox } from '../components/ui/checkbox'
import { CheckboxGroup } from '../components/ui/checkbox-group'
import { Label } from '../components/ui/label'

const mainPermissions = [
  { id: 'view-dashboard', name: 'View Dashboard' },
  { id: 'manage-users', name: 'Manage Users' },
  { id: 'access-reports', name: 'Access Reports' },
]

const userManagementPermissions = [
  { id: 'create-user', name: 'Create User' },
  { id: 'edit-user', name: 'Edit User' },
  { id: 'delete-user', name: 'Delete User' },
  { id: 'assign-roles', name: 'Assign Roles' },
]

const mainValue = shallowRef<string[]>([])
const managementValue = shallowRef<string[]>([])

const managementIsPartial = computed(() =>
  managementValue.value.length > 0
  && managementValue.value.length !== userManagementPermissions.length,
)

// A parent checkbox takes its state from its own group only. This one sits outside the group and is controlled, to also show the nested group as mixed.
const mainChecked = computed(() => {
  const partial = managementIsPartial.value
    || (mainValue.value.length > 0 && mainValue.value.length !== mainPermissions.length)
  return partial
    ? 'indeterminate'
    : mainValue.value.length > 0
})

function onMainChange(value: string[]) {
  if (value.includes('manage-users'))
    managementValue.value = userManagementPermissions.map(p => p.id)
  else if (managementValue.value.length === userManagementPermissions.length)
    managementValue.value = []
  mainValue.value = value
}

function onManagementChange(value: string[]) {
  mainValue.value = value.length === userManagementPermissions.length
    ? Array.from(new Set([...mainValue.value, 'manage-users']))
    : mainValue.value.filter(v => v !== 'manage-users')
  managementValue.value = value
}
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <Label id="checkbox-group-4-permissions">
      <Checkbox
        :checked="mainChecked"
        @update:checked="onMainChange($event === true ? mainPermissions.map(p => p.id) : [])"
      />
      User Permissions
    </Label>

    <CheckboxGroup
      :all-values="mainPermissions.map(p => p.id)"
      aria-labelledby="checkbox-group-4-permissions"
      :value="mainValue"
      @update:value="onMainChange"
    >
      <Label
        v-for="p in mainPermissions.filter(p => p.id !== 'manage-users')"
        :key="p.id"
        class="ms-4"
      >
        <Checkbox :value="p.id" />
        {{ p.name }}
      </Label>

      <CheckboxGroup
        :all-values="userManagementPermissions.map(p => p.id)"
        aria-labelledby="checkbox-group-4-manage-users"
        class="ms-4"
        :value="managementValue"
        @update:value="onManagementChange"
      >
        <Label id="checkbox-group-4-manage-users">
          <Checkbox parent />
          Manage Users
        </Label>

        <Label v-for="p in userManagementPermissions" :key="p.id" class="ms-4">
          <Checkbox :value="p.id" />
          {{ p.name }}
        </Label>
      </CheckboxGroup>
    </CheckboxGroup>
  </div>
</template>
