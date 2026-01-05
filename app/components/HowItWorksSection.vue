<template>
  <section id="how-it-works" class="py-20 md:py-32 bg-white dark:bg-slate-950">
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1">
          <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">How It Works</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">Single Source of Truth</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Every specialist from your organization and external partners works in real time using the same up-to-date data.
            Calculations, drawings, and designs are centrally accessible, eliminating version conflicts and miscommunication.
          </p>

          <div class="space-y-4">
            <div v-for="(step, index) in steps" :key="index" class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
                <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">{{ index + 1 }}</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ step.title }}</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative order-1 lg:order-2">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
          <div class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 p-8 border border-slate-200/50 dark:border-slate-700/50">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-3 h-3 rounded-full bg-red-400" />
              <div class="w-3 h-3 rounded-full bg-yellow-400" />
              <div class="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div class="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <UIcon name="i-lucide-database" class="w-5 h-5 text-white" />
                </div>
                <div class="flex-grow">
                  <div class="text-sm font-medium">Central Data Hub</div>
                  <div class="text-xs text-slate-500">All parameters synchronized</div>
                </div>
                <UBadge color="success" variant="soft" size="xs">Live</UBadge>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <UIcon name="i-lucide-calculator" class="w-5 h-5 text-blue-500 mb-2" />
                  <div class="text-xs font-medium">SCIA Engineer</div>
                  <div class="text-[10px] text-slate-500">Structural Analysis</div>
                </div>
                <div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <UIcon name="i-lucide-layers" class="w-5 h-5 text-emerald-500 mb-2" />
                  <div class="text-xs font-medium">Revit</div>
                  <div class="text-[10px] text-slate-500">BIM Modeling</div>
                </div>
                <div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <UIcon name="i-lucide-file-code" class="w-5 h-5 text-orange-500 mb-2" />
                  <div class="text-xs font-medium">Python</div>
                  <div class="text-[10px] text-slate-500">Custom Scripts</div>
                </div>
                <div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                  <UIcon name="i-lucide-table" class="w-5 h-5 text-green-500 mb-2" />
                  <div class="text-xs font-medium">Excel</div>
                  <div class="text-[10px] text-slate-500">Calculations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Connect Your Data',
    description: 'Import data from any source using our APIs or native integrations.'
  },
  {
    title: 'Define Dependencies',
    description: 'Set up parameter relationships between disciplines and tools.'
  },
  {
    title: 'Collaborate in Real-Time',
    description: 'Work together with all stakeholders on the same up-to-date data.'
  },
  {
    title: 'Generate & Iterate',
    description: 'Use parametric and generative tools to explore design options.'
  }
]
</script>
