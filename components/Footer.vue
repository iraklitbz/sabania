<script setup lang="ts"></script>

<template>
  <footer class="bg-gradient-to-r from-saba-primary to-saba-dark text-saba-light/70 py-8 px-6">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-saba-light font-semibold">Sabania</p>
      <div class="flex items-center gap-6 text-sm">
        <nuxt-link to="/impressum" class="hover:text-white transition-colors">Impressum</nuxt-link>
        <nuxt-link to="/agb" class="hover:text-white transition-colors">AGB</nuxt-link>
      </div>
      <p class="text-xs text-saba-light/50">© {{ new Date().getFullYear() }} SabaNia GmbH</p>
    </div>
  </footer>
</template>
