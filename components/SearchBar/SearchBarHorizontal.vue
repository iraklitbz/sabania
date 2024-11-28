<script setup lang="ts">
import InputCalendarInOut from '~/components/Forms/InputCalendarInOut.vue'
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
          form-class="flex flex-col gap-7"
          name="input"
          :on-submit-invalid="true"
          :incomplete-message="false"
          @submit="handleSearch"
      >
      <FormKit
          type="select"
          label="What planet is the largest?"
          placeholder="Select a city"
          name="planet"
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
      />
        <InputCalendarInOut />
        <FormKit
            type="select"
            label="What planet is the largest?"
            placeholder="Adults"
            name="adults"
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
        />
        <FormKit
            type="submit"
        >
          Search
        </FormKit>
      </FormKit>
    </client-only>
  </div>
</template>

<style scoped>

</style>