<script setup lang="ts">
import {checkout} from "~/store/checkout"
import {format} from "@formkit/tempo";
import {currencyFormat} from "../../utils/currency-utils";
const props = defineProps<{
  data: {
    name: string,
    description: string,
    price: number,
    feature: {
      name: string,
      url: string
    }
  },
  checkIn: string,
  checkOut: string
}>()
console.log(props.data)
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex gap-5">
      <figure
          class="rounded-xl overflow-hidden w-32 h-32 block shrink-0"
      >
        <nuxt-img
            :src="data?.feature.url"
            :alt="data?.feature.name"
            class="object-cover w-full h-full"
            width="400"
            height="200"
        />
      </figure>
      <div
        class="w-full"
      >
        <h2 class="text-lg font-bold">{{ data.name }}</h2>
      </div>
    </div>
    <div>
      <p class="font-bold mb-2">Selected dates</p>
      <p><b>Check-in:</b> {{ format(checkout()?.checkinDate, "medium") }}</p>
      <p><b>Check-Out:</b> {{ format(checkout()?.checkoutDate, "medium") }}</p>
    </div>
    <div>
      <p class="font-bold">Travelers</p>
      <p>{{ checkout()?.travelers }} Travelers</p>
    </div>
    <div>
      <h2 class="text-lg font-bold mb-4">Price details:</h2>
      <div
          class="flex justify-between items-start gap-3"
      >
        <span> {{ currencyFormat(props.data.price) }} x {{ checkout().calculateNights }} nights </span>
          <div
            class="flex flex-col items-end"
          >
            <span> Total (EUR) </span>
            <span class="font-bold text-2xl mt-1"> {{currencyFormat(checkout().calculateTotalPrice)}} </span>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>