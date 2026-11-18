<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardPanel, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
</script>

<template>
  <Card class="w-full max-w-xs">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one click.</CardDescription>
    </CardHeader>
    <CardPanel class="grid gap-2">
      <Label for="card-demo-name">Name</Label>
      <Input id="card-demo-name" placeholder="Name of your project" />
    </CardPanel>
    <CardFooter class="justify-end gap-2">
      <Button variant="ghost">
        Cancel
      </Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>
