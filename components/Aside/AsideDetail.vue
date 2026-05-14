<script setup lang="ts">
import InputCalendar from "~/components/Forms/InputCalendar.vue";
import { apartments } from "~/store/apartments";
import { currencyFormat } from "~/utils/currency-utils";
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
function handleSearch() {
  if (!(apartments().checkinDate && apartments().checkoutDate)) {
    apartments().setCheckDataRangeIsEmpty();
    return;
  } else {
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
    <div class="relative overflow-hidden rounded-3xl border border-saba-primary/20 bg-white shadow-2xl shadow-saba-primary/10">
      <div class="h-1.5 w-full bg-gradient-to-r from-saba-darker via-saba-primary to-saba-dark" />
      <div class="p-6">
      <div class="mb-6">
        <p class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50 mb-1">Preis pro Nacht</p>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl xl:text-4xl font-bold text-saba-darker">{{ currencyFormat(apartments().getTotalPrice) }}</span>
          <span class="text-sm text-saba-primary/40">/ Nacht</span>
        </div>
      </div>
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
            <Icon name="user" class="text-2xl ml-3 text-saba-primary" />
          </template>
        </FormKit>
        <FormKit
          type="submit"
          :classes="{
            input: 'w-full flex justify-center',
          }"
        >
          Reservieren
        </FormKit>
      </FormKit>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
