<script setup lang="ts">
const props = defineProps<{
  data: {
    name: string;
    slug: string;
    feature: {
      name: string;
      url: string;
    };
  };
}>();
</script>

<template>
  <nuxt-link class="flex gap-3 justify-start" :to="`/${props.data.slug}`">
    <div>
      <figure class="aspect-square w-20 h-20">
        <nuxt-img
          :alt="props.data.feature.name"
          class="object-cover w-full h-full rounded-md"
          :src="props.data.feature.url"
        />
      </figure>
    </div>
    <div class="">
      <div>
        <span
          class="inline-block text-xs font-medium tracking-wider uppercase text-emerald-700"
        >
          Apartment
        </span>
        <h2 class="text-lg">
          {{ props.data.name }}
        </h2>
        <span class=" text-base">
          {{ currencyFormat(props.data.price) }} /Night
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
