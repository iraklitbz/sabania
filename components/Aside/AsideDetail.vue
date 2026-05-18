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

const maxTravelers = computed(() => props.data?.price?.maxTravelers ?? 10);
</script>

<template>
  <aside
    class="top-32 flex w-full shrink-0 flex-col gap-3 lg:sticky lg:h-full lg:w-4/12 lg:gap-6 lg:self-start"
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
        <div class="flex items-center justify-between border border-saba-primary/10 bg-saba-primary/5 rounded-full px-4 py-3">
          <div class="flex items-center gap-3">
            <Icon name="user" class="text-xl text-saba-primary" />
            <span class="text-saba-darker">
              {{ apartments().travelers }} {{ apartments().travelers === 1 ? 'Reisender' : 'Reisende' }}
            </span>
          </div>
          <div class="flex items-center gap-3">
            <button
              type="button"
              class="w-8 h-8 rounded-full border border-saba-primary/30 flex items-center justify-center text-saba-darker text-lg leading-none disabled:opacity-30"
              :disabled="apartments().travelers <= 1"
              @click="apartments().travelers--"
            >−</button>
            <span class="w-4 text-center font-semibold text-saba-darker">{{ apartments().travelers }}</span>
            <button
              type="button"
              class="w-8 h-8 rounded-full border border-saba-primary/30 flex items-center justify-center text-saba-darker text-lg leading-none disabled:opacity-30"
              :disabled="apartments().travelers >= maxTravelers"
              @click="apartments().travelers++"
            >+</button>
          </div>
        </div>
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
