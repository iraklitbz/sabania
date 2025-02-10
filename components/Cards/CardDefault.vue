<script setup lang="ts">
const props = defineProps<{
  data: {
    city: string;
    slug: string;
  };
}>();
console.log(props.data)
</script>
<template>
  <nuxt-link class="group cursor-pointer" :to="`/location/${props.data.slug}`">
    <div
      class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105"
    >
      <figure class="relative block aspect-square">
        <img
          :alt="props?.data?.name"
          class="object-cover transition-all absolute h-full w-full text-transparent inset-0"
          :src="props?.data?.feature?.url"
        />
      </figure>
    </div>
    <div class="">
      <div>
        <div class="flex gap-3">
          <span
            class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-emerald-700"
          >
            Städt
          </span>
        </div>
        <h2
          class="text-lg lg:text-xl xl:text-2xl leading-snug tracking-tight mt-2"
        >
          <span
            class="bg-gradient-to-r from-green-200 font-normal to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
          >
            {{ props.data.city }}
          </span>
        </h2>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
