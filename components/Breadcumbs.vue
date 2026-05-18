<script setup lang="ts">
const props = defineProps<{
  name: string;
  prev?: {
    name: string;
    slug: string;
  };
}>();
</script>
<template>
  <div>
    <ul
      class="flex flex-wrap gap-2 items-center text-sm lg:text-base xl:text-md text-saba-primary/60"
    >
      <li>
        <nuxt-link to="/" class="text-saba-primary underline hover:text-saba-dark transition-colors">Home</nuxt-link>
      </li>
      <Icon name="hand-right" v-if="prev" />
      <li v-if="prev">
        <nuxt-link :to="`/location/${prev.slug}`" class="text-saba-primary underline hover:text-saba-dark transition-colors">{{
          prev.name
        }}</nuxt-link>
      </li>
      <Icon name="hand-right" />
      <li class="text-saba-primary/60">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
