<script setup lang="ts">
const props = defineProps<{
  title: string,
  description?: string
}>()
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div style="opacity: 1; transform: none;">
        <h1>
          <span class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            {{
                props.title
            }}
          </span>
        </h1>
        <div class="mt-6 max-w-3xl text-xl text-neutral-600">
          <p>
            {{
                props.description
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>