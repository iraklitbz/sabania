<script setup lang="ts"></script>

<template>
  <footer class="bg-neutral-950 text-neutral-400 py-8 px-6">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-neutral-300 font-semibold">Sabania</p>
      <div class="flex items-center gap-6 text-sm">
        <nuxt-link to="/impressum" class="hover:text-neutral-200 transition-colors">Impressum</nuxt-link>
        <nuxt-link to="/agb" class="hover:text-neutral-200 transition-colors">AGB</nuxt-link>
      </div>
      <p class="text-xs text-neutral-600">© {{ new Date().getFullYear() }} SabaNia GmbH</p>
    </div>
  </footer>
</template>
