import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export interface News {
  id: number
  content: string
  date: string
}

export const useNewsStore = defineStore('news', () => {
  const news = ref<News[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchNews() {
    loading.value = true
    try {
      const res = await axios.get<News[]>('/todo-list-vue3/news.json')
      news.value = res.data
      error.value = null
    } catch (e) {
      error.value = '加载新闻失败'
    } finally {
      loading.value = false
    }
  }

  return {
    news,
    loading,
    error,
    fetchNews,
  }
})
