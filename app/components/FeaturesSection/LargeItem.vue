<template>
  <div
    class="group flex flex-col items-start gap-8 lg:gap-12"
    :class="mirror ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <!-- Image/Video Container -->
    <div class="w-full lg:w-1/2 flex-shrink-0" style="perspective: 1000px;">
      <div
        class="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out aspect-[16/9]"
        :style="mediaStyle"
      >
        <!-- Video (shown on hover after debounce) -->
        <video
          v-if="videoUrl"
          ref="videoRef"
          :src="videoUrl"
          class="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
          :class="isVideoActive ? 'opacity-100' : 'opacity-0'"
          muted
          loop
          playsinline
        />
        <!-- Image (always present as fallback) -->
        <img
          :src="imageUrl"
          :alt="title"
          class="w-full h-full object-cover transition-opacity duration-300"
          :class="isVideoActive && videoUrl ? 'opacity-0' : 'opacity-100'"
        />
      </div>
    </div>

    <!-- Text Content -->
    <div class="w-full lg:w-1/2 space-y-4 mt-6">
      <h3 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
        {{ title }}
      </h3>
      <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  imageUrl: string
  videoUrl?: string
  title: string
  description: string
  mirror?: boolean
}>(), {
  mirror: false
})

// Seeded random number generator for deterministic transforms
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

// Generate a unique seed from the title string
const titleSeed = computed(() => {
  let hash = 0
  for (let i = 0; i < props.title.length; i++) {
    hash = ((hash << 5) - hash) + props.title.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
})

const initialTransform = computed(() => {
  const seed = titleSeed.value
  const rotateX = (seededRandom(seed * 3 + 1) - 0.5) * 20
  const rotateY = (seededRandom(seed * 3 + 2) - 0.5) * 30
  return { rotateX, rotateY, scale: 0.92 }
})

const isHovered = ref(false)
const isVideoActive = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const hoverTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

const mediaStyle = computed(() => {
  if (isHovered.value) {
    return {
      transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
      transformStyle: 'preserve-3d' as const
    }
  }

  const t = initialTransform.value
  return {
    transform: `rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) scale(${t.scale})`,
    transformStyle: 'preserve-3d' as const
  }
})

function handleHover(isEntering: boolean) {
  if (isEntering) {
    isHovered.value = true

    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
    }

    if (props.videoUrl) {
      hoverTimeout.value = setTimeout(() => {
        if (videoRef.value) {
          isVideoActive.value = true
          videoRef.value.currentTime = 0
          videoRef.value.play().catch(() => {})
        }
      }, 700)
    }
  } else {
    isHovered.value = false

    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value)
      hoverTimeout.value = null
    }

    if (videoRef.value) {
      videoRef.value.pause()
    }
    isVideoActive.value = false
  }
}
</script>
