<template>
  <div
    class="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
  >
    <div
      class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
    >
      <UIcon :name="icon" class="w-7 h-7 text-white" />
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-1">{{ title }}</h3>
      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
