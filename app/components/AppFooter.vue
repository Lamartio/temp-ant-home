<template>
  <footer id="contact" class="py-16 border-t border-slate-200 dark:border-slate-800">
    <UContainer>
      <div class="grid md:grid-cols-4 gap-12">
        <div class="md:col-span-2">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 flex-shrink-0">
              <NuxtImg src="/ant_logo_flat_cropped.png" alt="ANT" class="w-full h-full object-contain" />
            </div>
          </div>
          <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mb-6">
            ANT is the Common Data Environment platform developed by collaborall and Witteveen+Bos,
            enabling fluid integration of data from BIM, ERP, and EAM systems.
          </p>
          <div class="flex gap-4">
            <UButton
              variant="ghost"
              color="neutral"
              size="sm"
              icon="i-lucide-linkedin"
              to="https://www.linkedin.com/company/collaborall/posts/?feedView=all"
              target="_blank"
            />
          </div>
        </div>

        <!-- Product and Company sections hidden for now - remove v-if="false" to re-enable -->
        <div v-if="false">
          <h4 class="font-semibold mb-4">Product</h4>
          <ul class="space-y-3">
            <li><a href="#features" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Features</a></li>
            <li><a href="#integrations" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</a></li>
          </ul>
        </div>

        <div v-if="false">
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
          2025 ANT by collaborall & Witteveen+Bos. All rights reserved.
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
</template>
