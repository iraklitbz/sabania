<script setup lang="ts">
import CardSmall from "~/components/Cards/CardSmall.vue"
import CheckoutForm from "~/components/CheckoutForm.vue"
import {apartments} from "~/store/apartments"
definePageMeta({
  middleware: 'route-change'
})
</script>

<template>
  <section
      class="relative max-w-7xl mx-auto p-6 lg:px-8"
  >
    <nuxt-link
        v-if="apartments()?.apartment.slug"
        :to="`/${apartments()?.apartment.slug}`"
        class="text-blue-500 mb-5 flex items-center"
    >
      <Icon name="icon:chevron-left" class="text-3xl text-black" />
        {{ apartments()?.apartment.name }}
    </nuxt-link>
    <div class="flex flex-col gap-6 md:gap-12 lg:flex-row items-start">
      <div class="lg:w-6/12">
        <h2 class="text-xl mb-10">
          Your book is for:
          <span class="text-xl lg:text-2xl xl:text-3xl mt-2 font-bold block">{{ apartments()?.apartment.name }}</span>
        </h2>
        <div
          class="mt-10"
        >
          <h2 class="mb-2 font-bold">Your data</h2>
          <CheckoutForm />
        </div>
      </div>
      <aside class="lg:w-6/12 bg-white border border-solid border-gray-300 p-4 rounded-2xl shadow-xl">
        <CardSmall />
      </aside>
    </div>
  </section>
</template>

<style scoped>

</style>