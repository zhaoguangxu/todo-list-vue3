<template>
  <div class="alert alert-info" v-if="news && news.length">
    <marquee>
      <span v-for="item in news" :key="item.id" class="me-4">
        {{ item.content }}（{{ formatTime(item.date) }}）
      </span>
    </marquee>
  </div>
</template>

<script setup>
const props = defineProps({
  news: Array
})
function formatTime(time) {
  const date = new Date(time)
  return date.toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })
}
</script> 