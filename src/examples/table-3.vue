<script setup lang="ts">
import { Badge } from '../components/ui/badge'
import { CardFrame } from '../components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'

const projects = [
  {
    project: 'Website Redesign',
    status: 'Paid',
    dot: 'bg-emerald-500',
    team: 'Frontend Team',
    budget: '$12,500',
  },
  {
    project: 'Mobile App',
    status: 'Unpaid',
    dot: 'bg-muted-foreground/64',
    team: 'Mobile Team',
    budget: '$8,750',
  },
  {
    project: 'API Integration',
    status: 'Pending',
    dot: 'bg-amber-500',
    team: 'Backend Team',
    budget: '$5,200',
  },
  {
    project: 'Database Migration',
    status: 'Paid',
    dot: 'bg-emerald-500',
    team: 'DevOps Team',
    budget: '$3,800',
  },
  {
    project: 'User Dashboard',
    status: 'Paid',
    dot: 'bg-emerald-500',
    team: 'UX Team',
    budget: '$7,200',
  },
  {
    project: 'Security Audit',
    status: 'Failed',
    dot: 'bg-red-500',
    team: 'Security Team',
    budget: '$2,100',
  },
]
</script>

<template>
  <CardFrame class="w-full">
    <Table variant="card">
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Team</TableHead>
          <TableHead class="text-right">
            Budget
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in projects" :key="row.project">
          <TableCell class="font-medium">
            {{ row.project }}
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              <span aria-hidden="true" class="size-1.5 rounded-full" :class="row.dot" />
              {{ row.status }}
            </Badge>
          </TableCell>
          <TableCell>{{ row.team }}</TableCell>
          <TableCell class="text-right">
            {{ row.budget }}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell :colspan="3">
            Total Budget
          </TableCell>
          <TableCell class="text-right">
            $39,550
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </CardFrame>
</template>
