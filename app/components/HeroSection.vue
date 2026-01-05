<template>
  <section class="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
    <div class="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />

    <UContainer class="relative">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mb-6">
          <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span class="text-xs font-medium text-blue-600 dark:text-blue-400">ISO 27001 Certified Platform</span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span class="gradient-text">Design Together.</span>
          <br />
          <span class="text-slate-900 dark:text-white">Build Smarter.</span>
        </h1>

        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          ANT is the Common Data Environment that connects every discipline in infrastructure projects.
          One source of truth. Real-time collaboration. Faster, better designs.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton to="#partners" size="lg" color="primary" class="px-8">
            Meet the Partners
            <template #trailing>
              <UIcon name="i-lucide-arrow-right" />
            </template>
          </UButton>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">50+</div>
            <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">Major Projects</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">40%</div>
            <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">Time Saved</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Zero</div>
            <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">Data Conflicts</div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
