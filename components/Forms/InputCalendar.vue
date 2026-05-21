<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import { apartments } from "~/store/apartments";
import "@vuepic/vue-datepicker/dist/main.css";

const config = {
  setDateOnMenuClose: true,
};
const today = new Date();
const maxDate = new Date();
maxDate.setFullYear(today.getFullYear() + 1);
</script>

<template>
  <div class="relative group">
    <FormKit
      v-model="apartments().checkinDate"
      id="checkinDate"
      type="hidden"
    />
    <FormKit
      v-model="apartments().checkoutDate"
      id="checkoutDate"
      type="hidden"
    />
    <Datepicker
      v-model="apartments().selectedRange"
      teleport="body"
      :range="true"
      :multi-calendars="2"
      placeholder="Check-in - Check-out"
      :class="{ 'empty-input': apartments().checkIfDataRangeIsEmpty }"
      :clearable="true"
      :hide-navigation="['month', 'year']"
      :min-date="today"
      :max-date="maxDate"
      :enable-time-picker="false"
      locale="de"
      cancelText="Abbrechen"
      :hide-offset-dates="true"
      :disabled-dates="apartments().getDisabledDates"
      selectText="OK"
      :config="config"
      :action-row="{
        showPreview: false,
      }"
      :format="'yyyy/MM/dd'"
      @update:modelValue="apartments().updateDatesCalendar"
      @cleared="apartments().updateDatesCalendar([])"
    />
  </div>
</template>

<style>
:root {
  --dp-input-padding: 15px 30px 15px 20px;
  --dp-input-icon-padding: 47px;
  --dp-button-icon-height: 230px;
}
.dp__range_between {
  @apply bg-saba-primary/15;
}
.dp__date_hover_end:hover {
  @apply bg-saba-primary/30;
}
.dp__input_icons[aria-label="Calendar icon"] {
  @apply px-3 w-5 h-5 text-saba-primary;
}
[data-dp-element="overlay-year"] {
  display: none;
  pointer-events: none;
}
.dp__month_year_select {
  width: 100%;
  pointer-events: none;
  cursor: default;
}
.dp__input {
  @apply text-saba-darker border-saba-primary/10 bg-saba-primary/5 rounded-full hover:!border-saba-primary/10 focus-within:ring-1 focus-within:ring-saba-primary focus-within:border-saba-primary group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:cursor-not-allowed placeholder:text-saba-primary/50 text-base;
}
.dp__input_focus {
  @apply border-saba-primary ring-1 ring-saba-primary;
}
.dp__calendar_header {
  font-weight: 700;
  color: #4D1B26;
}
.dp__action_button {
  border-radius: 9999px !important;
  padding: 16px 24px !important;
}
.dp__action_select {
  background-color: #4D1B26 !important;
  color: white !important;
}
.dp__action_select:hover {
  background-color: #4d1b3f !important;
}
.dp__action_cancel {
  border-color: #4D1B26 !important;
  color: #4D1B26 !important;
}
.dp__today {
  border-color: #4D1B26 !important;
}
.dp__active_date {
  background-color: #4D1B26 !important;
  color: white !important;
}
.dp__range_start,
.dp__range_end {
  background-color: #4D1B26 !important;
  color: white !important;
}
.empty-input .dp__input {
  @apply border-red-500 ring-1 ring-red-500;
}
</style>
