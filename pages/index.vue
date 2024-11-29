<script setup lang="ts">
  import {locations} from "~/store/locations"
  import CardDefault from '~/components/Cards/CardDefault.vue'
  await locations().fetchLocations()
</script>


<template>
    <main>
      <Hero />
      <section
        class="max-w-xl md:max-w-[1120px] mx-auto"
      >
          <div
            class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 "
          >
            <CardDefault
              v-for="(location, index) in locations().locations"
              :key="index"
              :data="location"
            />
          </div>
      </section>
    </main>
</template>