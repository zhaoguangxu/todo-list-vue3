import { defineStore } from 'pinia'
import axios from 'axios'

export interface News {
  id: number
  content: string
  date: string
}

interface State {
  news: News[]
  loading: boolean
  error: string | null
}

export const useNewsStore = defineStore('news', {
  state: (): State => ({
    news: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchNews() {
      this.loading = true
      try {
        const res = await axios.get<News[]>('/news.json')
        this.news = res.data
        this.error = null
      } catch (e) {
        this.error = '加载新闻失败'
      } finally {
        this.loading = false
      }
    }
  }
}) 