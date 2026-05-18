<script setup lang="ts">
import { currencyFormat } from "~/utils/currency-utils";

const props = defineProps<{
  data: {
    name: string;
    slug: string;
    shortDescription?: string;
    feature: { name: string; url: string };
    price?: { basePrice?: number };
    rooms?: { guests?: number; rooms?: number; beds?: number };
    location?: { city?: string };
  };
}>();
</script>

<template>
  <nuxt-link
    :to="`/${props.data.slug}`"
    class="group flex flex-col rounded-3xl overflow-hidden bg-white border border-saba-primary/10 shadow-lg shadow-saba-primary/5 hover:shadow-2xl hover:shadow-saba-primary/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
  >
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3]">
      <nuxt-img
        :src="props.data.feature.url"
        :alt="props.data.feature.name"
        class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
        width="600"
        height="450"
      />
      <!-- Price badge -->
      <div v-if="props.data?.price?.basePrice" class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
        <span class="text-sm font-bold text-saba-darker">{{ currencyFormat(props.data.price.basePrice) }}</span>
        <span class="text-xs text-saba-primary/50"> / Nacht</span>
      </div>
      <!-- Location badge -->
      <div v-if="props.data?.location?.city" class="absolute top-4 left-4 bg-saba-darker/80 backdrop-blur-sm rounded-full px-3 py-1.5">
        <span class="text-xs font-semibold text-white uppercase tracking-widest">{{ props.data.location.city }}</span>
      </div>
    </div>

    <!-- Info -->
    <div class="flex flex-col gap-3 p-5">
      <div>
        <h2 class="text-lg font-bold text-saba-darker leading-snug">{{ props.data.name }}</h2>
        <p v-if="props.data?.shortDescription" class="mt-1 text-sm text-saba-primary/60 line-clamp-2">{{ props.data.shortDescription }}</p>
      </div>

      <!-- Stats -->
      <div v-if="props.data?.rooms" class="flex items-center gap-3 text-xs text-saba-primary/50 pt-1 border-t border-saba-primary/10">
        <span v-if="props.data.rooms.guests" class="flex items-center gap-1">
          <Icon name="user" class="text-sm" />
          {{ props.data.rooms.guests }} Gäste
        </span>
        <span v-if="props.data.rooms.rooms" class="flex items-center gap-1">
          <Icon name="kitchen" class="text-sm" />
          {{ props.data.rooms.rooms }} Zimmer
        </span>
        <span v-if="props.data.rooms.beds" class="flex items-center gap-1">
          <Icon name="bed" class="text-sm" />
          {{ props.data.rooms.beds }} Betten
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
