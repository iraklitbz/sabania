<script setup lang="ts">
  const props = defineProps<{
    data: {
      city: string,
      slug: string
    }
  }>()
</script>

<template>
  <div class="group cursor-pointer">
    <div class=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   ">
      <nuxt-link
          class="relative block aspect-square"
          :to="`/location/${props.data.slug}`"
      >
        <img alt="Thumbnail" loading="lazy" decoding="async" data-nimg="fill" class="object-cover transition-all absolute h-full w-full text-transparent inset-0" sizes="(max-width: 768px) 30vw, 33vw" src="https://picsum.photos/200/300">
      </nuxt-link>
    </div>
    <div class="">
      <div>
        <div class="flex gap-3">
          <nuxt-link
              :to="`/location/${props.data.slug}`"
          >
            <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
              Location
            </span>
          </nuxt-link>
        </div>
        <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2">
          <nuxt-link
              :to="`/location/${props.data.slug}`"
          >
            <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {{ props.data.city }}
            </span>
          </nuxt-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>