<script setup lang="ts">
const props = defineProps<{
  data: {
    name: string,
    slug: string
  }
}>()
</script>

<template>
  <div class="min-h-96 bg-red-100 w-full">
    <nuxt-link
        :to="`/${props.data.slug}`"
    >
      {{ props.data.name }}}
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>