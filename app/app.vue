<template>
  <UApp>
    <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <!-- Navigation -->
      <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50">
        <UContainer>
          <nav class="flex items-center justify-between h-16">
            <NuxtLink to="/" class="flex items-center">
              <div class="w-12 h-12 flex-shrink-0">
                <img src="/ant_logo_flat_cropped.png" alt="ANT" class="w-full h-full object-contain" />
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
              <UButton color="primary" size="sm" class="hidden sm:flex">
                Get Started
              </UButton>
            </div>
          </nav>
        </UContainer>
      </header>

      <!-- Hero Section -->
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
              <UButton size="lg" color="primary" class="px-8">
                Request Demo
                <template #trailing>
                  <UIcon name="i-lucide-arrow-right" />
                </template>
              </UButton>
              <UButton size="lg" variant="outline" color="neutral" class="px-8">
                <template #leading>
                  <UIcon name="i-lucide-play-circle" />
                </template>
                Watch Video
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

      <!-- Features Section -->
      <section id="features" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <UContainer>
          <div class="text-center mb-16">
            <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Capabilities</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">Why Choose ANT?</h2>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Transform how your teams collaborate on complex infrastructure projects with our data-driven platform.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </UContainer>
      </section>

      <!-- How It Works -->
      <section class="py-20 md:py-32">
        <UContainer>
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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

            <div class="relative">
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

      <!-- Integrations Section -->
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

      <!-- Projects Section -->
      <section id="projects" class="py-20 md:py-32">
        <UContainer>
          <div class="text-center mb-16">
            <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Track Record</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">Proven on Major Projects</h2>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              ANT has been successfully deployed on some of the largest infrastructure projects in the Benelux region.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UCard v-for="project in projects" :key="project.name" class="group overflow-hidden">
              <div class="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                <UIcon name="i-lucide-construction" class="w-12 h-12 text-slate-400 dark:text-slate-500" />
              </div>
              <h3 class="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ project.name }}</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mt-4">
                <UBadge v-for="tag in project.tags" :key="tag" variant="soft" color="neutral" size="xs">
                  {{ tag }}
                </UBadge>
              </div>
            </UCard>
          </div>
        </UContainer>
      </section>

      <!-- CTA Section -->
      <section class="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <UContainer class="relative">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
            <p class="text-lg text-blue-100 mb-10 leading-relaxed">
              Join the leading infrastructure firms using ANT to deliver projects faster, with fewer errors and better collaboration.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <UButton size="lg" color="white" class="px-8">
                Schedule a Demo
              </UButton>
              <UButton size="lg" variant="outline" class="px-8 text-white border-white/30 hover:bg-white/10">
                Contact Sales
              </UButton>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Footer -->
      <footer id="contact" class="py-16 border-t border-slate-200 dark:border-slate-800">
        <UContainer>
          <div class="grid md:grid-cols-4 gap-12">
            <div class="md:col-span-2">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 flex-shrink-0">
                  <img src="/ant_logo_flat_cropped.png" alt="ANT" class="w-full h-full object-contain" />
                </div>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                ANT is the Common Data Environment platform developed by CollaborAll and Witteveen+Bos,
                enabling fluid integration of data from BIM, ERP, and EAM systems.
              </p>
              <div class="flex gap-4">
                <UButton variant="ghost" color="neutral" size="sm" icon="i-lucide-linkedin" />
                <UButton variant="ghost" color="neutral" size="sm" icon="i-lucide-twitter" />
                <UButton variant="ghost" color="neutral" size="sm" icon="i-lucide-mail" />
              </div>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Product</h4>
              <ul class="space-y-3">
                <li><a href="#features" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Features</a></li>
                <li><a href="#integrations" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Company</h4>
              <ul class="space-y-3">
                <li><a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-sm text-slate-500 dark:text-slate-400">
              2025 ANT by CollaborAll & Witteveen+Bos. All rights reserved.
            </p>
            <div class="flex items-center gap-2">
              <UBadge variant="soft" color="success" size="xs">
                <template #leading>
                  <UIcon name="i-lucide-shield-check" class="w-3 h-3" />
                </template>
                ISO 27001
              </UBadge>
            </div>
          </div>
        </UContainer>
      </footer>
    </div>
  </UApp>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const features = [
  {
    icon: 'i-lucide-database',
    title: 'Central Data Hub',
    description: 'All project data exchanged centrally with adjustments immediately visible to all stakeholders. No more version conflicts.'
  },
  {
    icon: 'i-lucide-git-branch',
    title: 'Parametric Design',
    description: 'Work with parametric models that automatically update across disciplines when parameters change.'
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Generative Design',
    description: 'Automatically generate and compare design variants to find optimal solutions for cost, carbon impact, and performance.'
  },
  {
    icon: 'i-lucide-check-circle',
    title: 'Error-Free Coordination',
    description: 'Dependencies at parameter level ensure every discipline works with correct data automatically.'
  },
  {
    icon: 'i-lucide-plug',
    title: 'API Integrations',
    description: 'Connect with SCIA Engineer, Plaxis, Excel, Python, Revit, and more. Keep using your favorite tools.'
  },
  {
    icon: 'i-lucide-layout-dashboard',
    title: 'Real-Time Dashboards',
    description: 'Monitor task statuses, track progress, and gain insights into your design process with live dashboards.'
  }
]

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

const integrations = [
  { name: 'SCIA Engineer', icon: 'i-lucide-calculator', bg: 'bg-blue-500' },
  { name: 'Revit', icon: 'i-lucide-box', bg: 'bg-orange-500' },
  { name: 'Plaxis', icon: 'i-lucide-layers', bg: 'bg-purple-500' },
  { name: 'Excel', icon: 'i-lucide-table', bg: 'bg-green-600' },
  { name: 'Python', icon: 'i-lucide-code', bg: 'bg-yellow-500' },
  { name: 'Relatics', icon: 'i-lucide-link', bg: 'bg-cyan-500' },
]

const projects = [
  {
    name: 'Lemmer-Delfzijl Waterway',
    description: 'Major waterway infrastructure project with multiple civil structures and complex coordination requirements.',
    tags: ['Waterways', 'Civil', 'Netherlands']
  },
  {
    name: 'ViA15',
    description: 'Highway expansion project connecting A15 and A12 with bridges, tunnels, and interchanges.',
    tags: ['Highway', 'Bridges', 'Netherlands']
  },
  {
    name: 'Zuidasdok',
    description: 'Major urban development integrating rail, road, and public transport infrastructure.',
    tags: ['Urban', 'Rail', 'Amsterdam']
  },
  {
    name: 'Blankenburg Connection',
    description: 'New highway link with the deepest immersed tunnel in the Netherlands.',
    tags: ['Tunnel', 'Highway', 'Rotterdam']
  },
  {
    name: 'Oosterweel Link',
    description: 'Belgium\'s largest infrastructure project closing the Antwerp ring road.',
    tags: ['Highway', 'Tunnel', 'Belgium']
  },
  {
    name: 'Permit in 1 Day',
    description: 'Digital acceleration initiative for faster building permit processing.',
    tags: ['Digital', 'Circular', 'Innovation']
  }
]
</script>
