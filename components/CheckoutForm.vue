<script setup lang="ts">
import PayPalButton from "~/components/PayPalButton.vue";
</script>
<template>
  <div>
    <FormKit
      type="form"
      :actions="false"
      form-class="flex flex-col gap-4"
      name="input"
      :on-submit-invalid="true"
      :incomplete-message="false"
      @submit="handleCheckout"
    >
    </FormKit>
    <PayPalButton />
  </div>
</template>

<style scoped></style>
