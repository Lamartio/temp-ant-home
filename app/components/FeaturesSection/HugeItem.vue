<template>
  <div class="flex flex-col items-center text-center">
    <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 max-w-3xl">
      {{ title }}
    </h3>
    <p class="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
      {{ description }}
    </p>
    <div class="w-full relative px-[15%]">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl -z-10 rounded-3xl" />
      <div class="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 aspect-[16/9] scale-95 hover:scale-100 hover:shadow-2xl transition-all duration-500 ease-out">
        <img
          :src="imageUrl"
          :alt="title"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string
  title: string
  description: string
}>()
</script>
