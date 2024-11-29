<script setup lang="ts">
  import Datepicker from '@vuepic/vue-datepicker'
  import '@vuepic/vue-datepicker/dist/main.css'
  const selectedRange = ref()
  const checkinDate = ref()
  const checkoutDate = ref()
  const config = {
    setDateOnMenuClose: true
  }
  const today = new Date()
  const maxDate = new Date()
  maxDate.setFullYear(today.getFullYear() + 1)
  function updateDates(newRange: string[]) {
    if (newRange.length === 2) {
      console.log(newRange[0])
      checkinDate.value = newRange[0]
      checkoutDate.value = newRange[1]
    } else {
      checkinDate.value = ''
      checkoutDate.value = ''
    }
  }
</script>

<template>
  <div
    class="relative"
  >
    <FormKit
        v-model="checkinDate"
        id="checkinDate"
        type="hidden"
    />
    <FormKit
        v-model="checkoutDate"
        id="checkoutDate"
        type="hidden"
    />
    <Datepicker
        v-model="selectedRange"
        :range="true"
        :multi-calendars="2"
        :placeholder="['Check-in', 'Check-out']"
        :clearable="true"
        :hide-navigation="['month', 'year']"
        :min-date="today"
        :max-date="maxDate"
        :enable-time-picker="false"
        locale="de"
        cancelText="Abbrechen"
        selectText="OK"
        :config="config"
        :action-row="{
          showPreview: false
        }"
        @update:modelValue="updateDates"
        @cleared="updateDates([])"
    />
  </div>
</template>

<style>
[data-dp-element="overlay-year"] {
  display: none;
  pointer-events: none
}
.dp__month_year_select {
  width: 100%;
}
.dp__calendar_header {
  font-weight: 700;
}
</style>