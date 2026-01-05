<template>
  <section id="partners" class="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

    <UContainer class="relative">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
        <p class="text-lg text-blue-100 mb-10 leading-relaxed">
          Contact our partners for more information about ANT and how it can streamline your infrastructure projects.
        </p>
        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            v-for="partner in partners"
            :key="partner.name"
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div class="h-16 flex items-center justify-center mb-4">
              <NuxtImg
                :src="partner.logo"
                :alt="partner.name"
                :class="['max-h-full max-w-full object-contain', partner.invert ? 'brightness-0 invert' : '']"
              />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ partner.name }}</h3>
            <p class="text-sm text-blue-100 mb-4">{{ partner.description }}</p>
            <div class="flex items-center justify-center gap-2 text-white/80 group-hover:text-white transition-colors">
              <span class="text-sm font-medium">Learn more</span>
              <UIcon name="i-lucide-external-link" class="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const partners = [
  {
    name: 'Witteveen+Bos',
    description: 'Engineering consultancy specializing in infrastructure and digital solutions.',
    url: 'https://www.witteveenbos.com/nl/digital-solutions/ant',
    logo: '/witteveen-bos-logo.png',
    invert: false
  },
  {
    name: 'collaborall',
    description: 'Integration specialists connecting systems for seamless data flow.',
    url: 'https://collaborall.net/services/integratie/',
    logo: '/collaborall-logo.svg',
    invert: true
  }
]
</script>
