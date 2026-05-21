<script setup lang="ts">
import type { ApartmentInputSabania } from "~/types/sabania-types";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { apartments } from "~/store/apartments";
const props = defineProps<{
  data: ApartmentInputSabania;
}>();
const today = new Date();
const maxDate = new Date();
maxDate.setFullYear(today.getFullYear() + 1);

const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth < 640;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 640;
  });
});
</script>

<template>
  <article class="relative overflow-hidden rounded-3xl border border-saba-primary/20 bg-white shadow-2xl shadow-saba-primary/10">
    <div class="h-1.5 w-full bg-gradient-to-r from-saba-darker via-saba-primary to-saba-dark" />
    <div class="flex flex-col p-8">
    <Breadcumbs
      :name="data.name"
      :prev="{
        name: data?.location?.city,
        slug: data?.location?.slug,
      }"
    />
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <div>
      <p class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50 mb-2">{{ data?.location?.city }}</p>
      <h2 class="text-2xl lg:text-4xl xl:text-5xl font-bold text-saba-darker leading-tight">{{ data.name }}</h2>
      <p v-if="data?.shortDescription" class="mt-3 text-saba-primary/60 text-base lg:text-lg">{{ data.shortDescription }}</p>
    </div>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <ul class="flex flex-wrap gap-6">
      <li v-if="data?.rooms?.guests" class="flex flex-col items-center gap-1.5">
        <span class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50">Gäste</span>
        <span class="rounded-full w-9 h-9 bg-saba-primary inline-flex items-center justify-center text-white font-bold text-sm">{{ data.rooms.guests }}</span>
      </li>
      <li v-if="data?.rooms?.rooms" class="flex flex-col items-center gap-1.5">
        <span class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50">Zimmer</span>
        <span class="rounded-full w-9 h-9 bg-saba-primary inline-flex items-center justify-center text-white font-bold text-sm">{{ data.rooms.rooms }}</span>
      </li>
      <li v-if="data?.rooms?.beds" class="flex flex-col items-center gap-1.5">
        <span class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50">Betten</span>
        <span class="rounded-full w-9 h-9 bg-saba-primary inline-flex items-center justify-center text-white font-bold text-sm">{{ data.rooms.beds }}</span>
      </li>
      <li v-if="data?.rooms?.WC" class="flex flex-col items-center gap-1.5">
        <span class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50">WC</span>
        <span
          class="rounded-full w-9 h-9 bg-saba-primary inline-flex items-center justify-center text-white font-bold text-sm"
          >{{ data.rooms.WC }}</span
        >
      </li>
    </ul>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <div>
      <ul class="flex flex-wrap gap-3">
        <li v-if="data?.checkin" class="flex items-center gap-2 bg-saba-primary/5 border border-saba-primary/10 rounded-full px-4 py-2 text-sm">
          <span class="text-saba-primary/50 font-semibold uppercase tracking-widest text-xs">Check-in</span>
          <span class="font-bold text-saba-darker">{{ data.checkin }}</span>
        </li>
        <li v-if="data?.checkout" class="flex items-center gap-2 bg-saba-primary/5 border border-saba-primary/10 rounded-full px-4 py-2 text-sm">
          <span class="text-saba-primary/50 font-semibold uppercase tracking-widest text-xs">Check-out</span>
          <span class="font-bold text-saba-darker">{{ data.checkout }}</span>
        </li>
      </ul>
    </div>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <p class="text-gray-700">{{ data.description }}</p>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <div>
      <h3 class="text-lg mb-2">Address:</h3>
      <ul>
        <li v-if="data?.address?.street">{{ data.address.street }}</li>
        <li v-if="data?.address?.city">{{ data.address.city }}</li>
        <li v-if="data?.address?.postalCode">{{ data.address.postalCode }}</li>
      </ul>
    </div>
    <div v-if="data?.list && data?.list.length">
      <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
      <h3 class="text-lg mb-2">What this apartment has:</h3>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="item in matchingCategories(data?.list)"
          :key="item"
          class="bg-saba-primary/5 rounded-2xl px-3 py-2 border border-solid border-saba-primary/10 text-saba-darker flex items-center gap-2"
        >
          <Icon :name="item.icon" class="w-5 h-5 shrink-0" />
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div v-if="data?.address?.latitude && data?.address?.longitude">
      <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
      <h3 class="text-lg mb-4">Standort</h3>
      <Maps
        :city-location="{
          lat: data.address.latitude,
          lng: data.address.longitude,
        }"
      />
    </div>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <div class="article-calendar">
      <h3 class="text-lg mb-5">Wählen Sie das Abfahrtsdatum aus</h3>
      <Datepicker
        v-model="apartments().selectedRange"
        inline
        auto-apply
        :range="true"
        :multi-calendars="isMobile ? false : 2"
        :hide-navigation="['month', 'year']"
        :min-date="today"
        :max-date="maxDate"
        :enable-time-picker="false"
        locale="de"
        cancelText="Abbrechen"
        :hide-offset-dates="true"
        :disabled-dates="apartments().getDisabledDates"
        selectText="OK"
        :month-change-on-scroll="false"
        :action-row="{
          showPreview: false,
        }"
        @update:modelValue="apartments().updateDatesCalendar"
        @cleared="apartments().updateDatesCalendar([])"
      />
      <button
        class="mt-5 hover:underline text-saba-primary w-full text-right"
        @click="apartments().clearDatesCalendar()"
      >
        Zurücksetzen
      </button>
    </div>
    </div>
  </article>
</template>

<style lang="scss">
.article-calendar {
  --dp-cell-size: 38px;
  --dp-common-padding: 5px;
  --dp-primary-color: #4D1B26;
  --dp-primary-text-color: #ffffff;
  --dp-hover-color: rgba(77, 27, 38, 0.08);
  --dp-hover-text-color: #301118;
  --dp-range-between-dates-background-color: rgba(77, 27, 38, 0.15);
  --dp-range-between-dates-text-color: #301118;
  --dp-range-between-border-color: rgba(77, 27, 38, 0.15);
  --dp-border-color: rgba(77, 27, 38, 0.1);

  @media (min-width: 640px) {
    --dp-cell-size: 45px;
  }
  .dp__main {
    @apply w-full;
  }
  .dp__main > div + div {
    @apply w-full;
  }
  .dp__cell_inner {
    @apply text-lg;
  }
  .dp__active_date,
  .dp__range_start,
  .dp__range_end {
    background-color: #4D1B26 !important;
    color: white !important;
  }
  .dp__today {
    border-color: #4D1B26 !important;
  }
  .dp__calendar_header {
    color: #4D1B26;
    font-weight: 700;
  }
  .dp__month_year_select {
    pointer-events: none;
    cursor: default;
  }
}
</style>
