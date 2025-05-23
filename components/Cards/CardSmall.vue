<script setup lang="ts">
import type { ApartmentSabania } from "~/types/sabania-types";
import { format } from "@formkit/tempo";
const props = defineProps<{
  apartment: ApartmentSabania;
  checkinDate: string;
  checkoutDate: string;
  travelers: number;
  totalPrice: number;
  calculateNights: number;
  calculateTotalPrice: number;
  discountPrice?: number;
}>();
</script>
<template>
  <div class="flex flex-col gap-10">
    <div class="flex gap-5">
      <figure class="rounded-xl overflow-hidden w-32 h-32 block shrink-0">
        <nuxt-img
          :src="props.apartment.feature.url"
          :alt="props.apartment.feature.name"
          class="object-cover w-full h-full"
          width="400"
          height="200"
        />
      </figure>
      <div class="w-full">
        <h2 class="text-lg xl:text-xl mb-2">
          {{ props.apartment.name }}
        </h2>
        <h2 class="text-lg xl:text-xl">
          {{ props.apartment.shortDescription }}
        </h2>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 gap-5 lg:gap-10">
      <div class="whitespace-nowrap">
        <p class="mb-2">Ausgewählte tage</p>
        <p><b>Von:</b> {{ format(new Date(props.checkinDate), "medium") }}</p>
        <p><b>Bis:</b> {{ format(new Date(props.checkoutDate), "medium") }}</p>
      </div>
      <div class="">
        <p class="mb-2">Reisende</p>
        <p>{{ props.travelers }} Reisende</p>
      </div>
      <div class="lg:text-right">
        <p class=" mb-2">Preisdetails:</p>
        <p>
          {{ currencyFormat(props.totalPrice) }} x {{ props.calculateNights }}
        </p>
      </div>
    </div>
    <div v-if="props.calculateTotalPrice === props.discountPrice" class="flex flex-col items-end">
      <span> Gesamt (EUR) </span>
      <span class="text-xl xl:text-2xl mt-1">
        {{ currencyFormat(props.calculateTotalPrice) }}
      </span>
    </div>
    <div v-else class="flex flex-col items-end">
      <span> Gesamt (EUR) </span>
      <span class="text-xl xl:text-2xl mt-1">
        {{ currencyFormat(props.discountPrice) }}
      </span>
      <span class="text-sm text-green-800 mt-1">
        You saved <b>{{ currencyFormat(props.calculateTotalPrice - props.discountPrice) }}</b> with this booking
      </span>
    </div>
  </div>
</template>

<style scoped></style>
