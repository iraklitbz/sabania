<script setup lang="ts">

import InputCalendar from "~/components/Forms/InputCalendar.vue";
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
    <FormKit
        type="text"
        name="name"
        placeholder="Name"
    />
    <FormKit
        type="text"
        name="surname"
        placeholder="Surname"
    />
    <FormKit
        type="email"
        name="email"
        placeholder="Email"
    />
    <FormKit
        type="submit"
        :classes="{
              input: 'w-full flex justify-center'
            }"
    >
      Reserve
    </FormKit>
  </FormKit>
</div>
</template>

<style scoped>

</style>