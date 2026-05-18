<script setup lang="ts">
const props = defineProps<{
  data: {
    city: string;
    slug: string;
    feature?: { name?: string; url?: string };
    name?: string;
  };
}>();
</script>

<template>
  <nuxt-link
    :to="`/location/${props.data.slug}`"
    class="group flex flex-col rounded-3xl overflow-hidden bg-white border border-saba-primary/10 shadow-lg shadow-saba-primary/5 hover:shadow-2xl hover:shadow-saba-primary/15 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
  >
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3]">
      <img
        :src="props.data?.feature?.url"
        :alt="props.data?.feature?.name || props.data.city"
        class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-saba-darker/60 via-transparent to-transparent" />
      <div class="absolute bottom-4 left-5">
        <p class="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">Reiseziel</p>
        <h2 class="text-xl font-bold text-white leading-tight">{{ props.data.city }}</h2>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
