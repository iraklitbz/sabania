<template>
  <component 
    :is="`svgo-${name}`" 
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>