<script setup lang="ts">
import MainHeadline from "~/components/Headline/MainHeadline.vue";
import { locations } from "~/store/locations";
await locations().fetchLocations();
</script>

<template>
  <main>
    <MainHeadline
      :title="'Städte'"
      :description="'Ihr Partner für außergewöhnliche Unterkünfte. Wir bieten stilvolle Apartments in verschiedenen Städten, perfekt für Ihren nächsten Aufenthalt. Ob für einen Kurzurlaub oder eine Geschäftsreise – bei uns finden Sie die passende Unterkunft.'"
    />
    <div class="mx-auto max-w-7xl px-6 lg:px-8 lg:mt-20 pb-20">
      <div
        class="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
      ></div>
      <div
        class="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8"
      >
        <div>
          <h2 class="font-display text-2xl font-semibold text-neutral-950">
            Unsere Städte
          </h2>
        </div>
        <div class="lg:col-span-3">
          <ul
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          >
            <li v-for="(location, index) in locations().locations" :key="index">
              <nuxt-link :to="`/location/${location.slug}`">
                <div
                  class="group relative overflow-hidden rounded-3xl bg-neutral-100"
                >
                  <img
                    class="h-96 w-full object-cover grayscale group-hover:grayscale-0 transition duration-500 motion-safe:group-hover:scale-105"
                    :src="location?.feature?.url"
                  />

                  <div
                    class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6"
                  >
                    <p
                      class="font-display text-base/6 font-semibold tracking-wide text-white"
                    >
                      {{ location.city }}
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
