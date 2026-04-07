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
      class="md:flex gap-4 items-center text-sm lg:text-base xl:text-md"
    >
      <li>
        <nuxt-link to="/" class="text-blue-800">Home</nuxt-link>
      </li>
      <Icon name="hand-right" v-if="prev" />
      <li v-if="prev">
        <nuxt-link :to="`/location/${prev.slug}`" class="text-blue-800">{{
          prev.name
        }}</nuxt-link>
      </li>
      <Icon name="hand-right" />
      <li>
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
