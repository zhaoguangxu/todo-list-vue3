<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <input
        type="checkbox"
        v-model="task.completed"
        @change="$emit('toggle', task.id)"
        class="form-check-input me-2"
      />
      <span :class="{ 'text-decoration-line-through': task.completed }">{{ task.title }}</span>
      <small class="text-muted ms-2">({{ formatTime(task.createdAt) }})</small>
    </div>
    <button class="btn btn-sm btn-danger" @click="$emit('remove', task.id)">删除</button>
  </li>
</template>

<script setup lang="ts">
import type { Task } from '../stores/taskStore'

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'remove', id: number): void
}>()

function formatTime(time: string) {
  // 只显示日期和时间，格式化为 GMT+8
  const date = new Date(time)
  return date.toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })
}
</script>
