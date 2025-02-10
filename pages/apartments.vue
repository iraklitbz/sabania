<script setup lang="ts">
import MainHeadline from "~/components/Headline/MainHeadline.vue";
import { apartments } from "~/store/apartments";
await apartments().fetchApartments();
</script>

<template>
  <main>
    <MainHeadline
      :title="'Wohnungen'"
      :description="'Entdecken Sie unsere sorgfältig eingerichteten Apartments, die keine Wünsche offenlassen. Zentral gelegen oder mit großzügiger Terrasse – bei Sabania finden Sie Ihre perfekte Unterkunft für jeden Anlass.'"
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
            Unsere Wohnungen
          </h2>
        </div>
        <div class="lg:col-span-3">
          <ul
            role="list"
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          >
            <li
              v-for="(apartment, index) in apartments().apartments"
              :key="index"
            >
              <nuxt-link :to="`/${apartment.slug}`">
                <div
                  class="group relative overflow-hidden rounded-3xl bg-neutral-100"
                >
                  <nuxt-img
                    class="h-96 w-full object-cover grayscale group-hover:grayscale-0 transition duration-500 motion-safe:group-hover:scale-105"
                    :src="apartment.feature.url"
                    :alt="apartment.feature.name"
                  />
                  <div
                    class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6"
                  >
                    <p
                      v-if="apartment?.location && apartment?.location?.city"
                      class="mt-2 text-sm text-white font-bold"
                    >
                      {{ apartment.location?.city }}
                    </p>
                    <p
                      class="font-display text-base/6 font-semibold tracking-wide text-white"
                    >
                      {{ apartment.name }}
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
