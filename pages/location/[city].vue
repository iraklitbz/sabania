<script setup lang="ts">
import { locations } from "~/store/locations"
import { apartments } from "~/store/apartments"
import CardApartments from "~/components/Cards/CardApartments.vue";
import Maps from "~/components/Maps.vue";
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
  <div>
    <section
        v-if="locations().location"
        class="relative max-w-7xl mx-auto p-6 lg:px-8"
    >
      <h2
          class="text-center mt-10 text-2xl font-bold"
      >
        {{ locations().location.city }}
      </h2>
      <Breadcumbs
        :name="locations().location.city"
      />
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
    <div
        class="mt-10"
    >
      <Maps
        :city-location="{
          lat: locations().location.latitude,
          lng: locations().location.longitude
        }"
        :apartaments-location="apartments().apartments"
      />
    </div>
  </div>
</template>

<style scoped>

</style>