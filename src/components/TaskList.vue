<script setup lang="ts">
import { ref, computed } from 'vue'
import TaskItem from './TaskItem.vue'
import type { Task } from '../stores/taskStore'

const props = defineProps<{
  tasks: Task[]
}>()

const emit = defineEmits<{
  toggle: [id: number]
  remove: [id: number]
}>()

const tab = ref('todo')
const showTasks = computed(() =>
  tab.value === 'todo'
    ? props.tasks.filter((t) => !t.completed)
    : props.tasks.filter((t) => t.completed)
)

function toggleTask(id: number) {
  emit('toggle', id)
}
function removeTask(id: number) {
  emit('remove', id)
}
</script>

<template>
  <div>
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: tab === 'todo' }"
          href="#"
          @click.prevent="tab = 'todo'"
          >待办事项</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: tab === 'done' }"
          href="#"
          @click.prevent="tab = 'done'"
          >已完成</a
        >
      </li>
    </ul>
    <ul class="list-group">
      <TaskItem
        v-for="task in showTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @remove="removeTask"
      />
    </ul>
  </div>
</template>
