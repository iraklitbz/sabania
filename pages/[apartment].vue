<script setup lang="ts">
import { apartments } from "~/store/apartments"
const route = useRoute()
await apartments().fetchApartment(route.params.apartment as string)
if (!apartments().apartment || Object.keys(apartments().apartment).length === 0) {
  navigateTo('/404')
}
</script>

<template>
  <div
    v-if="apartments().apartment"
    class="min-h-96 bg-red-100 w-full"
  >
    <h2>{{ apartments().apartment.name }}}</h2>
  </div>
</template>

<style scoped>

</style>