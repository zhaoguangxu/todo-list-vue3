import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

export interface Task {
  id: number
  title: string
  completed: boolean
  createdAt: string
}

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const todoTasks = computed(() => tasks.value.filter((t) => !t.completed))
  const doneTasks = computed(() => tasks.value.filter((t) => t.completed))

  async function fetchTasks() {
    loading.value = true
    try {
      const res = await axios.get<Task[]>('/todo-list-vue3/tasks.json')
      tasks.value = res.data
      error.value = null
    } catch (e) {
      error.value = '加载任务失败'
    } finally {
      loading.value = false
    }
  }

  function addTask(title: string) {
    const now = new Date()
    const gmt8 = new Date(now.getTime() + 8 * 60 * 60 * 1000)
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: gmt8.toISOString().replace('Z', '+08:00'),
    }
    tasks.value.push(newTask)
  }

  function removeTask(id: number) {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  function toggleTask(id: number) {
    const task = tasks.value.find((t) => t.id === id)
    if (task) task.completed = !task.completed
  }

  return {
    tasks,
    loading,
    error,
    todoTasks,
    doneTasks,
    fetchTasks,
    addTask,
    removeTask,
    toggleTask,
  }
})
