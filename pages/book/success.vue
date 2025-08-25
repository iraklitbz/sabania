<script setup lang="ts">
import CardSmall from "~/components/Cards/CardSmall.vue";
import {orderRegister} from "~/store/orderRegister";
if(orderRegister().getDataIsExpired) {
  orderRegister().cleanOrderData()
}
</script>
<template>
  <section v-if="Object.keys(orderRegister().currentOrder).length && Object.keys(orderRegister().currentApartment).length && !orderRegister().getDataIsExpired" class="relative max-w-7xl mx-auto p-6 lg:px-8">
    <nuxt-link to="/" class="text-blue-500 mb-5 flex items-center">
      <ChevronLeft class="text-3xl text-black" />
      Home
    </nuxt-link>
    <div class="flex flex-col gap-6 md:gap-12 lg:flex-row items-start">
      <div class="lg:w-6/12">
        <h2 v-if="orderRegister().currentOrder.orderID">Order ID #{{ orderRegister().currentOrder.orderID }}</h2>
        <h2 class="text-xl mb-3 font-bold">Thanks for booking with us! <span v-if="orderRegister().currentOrder.fullName">{{ orderRegister().currentOrder.fullName }}</span></h2>
        <p v-if="orderRegister().currentOrder.email">
          We will send your soon a confirmation email and the billing at {{ orderRegister().currentOrder.email }}
        </p>
      </div>
      <aside
        class="lg:w-6/12 bg-white border border-solid border-gray-300 p-4 rounded-2xl shadow-xl"
      >
        <CardSmall
          :apartment="orderRegister().currentApartment.apartment"
          :checkin-date="orderRegister().currentApartment.checkinDate"
          :checkout-date="orderRegister().currentApartment.checkoutDate"
          :travelers="orderRegister().currentApartment.travelers"
          :total-price="orderRegister().currentApartment.totalPrice"
          :calculate-nights="orderRegister().currentApartment.calculateNights"
          :calculate-total-price="orderRegister().currentApartment.calculateTotalPrice"
          :discount-price="orderRegister().currentApartment.discountPrice"
        />
      </aside>
    </div>
  </section>
  <div
    v-else
    class="flex flex-col items-center justify-center py-20"
  >
    <p class="text-2xl mb-2">No order found</p>
    <nuxt-link to="/" class="text-blue-500 ml-2">Back home</nuxt-link>
  </div>
</template>

<style scoped></style>
