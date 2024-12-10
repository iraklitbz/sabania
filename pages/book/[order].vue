<script setup lang="ts">
import CardSmall from "~/components/Cards/CardSmall.vue"
import CheckoutForm from "~/components/CheckoutForm.vue"
import {checkout} from "~/store/checkout"
import { format } from "@formkit/tempo";
</script>

<template>
  <section
      class="relative max-w-5xl mx-auto p-6 lg:px-8"
  >
    <nuxt-link
        v-if="checkout()?.apartment.slug"
        :to="`/${checkout()?.apartment.slug}`"
        class="text-blue-500 mb-5 flex items-center"
    >
      <Icon name="icon:chevron-left" class="text-3xl text-black" />
        {{ checkout()?.apartment.name }}
    </nuxt-link>
    <div class="flex flex-col gap-6 md:gap-12 lg:flex-row items-start">
      <div class="lg:w-6/12">
        <h2 class="text-xl mb-10">
          Your book is for:
          <span class="block mt-2 font-bold">{{ checkout()?.apartment.name }}</span>
        </h2>
        <div
          class="mt-10"
        >
          <h2 class="mb-2 font-bold">Your data</h2>
          <CheckoutForm />
        </div>
      </div>
      <aside class="lg:w-6/12 bg-white border border-solid border-gray-300 p-4 rounded-2xl shadow-xl">
        <CardSmall
            :data="checkout()?.apartment"
            :check-in="checkout()?.checkinDate"
            :check-out="checkout()?.checkoutDate"
        />
      </aside>
    </div>
  </section>
</template>

<style scoped>

</style>