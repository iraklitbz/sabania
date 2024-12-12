<script setup lang="ts">
import { apartments } from "~/store/apartments";
import { format } from "@formkit/tempo";
import { currencyFormat } from "../../utils/currency-utils";
</script>
<template>
  <div class="flex flex-col gap-10">
    <div class="flex gap-5">
      <figure class="rounded-xl overflow-hidden w-32 h-32 block shrink-0">
        <nuxt-img
          :src="apartments()?.apartment.feature.url"
          :alt="apartments()?.apartment.feature.name"
          class="object-cover w-full h-full"
          width="400"
          height="200"
        />
      </figure>
      <div class="w-full">
        <h2 class="text-lg xl:text-xl mb-2">
          {{ apartments()?.apartment.name }}
        </h2>
        <h2 class="text-lg xl:text-xl font-bold">
          {{ apartments()?.apartment.shortDescription }}
        </h2>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 gap-5 lg:gap-10">
      <div class="whitespace-nowrap">
        <p class="font-bold mb-2">Selected dates</p>
        <p><b>From:</b> {{ format(apartments()?.checkinDate, "medium") }}</p>
        <p><b>To:</b> {{ format(apartments()?.checkoutDate, "medium") }}</p>
      </div>
      <div class="">
        <p class="font-bold mb-2">Travelers</p>
        <p>{{ apartments()?.travelers }} Travelers</p>
      </div>
      <div class="lg:text-right">
        <p class="font-bold mb-2">Price details:</p>
        <p>
          {{ currencyFormat(apartments()?.totalPrice) }} x

        </p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <span> Total (EUR) </span>
      <span class="text-xl xl:text-2xl font-bold mt-1">
        {{ currencyFormat(apartments().calculateTotalPrice) }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
