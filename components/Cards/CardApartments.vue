<script setup lang="ts">
const props = defineProps<{
  data: {
    name: string,
    slug: string,
    feature: {
      name: string,
      url: string
    }
  }
}>()
</script>

<template>
  <div class="group cursor-pointer">
    <div class=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   ">
      <nuxt-link
          class="relative block aspect-square"
          :to="`/${props.data.slug}`"
      >
        <nuxt-img
            :alt="props.data.feature.name"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="object-cover transition-all absolute h-full w-full text-transparent inset-0"
            sizes="(max-width: 768px) 30vw, 33vw"
            :src="props.data.feature.url"
        />
      </nuxt-link>
    </div>
    <nuxt-link :to="`/${props.data.slug}`">
      <div>
        <div class="flex gap-3">
         <span class="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
            Apartment
          </span>
        </div>
        <h2 class="text-lg lg:text-xl xl:text-2xl font-semibold leading-snug tracking-tight mt-2">
          <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {{ props.data.name }}
            </span>
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>