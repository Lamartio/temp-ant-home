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

      <!-- Primary Features - Full Width with Image/Video -->
      <div class="space-y-16 mb-20">
        <div
          v-for="(feature, index) in primaryFeatures"
          :key="feature.title"
          class="group flex flex-col items-start gap-8 lg:gap-12"
          :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          @mouseenter="handleFeatureHover(index, true)"
          @mouseleave="handleFeatureHover(index, false)"
        >
          <!-- Image/Video Container -->
          <div class="w-full lg:w-1/2 flex-shrink-0" style="perspective: 1000px;">
            <div
              class="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out aspect-[16/9]"
              :style="getMediaStyle(index)"
            >
              <!-- Video (shown on hover after debounce) -->
              <video
                v-if="feature.videoUrl"
                :ref="el => setVideoRef(el, index)"
                :src="feature.videoUrl"
                class="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
                :class="activeVideoIndex === index ? 'opacity-100' : 'opacity-0'"
                muted
                loop
                playsinline
              />
              <!-- Image (always present as fallback) -->
              <img
                :src="feature.imageUrl"
                :alt="feature.title"
                class="w-full h-full object-cover transition-opacity duration-300"
                :class="activeVideoIndex === index && feature.videoUrl ? 'opacity-0' : 'opacity-100'"
              />
            </div>
          </div>

          <!-- Text Content -->
          <div class="w-full lg:w-1/2 space-y-4 mt-6">
            <h3 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
              {{ feature.title }}
            </h3>
            <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Secondary Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <UCard
          v-for="feature in secondaryFeatures"
          :key="feature.title"
          class="feature-card group cursor-pointer"
        >
          <div class="flex flex-col h-full">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UIcon :name="feature.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">{{
              feature.description
            }}</p>
          </div>
        </UCard>
      </div>

      <!-- Core Platform Features - Horizontal Layout -->
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="coreFeature in tertiaryFeatures"
            :key="coreFeature.title"
            class="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
          >
            <div
              class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
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
import { ref } from 'vue'

interface PrimaryFeature {
  imageUrl: string
  videoUrl?: string
  title: string
  description: string
}

interface FeatureTransform {
  rotateX: number
  rotateY: number
  scale: number
}

const primaryFeatures: PrimaryFeature[] = [
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

const secondaryFeatures = [
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

const tertiaryFeatures = [
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

// Seeded random number generator for deterministic transforms
function seededRandom(seed: number): number { // necessaray agains hydration errors (versus Math.random)
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

function generateTransformForIndex(index: number): FeatureTransform {
  // Use index as seed for deterministic but varied transforms
  const rotateX = (seededRandom(index * 3 + 1) - 0.5) * 20 // -4 to 4 degrees
  const rotateY = (seededRandom(index * 3 + 2) - 0.5) * 30 // -4 to 4 degrees
  return { rotateX, rotateY, scale: .92 }
}

// Generate transforms immediately (deterministic based on index)
const featureTransforms = primaryFeatures.map((_, index) => generateTransformForIndex(index))
const hoveredIndex = ref<number | null>(null)
const activeVideoIndex = ref<number | null>(null)
const videoRefs = ref<Map<number, HTMLVideoElement>>(new Map())
const hoverTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

function setVideoRef(el: HTMLVideoElement | null, index: number) {
  if (el) {
    videoRefs.value.set(index, el)
  }
}

function getMediaStyle(index: number): Record<string, string> {
  const isHovered = hoveredIndex.value === index
  const transform = featureTransforms[index]

  if (!transform) {
    return {}
  }

  if (isHovered) {
    return {
      transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
      transformStyle: 'preserve-3d'
    }
  }

  return {
    transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
    transformStyle: 'preserve-3d'
  }
}

function handleFeatureHover(index: number, isEntering: boolean) {
  if (isEntering) {
    hoveredIndex.value = index

    // Clear any existing timeout
    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
    }

    // Start video after 700ms debounce (only if feature has a video)
    const feature = primaryFeatures[index]
    if (feature?.videoUrl) {
      hoverTimeout.value = setTimeout(() => {
        const video = videoRefs.value.get(index)
        if (video) {
          activeVideoIndex.value = index
          video.currentTime = 0
          video.play().catch(() => {
            // Video play failed, keep showing image
          })
        }
      }, 700)
    }
  } else {
    hoveredIndex.value = null

    // Clear timeout and stop video
    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
      hoverTimeout.value = null
    }

    const video = videoRefs.value.get(index)
    if (video) {
      video.pause()
    }
    activeVideoIndex.value = null
  }
}
</script>
