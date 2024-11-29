<script setup lang="ts">
import InputCalendar from "~/components/Forms/InputCalendar.vue";
function handleSearch() {
  console.log('searching...')
}
</script>

<template>
  <div class="max-w-xl md:max-w-[1120px] mt-10 md:mt-0 mx-auto rounded-xl bg-white p-5">
    <client-only>
      <FormKit
          type="form"
          :actions="false"
          form-class="flex gap-7"
          name="input"
          :on-submit-invalid="true"
          :incomplete-message="false"
          @submit="handleSearch"
      >
      <FormKit
          id="cityInput"
          type="select"
          placeholder="Select a city"
          :options="{
            mercury: 'Mercury',
            venus: 'Venus',
            earth: 'Earth',
            mars: 'Mars',
            jupiter: 'Jupiter',
            saturn: 'Saturn',
            uranus: 'Uranus',
            neptune: 'Neptune',
          }"
      >
        <template #prefixIcon="context">
          <Icon
              name="icon:city"
              class="text-2xl ml-3"
          />
        </template>
      </FormKit>
        <InputCalendar />
        <FormKit
            id="adultsInput"
            type="select"
            placeholder="Adults"
            :options="{
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5',
              6: '6',
              7: '7',
              8: '8',
              9: '9',
              10: '10',
            }"
        >
          <template #prefixIcon="context">
            <Icon
                name="icon:user"
                class="text-2xl ml-3"
            />
          </template>
        </FormKit>
        <FormKit
            type="submit"
        >
          Search
        </FormKit>
      </FormKit>
    </client-only>
  </div>
</template>
<style>
:root {
  --dp-input-padding: 16px 30px 16px 8px;
  --dp-input-icon-padding: 40px;
}
.dp__input_icons {
  @apply px-3
}
.dp__input {
  @apply text-neutral-950 border-neutral-400 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:cursor-not-allowed
}
.dp__input::placeholder {
  @apply text-neutral-950 text-base
}
.dp__input_focus {
  @apply border-blue-500 ring-1 ring-blue-500
}
</style>
