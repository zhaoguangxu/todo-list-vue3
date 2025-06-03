<script setup lang="ts">
import type { Task } from '../stores/taskStore'

defineProps<{
  task: Task
}>()

defineEmits<{
  toggle: [id: number]
  remove: [id: number]
}>()

function formatTime(time: string) {
  const date = new Date(time)
  return date.toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })
}
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle', task.id)"
        class="form-check-input me-2"
      />
      <span :class="{ 'text-decoration-line-through': task.completed }">{{ task.title }}</span>
      <small class="text-muted ms-2">({{ formatTime(task.createdAt) }})</small>
    </div>
    <button class="btn btn-sm btn-danger" @click="$emit('remove', task.id)">删除</button>
  </li>
</template>
