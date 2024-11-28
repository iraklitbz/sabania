<script setup lang="ts">
  import Datepicker from '@vuepic/vue-datepicker'
  import '@vuepic/vue-datepicker/dist/main.css'
  function handleCalendar() {
    console.log('handleCalendar')
  }
  const selectedRange = ref<{ start?: Date; end?: Date }>({});
  const config = {
    setDateOnMenuClose: true
  }
  const today = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 1);
</script>

<template>
  <div
    class="relative"
  >
    <Datepicker
        v-model="selectedRange"
        :range="true"
        :multi-calendars="2"
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
    />
  </div>
</template>

<style scoped>

</style>