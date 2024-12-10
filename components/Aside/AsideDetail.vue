<script setup lang="ts">
  import InputCalendar from "~/components/Forms/InputCalendar.vue"
  import {apartments} from "~/store/apartments"
  import {checkout} from "~/store/checkout"
  import {currencyFormat} from "~/utils/currency-utils";
  type Apartment = {
    id: number,
    name: string
  }
  type OccupiedDates = {
    arrival: string,
    departure: string
    apartment: Apartment[]
  }
  const props = defineProps<{
    data: {
      name: string,
      price: number
    },
    occupiedDates: Array<OccupiedDates>
  }>()
  function handleSearch() {
     if(!(apartments().checkinDate && apartments().checkoutDate)) {
        apartments().setCheckDataRangeIsEmpty()
        return
     } else {
       checkout().setApartmentToCheckout(apartments().apartment, apartments().checkinDate, apartments().checkoutDate, apartments().travelers)
       navigateTo('/book/' + apartments().apartment?.slug)
     }
  }
</script>

<template>
  <aside class="top-32 flex w-full shrink-0 flex-col gap-3 lg:sticky lg:h-full lg:w-4/12 lg:gap-6">
    <div class="bg-white border border-solid border-gray-300 p-4 rounded-2xl shadow-xl">
      <h2 class="font-bold text-2xl mb-5"> {{ currencyFormat(props.data.price) }} <span class="font-normal text-lg ml-1">night</span></h2>
      <FormKit
          type="form"
          :actions="false"
          form-class="flex flex-col gap-4"
          name="input"
          :on-submit-invalid="true"
          :incomplete-message="false"
          @submit="handleSearch"
      >
        <InputCalendar />
        <FormKit
            v-model="apartments().travelers"
            id="adultsInput"
            name="travelers"
            type="select"
            placeholder="Adults"
            validation="required"
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
              10: '10'
            }"
        >
          <template #message="{ message }">
          </template>
          <template #prefixIcon="context">
            <Icon
                name="icon:user"
                class="text-2xl ml-3"
            />
          </template>
        </FormKit>
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
  </aside>
</template>

<style scoped>

</style>