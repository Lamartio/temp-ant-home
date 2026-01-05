<template>
  <section id="features" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
    <UContainer>
      <div class="text-center mb-16">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Capabilities</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">Why Choose ANT?</h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Transform how your teams collaborate on complex infrastructure projects with our data-driven platform.
        </p>
      </div>

      <!-- Main Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <UCard
          v-for="feature in features"
          :key="feature.title"
          class="feature-card group cursor-pointer"
        >
          <div class="flex flex-col h-full">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UIcon :name="feature.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">{{ feature.description }}</p>
          </div>
        </UCard>
      </div>

      <!-- Core Platform Features - Horizontal Layout -->
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <div
              v-if="false"
            v-for="coreFeature in coreFeatures"
            :key="coreFeature.title"
            class="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
          >
            <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <UIcon :name="coreFeature.icon" class="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-1">{{ coreFeature.title }}</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ coreFeature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Granular Access Control',
    description: 'Define who sees and does what. Create custom roles with precise permissions at organization and project level. Assign access to apps, tables, and features — ensuring the right people have the right access, always.'
  },
  {
    icon: 'i-lucide-table-2',
    title: 'Your Data, Your Structure',
    description: 'Build custom data tables tailored to your project needs. Create, edit, and manage structured data with full CRUD permissions. From simple lists to complex datasets — all version-controlled and instantly accessible.'
  },
  {
    icon: 'i-lucide-store',
    title: 'Extend Your Platform',
    description: 'Browse and install apps that fit your workflow. The App Store brings specialized tools for design, analysis, and collaboration directly into your workspace. One click to add new capabilities.'
  },
  {
    icon: 'i-lucide-zap',
    title: 'Automate Everything',
    description: 'Set conditions, trigger actions, connect webhooks. Automate repetitive tasks and integrate with external systems. When data changes, your workflows respond — no manual intervention required.'
  },
  {
    icon: 'i-lucide-list-checks',
    title: 'From Idea to Execution',
    description: 'Manage tasks, design workflows, write custom scripts. Track progress, automate handoffs, and extend functionality with code. Complete control over how work gets done.'
  },
  {
    icon: 'i-lucide-radio',
    title: 'Always In Sync, in Real-Time',
    description: 'Changes appear instantly across all users. No refresh needed, no version conflicts. Collaborate with your team knowing everyone sees the same data, the same moment.'
  }
]

const coreFeatures = [
  {
    icon: 'i-lucide-database',
    title: 'Central Data Hub',
    description: 'All project data exchanged centrally with adjustments immediately visible to all stakeholders. No more version conflicts.'
  },
  {
    icon: 'i-lucide-plug',
    title: 'API Integrations',
    description: 'Connect with SCIA Engineer, Plaxis, Excel, Python, Revit, and more. Keep using your favorite tools.'
  }
]
</script>
