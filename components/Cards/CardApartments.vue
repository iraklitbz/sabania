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
  <div class="group cursor-pointer">
    <div
      class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105"
    >
      <nuxt-link
        class="relative block aspect-square"
        :to="`/${props.data.slug}`"
      >
        <nuxt-img
          :alt="props.data.feature.name"
          class="object-cover transition-all absolute h-full w-full text-transparent inset-0"
          :src="props.data.feature.url"
        />
      </nuxt-link>
    </div>
    <nuxt-link :to="`/${props.data.slug}`">
      <div>
        <div class="flex gap-3 justify-between">
          <span
            class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-500"
          >
            Wohnungen
          </span>
        </div>
        <h2
            class="inline-block text-lg lg:text-xl font-medium tracking-wider mt-5 bg-blue-500 text-white py-1 px-4 rounded-2xl"
        >
            {{ props.data.name }}
          </h2>
        <h2
          class="text-lg lg:text-xl xl:text-2xl font-semibold leading-snug tracking-tight mt-3"
        >
          <span
            class="bg-gradient-to-r from-blue-200 to-blue-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
          >
            {{ props.data?.shortDescription }}
          </span>
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped></style>
