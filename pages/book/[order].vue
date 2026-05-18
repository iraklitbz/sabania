<script setup lang="ts">
import CardSmall from "~/components/Cards/CardSmall.vue";
import { apartments } from "~/store/apartments";
import CheckoutForm from "~/components/CheckoutForm.vue";
import PayPalButton from "~/components/PayPalButton.vue";
definePageMeta({
  middleware: "route-change",
});
</script>
<template>
  <section
    class="relative max-w-7xl mx-auto p-6 lg:px-8 min-h-[calc(100vh-11.55rem)]"
  >
    <nuxt-link
      v-if="apartments()?.apartment.slug"
      :to="`/${apartments()?.apartment.slug}`"
      class="text-saba-primary mb-5 flex items-center"
    >
      <Icon name="chevron-left" class="text-3xl text-saba-primary" />
      Zurück
    </nuxt-link>
    <div class="flex flex-col gap-6 md:gap-12 lg:flex-row items-start">
      <div class="order-2 lg:order-1 lg:w-6/12">
        <h2 class="text-xl mb-10">
          Ihr Buch ist für:
          <span class="font-bold">
            {{ apartments()?.apartment.name }}
          </span>
          <span class="text-lg xl:text-2xl mt-4 block">
            {{ apartments()?.apartment.shortDescription }}
          </span>
        </h2>
        <CheckoutForm />
      </div>
      <aside
        class="order-1 lg:order-2 lg:w-6/12 lg:sticky lg:top-6 relative overflow-hidden rounded-3xl border border-saba-primary/20 bg-white shadow-2xl shadow-saba-primary/10"
      >
        <div class="h-1.5 w-full bg-gradient-to-r from-saba-darker via-saba-primary to-saba-dark" />
        <div class="p-8">
          <CardSmall
            :apartment="apartments()?.apartment"
            :checkin-date="apartments()?.checkinDate.toString()"
            :checkout-date="apartments()?.checkoutDate.toString()"
            :travelers="apartments()?.travelers"
            :total-price="apartments()?.getTotalPrice"
            :calculate-nights="apartments()?.calculateNights"
            :calculate-total-price="apartments()?.calculateTotalPrice"
            :discount-price="apartments().getTotalPriceWithDiscount"
          />
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped></style>
