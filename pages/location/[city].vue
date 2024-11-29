<script setup lang="ts">
import { locations } from "~/store/locations"
import { apartments } from "~/store/apartments"
import CardApartments from "~/components/Cards/CardApartments.vue";
const route = useRoute()
await locations().fetchLocation(route.params.city as string)
if (!locations().location || Object.keys(locations().location).length === 0) {
  navigateTo('/404')
}
if (Object.keys(locations().location).length > 0) {
  await apartments().fetchApartmentsByLocal(route.params.city as string)
}
</script>

<template>
  <div
    v-if="locations().location"
  >
    <h2>
      {{ locations().location.city }}
    </h2>
    <section
      class="max-w-xl md:max-w-[1120px] mx-auto"
    >
      <div
        class="mt-10 grid
        gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3"
      >
        <CardApartments
          v-for="(apartment, index) in apartments().apartments"
          :key="index"
          :data="apartment"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>