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

      <!-- Huge Features - Full Width Centered -->
      <div class="space-y-24 mb-24">
        <FeaturesSectionHugeItem v-for="feature in hugeFeatures" :key="feature.title" v-bind="feature" />
      </div>

      <!-- Secondary Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <FeaturesSectionMediumItem v-for="feature in mediumFeatures" :key="feature.title" v-bind="feature" />
      </div>

      <!-- Primary Features - Full Width with Image/Video -->
      <div class="space-y-16 mb-20">
        <FeaturesSectionLargeItem v-for="(feature, index) in largeFeatures" :key="feature.title" v-bind="feature" :mirror="index % 2 !== 0" />
      </div>

      <!-- Core Platform Features - Horizontal Layout -->
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <FeaturesSectionSmallItem v-for="feature in smallFeatures" :key="feature.title" v-bind="feature" />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface PrimaryFeature {
  imageUrl: string
  videoUrl?: string
  title: string
  description: string
}

const hugeFeatures: PrimaryFeature[] = [
  {
    imageUrl: '/cases/oosterweel.jpg',
    title: 'Sync with Your Tools. Both Ways.',
    description: 'Manage your data efficiently with ANT\'s bidirectional synchronization. Use ANT as an advanced front-end for your existing engineering tools and databases.'
  },
  {
    imageUrl: '/cases/zuidasdok.jpg',
    title: 'Real-Time Collaboration. Zero Conflicts.',
    description: 'Work together seamlessly across teams and disciplines. Every change is instantly visible to all stakeholders, with built-in conflict resolution and version control.'
  }
]

const largeFeatures: PrimaryFeature[] = [
  {
    imageUrl: '/cases/oosterweel.jpg',
    title: 'Unified Project Dashboard',
    description: 'Get a bird\'s-eye view of all your infrastructure projects. Monitor progress, track milestones, and identify bottlenecks in real-time with our intuitive dashboard interface.'
  },
  {
    imageUrl: '/cases/zuidasdok.jpg',
    videoUrl: '/videos/feature-collaboration.mp4',
    title: 'Seamless Team Collaboration',
    description: 'Work together effortlessly across disciplines. Share designs, exchange feedback, and coordinate changes with built-in versioning and conflict resolution.'
  },
  {
    imageUrl: '/cases/via15.jpg',
    title: 'Advanced Analytics & Insights',
    description: 'Make data-driven decisions with powerful analytics. Visualize project metrics, predict potential issues, and optimize your workflow with AI-powered insights.'
  }
]

const mediumFeatures = [
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

const smallFeatures = [
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
