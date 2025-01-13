<script setup lang="ts">
  import { customer } from "~/store/customer"
</script>
<template>
  <div>
    <FormKit
      v-model="customer().userData"
      id="userFields"
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
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              validation="required"
              :validation-messages="{ required: 'Bitte geben Sie Ihren Namen ein' }"
          />
          <FormKit
              id="surname"
              type="text"
              name="surname"
              placeholder="Nachname"
              validation="required"
              :validation-messages="{ required: 'Bitte geben Sie Ihren Nachname ein' }"
          />
      </div>
      <div
          class="flex flex-col md:flex-row w-full gap-3"
      >
        <FormKit
            id="address"
            type="text"
            name="address"
            placeholder="Strasse"
            validation="required"
            :validation-messages="{ required: 'Bitte geben Sie Ihre Adresse ein' }"
        />
        <FormKit
            id="houseNumber"
            type="text"
            name="houseNumber"
            placeholder="Hausnummer"
            validation="required|number"
            :validation-messages="{
              required: 'Bitte geben Sie Ihre Hausnummer ein',
              number: 'Bitte geben Sie eine gültige Hausnummer ein'
            }"
        />
      </div>
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
            id="city"
            type="text"
            name="city"
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
  <button @click="customer().validateForm()">
    Custom button
  </button>
</template>

<style scoped></style>
