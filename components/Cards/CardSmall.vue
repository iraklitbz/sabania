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
        <h2 class="text-lg xl:text-xl font-bold">
          {{ props.apartment.shortDescription }}
        </h2>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 gap-5 lg:gap-10">
      <div class="whitespace-nowrap">
        <p class="font-bold mb-2">Selected dates</p>
        <p><b>From:</b> {{ format(new Date(props.checkinDate), "medium") }}</p>
        <p><b>To:</b> {{ format(new Date(props.checkoutDate), "medium") }}</p>
      </div>
      <div class="">
        <p class="font-bold mb-2">Travelers</p>
        <p>{{ props.travelers }} Travelers</p>
      </div>
      <div class="lg:text-right">
        <p class="font-bold mb-2">Price details:</p>
        <p>
          {{ currencyFormat(props.totalPrice) }} x {{ props.calculateNights }}
        </p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <span> Total (EUR) </span>
      <span class="text-xl xl:text-2xl font-bold mt-1">
        {{ currencyFormat(props.calculateTotalPrice) }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
