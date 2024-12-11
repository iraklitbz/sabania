<script setup lang="ts">
import type { Apartments } from '~/types/locale-types'
import {GoogleMap, AdvancedMarker, InfoWindow} from "vue3-google-map"
import CardXS from "~/components/Cards/CardXS.vue";
const config = useRuntimeConfig()
const props = defineProps<{
  cityLocation: {
    lat: number
    lng: number
  },
  apartamentsLocation : Apartments[]
}>()

const handleMarkerClick = (apartment: Apartments) => {
  console.log(apartment)
}
</script>

<template>
  <client-only>
    <GoogleMap
        :api-key="config.public.GOOGLE_MAPS_API_KEY"
        :mapId="config.public.GOOGLE_MAPS_ID"
        style="width: 100%; height: 500px"
        :center="{
          lat: Number(props.cityLocation.lat), lng: Number(props.cityLocation.lng)
        }"
        :zoom="props.apartamentsLocation && props.apartamentsLocation.length > 0 ? 13 : 16"
    >
      <div
        v-if="props.apartamentsLocation && props.apartamentsLocation.length > 0"
      >
        <AdvancedMarker
            v-for="(apartment, index) in props.apartamentsLocation"
            :key="index"
            :options="{
            position: {
              lat: Number(apartment.address.latitude), lng: Number(apartment.address.longitude)
            }
          }"
            @click="handleMarkerClick(apartment)"
        >
          <InfoWindow>
            <CardXS
                :data="apartment"
            />
          </InfoWindow>

        </AdvancedMarker>
      </div>
      <div
          v-else
      >
        <AdvancedMarker
            :options="{
              position: {
                lat: Number(props.cityLocation.lat), lng: Number(props.cityLocation.lng)
              }
            }"
        >

        </AdvancedMarker>
      </div>
    </GoogleMap>
  </client-only>
</template>

<style scoped>

</style>