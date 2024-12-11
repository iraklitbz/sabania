<script setup lang="ts">
  import Datepicker from '@vuepic/vue-datepicker'
  import { apartments } from "~/store/apartments"
  import '@vuepic/vue-datepicker/dist/main.css'
  const config = {
    setDateOnMenuClose: true
  }
  const today = new Date()
  const maxDate = new Date()
  maxDate.setFullYear(today.getFullYear() + 1)
</script>

<template>
  <div
    class="relative group"
  >
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
        :range="true"
        :multi-calendars="2"
        placeholder="Check-in - Check-out"
        :class="{ 'empty-input': apartments().checkIfdataRangeIsEmpty }"
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
          showPreview: false
        }"
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
  @apply bg-blue-500/20
}
.dp__date_hover_end:hover {
  @apply bg-blue-500/40
}
.dp__input_icons[aria-label="Calendar icon"] {
  @apply px-3 w-5 h-5 text-black
}
[data-dp-element="overlay-year"] {
  display: none;
  pointer-events: none
}
.dp__month_year_select {
  width: 100%;
}
.dp__input {
  @apply text-neutral-950 border-neutral-950 hover:!border-neutral-950 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 group-data-[invalid]:border-red-500 group-data-[invalid]:ring-1 group-data-[invalid]:ring-red-500 group-data-[disabled]:bg-neutral-100 group-data-[disabled]:cursor-not-allowed placeholder:text-neutral-950 text-base
}
.dp__input_focus {
  @apply border-blue-500 ring-1 ring-blue-500
}
.dp__calendar_header {
  font-weight: 700;
}
.empty-input .dp__input {
  @apply border-red-500 ring-1 ring-red-500
}
</style>