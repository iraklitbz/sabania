<script setup lang="ts"></script>
<template>
  <div class="relative w-full min-h-[600px] flex items-center bg-saba-primary overflow-hidden">
    <!-- Background subtle pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-saba-primary via-saba-primary to-saba-dark"></div>

    <div class="relative z-10 max-w-7xl mx-auto p-6 lg:px-8 py-20">
      <div class="flex flex-col md:flex-row md:items-center gap-10 mb-10">
        <!-- Left -->
        <div class="flex-1">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-saba-light leading-tight">
            Ankommen.<br />
            Abschalten.<br />
            <span class="text-white">Wohlfühlen.</span>
          </h1>
        </div>
        <!-- Right -->
        <div class="flex-1">
          <p class="text-xl font-semibold text-white mb-3">Willkommen bei Sabania</p>
          <p class="text-lg text-saba-light/80 mb-4">Ihr Zuhause auf Zeit – komfortabel, flexibel, unkompliziert</p>
          <p class="text-lg text-saba-light/80 leading-relaxed">Ob für Monteure, Geschäftsreisende oder längere Aufenthalte: Bei uns finden Sie moderne Zimmer, eine entspannte Atmosphäre und alles, was Sie für einen angenehmen Aufenthalt brauchen.</p>
        </div>
      </div>
      <!-- CTA -->
      <nuxt-link
        to="/location"
        class="inline-flex items-center gap-2 bg-saba-light hover:bg-white text-saba-primary font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-base"
      >
        👉 Jetzt anfragen und Zimmer sichern
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>
