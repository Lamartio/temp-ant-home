<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50">
    <UContainer>
      <nav class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center">
          <div class="w-12 h-12 flex-shrink-0">
            <NuxtImg src="/ant_logo_flat_cropped.png" alt="ANT" class="w-full h-full object-contain" />
          </div>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#integrations" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Integrations</a>
          <a href="#projects" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <div class="flex items-center gap-3">
          <UButton
            :icon="colorMode === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
            variant="ghost"
            color="neutral"
            size="sm"
            @click="toggleColorMode"
          />
          <UButton to="#partners" color="primary" size="sm" class="hidden sm:flex">
            Partners
          </UButton>
        </div>
      </nav>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
