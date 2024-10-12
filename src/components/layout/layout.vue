<script setup lang="ts">
import { RouterView } from 'vue-router'
const menuList = [{ name: 'Home', path: '/' }]
</script>

<template>
  <div class="flex flex-col h-full">
    <nav class="flex justify-center h-20 w-full border space-x-3">
      <div
        class="flex items-end h-[80%] text-blue-300 hover:text-blue-500 hover:border-sky-700 hover:border-b-2 cursor-pointer"
        v-for="(item, index) in menuList"
        :key="index"
      >
        {{ item.name }}
      </div>
    </nav>
    <main class="flex-1 bg-slate-500">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss"></style>
