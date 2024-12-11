<script setup lang="ts">
  const props = defineProps<{
    data: {
      city: string,
      slug: string
    }
  }>()
</script>

<template>
  <nuxt-link
      class="group cursor-pointer"
      :to="`/location/${props.data.slug}`"
  >
    <div class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   ">
      <figure
          class="relative block aspect-square"
      >
        <img alt="Thumbnail" loading="lazy" decoding="async" data-nimg="fill" class="object-cover transition-all absolute h-full w-full text-transparent inset-0" sizes="(max-width: 768px) 30vw, 33vw" src="https://picsum.photos/200/300">
      </figure>
    </div>
    <div class="">
      <div>
        <div class="flex gap-3">
           <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
              Location
            </span>
        </div>
        <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2">
          <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {{ props.data.city }}
            </span>
        </h2>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>