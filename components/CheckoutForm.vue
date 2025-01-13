<script setup lang="ts">
  import { customer } from "~/store/customer"
  import PayPalButton from "~/components/PayPalButton.vue"
  const userFields = ref()
  const submitForm = () => {
    userFields?.value?.node.submit()
  };
</script>
<template>
  <div>
    <FormKit
      ref="userFields"
      v-model="customer().userData"
      name="userFields"
      type="form"
      :actions="false"
      form-class="flex flex-col gap-4 mb-10"
      :on-submit-invalid="true"
      :incomplete-message="false"
    >
      <div
          class="flex flex-col md:flex-row w-full gap-3"
      >
          <FormKit
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Name"
              validation="required"
              :validation-messages="{ required: 'Bitte geben Sie Ihren Namen ein' }"
          />
          <FormKit
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Nachname"
              validation="required"
              :validation-messages="{ required: 'Bitte geben Sie Ihren Nachname ein' }"
          />
      </div>
      <FormKit
          id="street"
          type="text"
          name="street"
          placeholder="Strasse"
          validation="required"
          :validation-messages="{ required: 'Bitte geben Sie Ihre Adresse ein' }"
      />
      <div
          class="flex flex-col md:flex-row w-full gap-3"
      >
        <FormKit
            id="postalCode"
            type="text"
            name="postalCode"
            placeholder="Postleitzahl"
            validation="required | number"
            :validation-messages="{
              required: 'Bitte geben Sie Ihre Postleitzahl ein',
              number: 'Bitte geben Sie eine gültige Postleitzahl ein'
            }"
        />
        <FormKit
            id="location"
            type="text"
            name="location"
            placeholder="Stadt"
            validation="required"
            :validation-messages="{ required: 'Bitte geben Sie Ihre Stadt ein' }"
        />
      </div>
      <FormKit
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          validation="required|email"
          :validation-messages="{
            required: 'Bitte geben Sie Ihre Email ein',
            email: 'Bitte geben Sie eine gültige Email ein'
          }"
      />
      <FormKit
          id="phone"
          type="tel"
          name="phone"
          placeholder="Phone"
          validation="required"
          :validation-messages="{
            required: 'Bitte geben Sie Ihre Telefonnummer ein'
          }"
      />
    </FormKit>
  </div>
  <div class="mt-10">
    <h2 class="mb-2 font-bold">Payment options:</h2>
    <PayPalButton @trigger-submit="submitForm" />
  </div>
</template>

<style scoped></style>
