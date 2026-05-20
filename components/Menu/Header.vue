<script setup lang="ts">
import { settings } from "~/store/settings";
const token = useStrapiToken();
</script>
<template>
  <div class="absolute left-0 right-0 top-2 z-40 pt-14">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="flex items-center justify-between">
          <nuxt-link class="text-2xl" to="/"> Sabania </nuxt-link>
          <div class="flex items-center gap-x-4">
            <nuxt-link
              class="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1.5 text-sm transition bg-saba-light text-saba-primary hover:bg-saba-light/80"
              :to="token ? '/account' : '/login'"
            >
              <svg v-if="!token" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z" clip-rule="evenodd"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/>
              </svg>
              <span>{{ token ? 'Konto' : 'Login' }}</span>
            </nuxt-link>
            <nuxt-link
              class="inline-flex rounded-full px-4 py-1.5 text-sm transition bg-saba-primary text-white hover:bg-saba-dark"
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
