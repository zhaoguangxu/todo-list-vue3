<script setup>
import { ref, onMounted } from 'vue'
import { useTaskStore } from './stores/taskStore'
import { useNewsStore } from './stores/newsStore'
import TaskList from './components/TaskList.vue'
import NewsBar from './components/NewsBar.vue'

const taskStore = useTaskStore()
const newsStore = useNewsStore()
const newTask = ref('')

onMounted(() => {
  taskStore.fetchTasks()
  newsStore.fetchNews()
})

function addTask() {
  if (newTask.value.trim()) {
    taskStore.addTask(newTask.value.trim())
    newTask.value = ''
  }
}
function toggleTask(id) {
  taskStore.toggleTask(id)
}
function removeTask(id) {
  taskStore.removeTask(id)
}
</script>

<template>
  <div class="container py-4">
    <NewsBar :news="newsStore.news" />
    <h2 class="mb-3">待办事项列表</h2>
    <form class="input-group mb-3" @submit.prevent="addTask">
      <input v-model="newTask" type="text" class="form-control" placeholder="添加新任务..." />
      <button class="btn btn-primary" type="submit">添加</button>
    </form>
    <TaskList :tasks="taskStore.tasks" @toggle="toggleTask" @remove="removeTask" />
    <div v-if="taskStore.loading || newsStore.loading" class="text-secondary mt-3">加载中...</div>
    <div v-if="taskStore.error" class="alert alert-danger mt-3">{{ taskStore.error }}</div>
    <div v-if="newsStore.error" class="alert alert-danger mt-3">{{ newsStore.error }}</div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
