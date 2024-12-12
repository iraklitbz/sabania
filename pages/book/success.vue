<script setup lang="ts">
  import CardSmall from "~/components/Cards/CardSmall.vue";
  import {apartments} from "~/store/apartments";
  import CheckoutForm from "~/components/CheckoutForm.vue";
</script>

<template>
  <section
      class="relative max-w-7xl mx-auto p-6 lg:px-8"
  >
    <nuxt-link
        to="/"
        class="text-blue-500 mb-5 flex items-center"
    >
      <Icon name="icon:chevron-left" class="text-3xl text-black" />
      Home
    </nuxt-link>
    <div class="flex flex-col gap-6 md:gap-12 lg:flex-row items-start">
      <div class="lg:w-6/12">
        <h2 class="text-xl mb-3 font-bold">
          Thanks for booking with us!
        </h2>
        <p>You will get details soon by email</p>
      </div>
      <aside class="lg:w-6/12 bg-white border border-solid border-gray-300 p-4 rounded-2xl shadow-xl">
        <CardSmall />
      </aside>
    </div>
  </section>
</template>

<style scoped>

</style>