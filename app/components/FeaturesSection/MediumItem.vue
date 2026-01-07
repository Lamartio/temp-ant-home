<template>
  <UCard class="feature-card group cursor-pointer">
    <div class="flex flex-col h-full">
      <div
        class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
      >
        <UIcon :name="icon" class="w-6 h-6 text-white" />
      </div>
      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
        {{ description }}
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
