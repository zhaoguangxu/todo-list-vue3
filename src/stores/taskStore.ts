import { defineStore } from 'pinia'
import axios from 'axios'

interface Task {
  id: number
  text: string
  completed: boolean
}

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTasks() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('/tasks.json')
        this.tasks = response.data
      } catch (err) {
        this.error = '获取任务失败'
        console.error('获取任务失败:', err)
      } finally {
        this.loading = false
      }
    },

    addTask(text: string) {
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
      }
      this.tasks.push(newTask)
    },

    toggleTask(id: number) {
      const task = this.tasks.find((t) => t.id === id)
      if (task) {
        task.completed = !task.completed
      }
    },

    removeTask(id: number) {
      const index = this.tasks.findIndex((t) => t.id === id)
      if (index !== -1) {
        this.tasks.splice(index, 1)
      }
    },
  },
})
