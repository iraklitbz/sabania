<script setup lang="ts">
import InputCalendar from "~/components/Forms/InputCalendar.vue";
import { apartments } from "~/store/apartments";
import { currencyFormat } from "~/utils/currency-utils";
import { calculatePrice } from "~/utils/calculatePrice";
type Apartment = {
  id: number;
  name: string;
};
type OccupiedDates = {
  arrival: string;
  departure: string;
  apartment: Apartment[];
};
const props = defineProps<{
  data: {
    name: string;
    price: number;
  };
  occupiedDates: Array<OccupiedDates>;
}>();
const totalPrice = computed(() => {
  return calculatePrice(
    props.data.price.price,
    props.data.price.travelers,
    props.data.price.maxTravelers,
    props.data.price.increasePrice,
    apartments().travelers,
  );
});
function handleSearch() {
  if (!(apartments().checkinDate && apartments().checkoutDate)) {
    apartments().setCheckDataRangeIsEmpty();
    return;
  } else {
    apartments().setTotalPrice(totalPrice.value as number);
    navigateTo("/book/" + apartments().apartment?.slug);
  }
}

const optionsTravelers = computed(() => {
  const opts: Record<number, number> = {};
  for (let i = 1; i <= props.data.price.maxTravelers; i++) {
    opts[i] = i;
  }
  return opts;
});
</script>

<template>
  <aside
    class="top-32 flex w-full shrink-0 flex-col gap-3 lg:sticky lg:h-full lg:w-4/12 lg:gap-6"
  >
    <div
      class="bg-white border border-solid border-gray-300 p-4 rounded-2xl shadow-xl"
    >
      <h2 class="text-xl lg:text-2xl xl:text-3xl font-bold mb-5">
        {{ currencyFormat(totalPrice) }}
        <span class="font-normal text-lg ml-1">night</span>
      </h2>
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
          v-model.number="apartments().travelers"
          id="adultsInput"
          name="travelers"
          type="select"
          placeholder="Adults"
          validation="required"
          :options="optionsTravelers"
        >
          <template #message="{ message }"> </template>
          <template #prefixIcon="context">
            <Icon name="icon:user" class="text-2xl ml-3" />
          </template>
        </FormKit>
        <FormKit
          type="submit"
          :classes="{
            input: 'w-full flex justify-center',
          }"
        >
          Reserve
        </FormKit>
      </FormKit>
    </div>
  </aside>
</template>

<style scoped></style>
