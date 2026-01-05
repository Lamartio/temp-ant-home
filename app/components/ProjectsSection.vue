<template>
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
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <UCard class="group overflow-hidden h-full cursor-pointer hover:shadow-lg transition-shadow">
            <div class="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden">
              <NuxtImg
                :src="project.image"
                :alt="project.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 class="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
              {{ project.name }}
              <UIcon name="i-lucide-external-link" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <UBadge v-for="tag in project.tags" :key="tag" variant="soft" color="neutral" size="xs">
                {{ tag }}
              </UBadge>
            </div>
          </UCard>
        </a>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'Lemmer-Delfzijl Waterway',
    description: 'Major waterway infrastructure project with multiple civil structures and complex coordination requirements.',
    tags: ['Waterways', 'Civil', 'Netherlands'],
    url: 'https://www.witteveenbos.com/projects/greater-impact-by-working-digitally-with-ant',
    image: '/cases/lemmer-delfzijl.jpg'
  },
  {
    name: 'ViA15',
    description: 'Highway expansion project connecting A15 and A12 with bridges, tunnels, and interchanges.',
    tags: ['Highway', 'Bridges', 'Netherlands'],
    url: 'https://www.witteveenbos.com/projects/greater-impact-by-working-digitally-with-ant',
    image: '/cases/via15.jpg'
  },
  {
    name: 'Zuidasdok',
    description: 'Major urban development integrating rail, road, and public transport infrastructure.',
    tags: ['Urban', 'Rail', 'Amsterdam'],
    url: 'https://www.witteveenbos.com/projects/greater-impact-by-working-digitally-with-ant',
    image: '/cases/zuidasdok.jpg'
  },
  {
    name: 'Blankenburg Connection',
    description: 'New highway link with the deepest immersed tunnel in the Netherlands.',
    tags: ['Tunnel', 'Highway', 'Rotterdam'],
    url: 'https://www.witteveenbos.com/projects/greater-impact-by-working-digitally-with-ant',
    image: '/cases/blankenburg.jpg'
  },
  {
    name: 'Oosterweel Link',
    description: 'Belgium\'s largest infrastructure project closing the Antwerp ring road.',
    tags: ['Highway', 'Tunnel', 'Belgium'],
    url: 'https://www.witteveenbos.com/projects/greater-impact-by-working-digitally-with-ant',
    image: '/cases/oosterweel.jpg'
  },
  {
    name: 'Permit in 1 Day',
    description: 'Digital acceleration initiative for faster building permit processing.',
    tags: ['Digital', 'Circular', 'Innovation'],
    url: 'https://www.digibouw.nl/en/sessie/beginner/vergunning-in-1-dag',
    image: '/cases/permit-in-1-day.png'
  }
]
</script>
