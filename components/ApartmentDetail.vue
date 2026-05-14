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
    <h2 class="text-xl lg:text-3xl xl:text-4xl -indent-1.5">{{ data.name }}</h2>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <ul class="md:flex gap-4">
      <li v-if="data?.rooms?.guests">
        <span>Travelers:</span>
        <span
          class="rounded-full w-7 h-7 bg-saba-primary inline-flex items-center justify-center border border-solid border-gray-200 text-white ml-1 -indent-0.5"
          >{{ data.rooms.guests }}</span
        >
      </li>
      <li v-if="data?.rooms?.rooms">
        <span>Rooms:</span>
        <span
          class="rounded-full w-7 h-7 bg-saba-primary inline-flex items-center justify-center border border-solid border-gray-200 text-white ml-1 -indent-0.5"
          >{{ data.rooms.rooms }}</span
        >
      </li>
      <li v-if="data?.rooms?.beds">
        <span>Beds:</span>
        <span
          class="rounded-full w-7 h-7 bg-saba-primary inline-flex items-center justify-center border border-solid border-gray-200 text-white ml-1 -indent-0.5"
          >{{ data.rooms.beds }}</span
        >
      </li>
      <li v-if="data?.rooms?.WC">
        <span>WC:</span>
        <span
          class="rounded-full w-7 h-7 bg-saba-primary inline-flex items-center justify-center border border-solid border-gray-200 text-white ml-1 -indent-0.5"
          >{{ data.rooms.WC }}</span
        >
      </li>
    </ul>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <div>
      <ul class="md:flex gap-4">
        <li v-if="data?.checkin">Checkin time: <span class="font-bold">{{ data.checkin }}</span></li>
        <li v-if="data?.checkout">Checkout time: <span class="font-bold">{{ data.checkout }}</span></li>
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
      <ul class="grid grid-cols-3 gap-4">
        <li
          v-for="item in matchingCategories(data?.list)"
          :key="item"
          class="bg-saba-primary/5 rounded-full px-2 py-2 text-center border border-solid border-saba-primary/10 text-saba-darker flex items-center gap-2 justify-center"
        >
          <Icon :name="item.icon" class="text-2xl" />
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent my-8" />
    <div class="article-calendar">
      <h3 class="text-lg mb-5">Wählen Sie das Abfahrtsdatum aus</h3>
      <Datepicker
        v-model="apartments().selectedRange"
        inline
        auto-apply
        :range="true"
        :multi-calendars="2"
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
  --dp-cell-size: 45px;
  --dp-common-padding: 5px;
  --dp-primary-color: #4D1B26;
  --dp-primary-text-color: #ffffff;
  --dp-hover-color: rgba(77, 27, 38, 0.08);
  --dp-hover-text-color: #301118;
  --dp-range-between-dates-background-color: rgba(77, 27, 38, 0.15);
  --dp-range-between-dates-text-color: #301118;
  --dp-range-between-border-color: rgba(77, 27, 38, 0.15);
  --dp-border-color: rgba(77, 27, 38, 0.1);
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
}
</style>
