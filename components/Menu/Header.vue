<script setup lang="ts">
import { settings } from "~/store/settings";
</script>
<template>
  <div class="absolute left-0 right-0 top-2 z-40 pt-14">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="flex items-center justify-between">
          <nuxt-link class="text-2xl" to="/"> Sabania </nuxt-link>
          <div class="flex items-center gap-x-8">
            <nuxt-link
              class="inline-flex rounded-full px-4 py-1.5 text-sm transition bg-neutral-950 text-white hover:bg-neutral-800"
              to="/contact"
            >
              <span class="relative top-px"> Kontakt </span>
            </nuxt-link>
            <button
              type="button"
              class="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
              @click="settings().toggleMenu()"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
              >
                <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
