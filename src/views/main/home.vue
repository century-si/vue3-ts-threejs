<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const Foundation = defineAsyncComponent(() => import('@/views/demo/foundation/foundation.vue'))
const list: { title: string; name: string; index: number }[] = [
  {
    title: '基础模型',
    name: '1',
    index: 0
  },
  {
    title: '高级模型',
    name: '2',
    index: 1
  }
]
const current = ref(0)
</script>

<template>
  <div class="h-full">
    <ul class="flex h-10 bg-white space-x-2">
      <li
        :class="`px-8 leading-10 cursor-pointer  ${current === index ? 'bg-blue-300' : 'bg-slate-100'}`"
        v-for="(item, index) in list"
        :key="index"
        @click="current = index"
      >
        <button>{{ item.title }}</button>
      </li>
    </ul>
    <div style="height: calc(100% - 40px)">
      <Foundation v-if="current === 0" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
