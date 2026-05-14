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
  <div class="flex flex-col gap-8">

    <!-- Bild + Name -->
    <div class="flex gap-4 items-center">
      <figure class="rounded-2xl overflow-hidden w-28 h-28 shrink-0 shadow-md shadow-saba-primary/15">
        <nuxt-img
          :src="props.apartment.feature.url"
          :alt="props.apartment.feature.name"
          class="object-cover w-full h-full"
          width="400"
          height="200"
        />
      </figure>
      <div>
        <p class="text-xs font-semibold tracking-widest uppercase text-saba-primary/50 mb-1">Ihre Buchung</p>
        <h2 class="text-lg font-bold text-saba-darker leading-tight">
          {{ props.apartment.name }}
        </h2>
        <p class="text-sm text-saba-primary/60 mt-1">
          {{ props.apartment.shortDescription }}
        </p>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent" />

    <!-- Detalles -->
    <div class="grid grid-cols-3 gap-4 text-sm">
      <div class="flex flex-col gap-1">
        <p class="text-xs font-semibold uppercase tracking-wider text-saba-primary/40">Reisedaten</p>
        <p class="font-medium text-saba-darker">{{ format(new Date(props.checkinDate), "medium") }}</p>
        <p class="font-medium text-saba-darker">{{ format(new Date(props.checkoutDate), "medium") }}</p>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-xs font-semibold uppercase tracking-wider text-saba-primary/40">Reisende</p>
        <p class="font-medium text-saba-darker">{{ props.travelers }} Pers.</p>
      </div>
      <div class="flex flex-col gap-1 text-right">
        <p class="text-xs font-semibold uppercase tracking-wider text-saba-primary/40">Preis</p>
        <p class="font-medium text-saba-darker">{{ currencyFormat(props.totalPrice) }}</p>
        <p class="text-saba-primary/50">× {{ props.calculateNights }} Nächte</p>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent" />

    <!-- Gesamtpreis ohne Rabatt -->
    <div v-if="props.calculateTotalPrice === props.discountPrice" class="flex items-end justify-between">
      <p class="text-sm text-saba-primary/50">Gesamt (EUR)</p>
      <p class="text-2xl font-bold text-saba-darker">
        {{ currencyFormat(props.calculateTotalPrice) }}
      </p>
    </div>

    <!-- Gesamtpreis mit Rabatt -->
    <div v-else class="flex items-end justify-between">
      <div class="flex flex-col gap-1">
        <p class="text-sm text-saba-primary/50">Gesamt (EUR)</p>
        <span class="inline-flex items-center gap-1.5 bg-saba-success/10 text-saba-success text-xs font-semibold px-2.5 py-1 rounded-full">
          <span class="w-1.5 h-1.5 rounded-full bg-saba-success"></span>
          Ersparnis: {{ currencyFormat(props.calculateTotalPrice - props.discountPrice) }}
        </span>
      </div>
      <div class="text-right">
        <p class="text-sm line-through text-saba-primary/30">{{ currencyFormat(props.calculateTotalPrice) }}</p>
        <p class="text-2xl font-bold text-saba-darker">{{ currencyFormat(props.discountPrice) }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
