<template>
  <section id="integrations" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
    <UContainer>
      <div class="text-center mb-16">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Integrations</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">Use Your Favorite Tools</h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          ANT integrates seamlessly with the software you already use. No need to change your workflow.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
        <div
          v-for="integration in integrations"
          :key="integration.name"
          class="flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-shadow"
        >
          <div :class="['w-10 h-10 rounded-lg flex items-center justify-center', integration.bg]">
            <UIcon :name="integration.icon" class="w-5 h-5 text-white" />
          </div>
          <span class="font-medium">{{ integration.name }}</span>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const integrations = [
  { name: 'SCIA Engineer', icon: 'i-lucide-calculator', bg: 'bg-blue-500' },
  { name: 'Revit', icon: 'i-lucide-box', bg: 'bg-orange-500' },
  { name: 'Plaxis', icon: 'i-lucide-layers', bg: 'bg-purple-500' },
  { name: 'Excel', icon: 'i-lucide-table', bg: 'bg-green-600' },
  { name: 'Python', icon: 'i-lucide-code', bg: 'bg-yellow-500' },
  { name: 'Relatics', icon: 'i-lucide-link', bg: 'bg-cyan-500' },
]
</script>
