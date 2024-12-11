<script setup lang="ts">
import type { ApartmentInputSabania } from '~/types/sabania-types'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { apartments } from "~/store/apartments";
const props = defineProps<{
  data: ApartmentInputSabania
}>()
const today = new Date()
const maxDate = new Date()
maxDate.setFullYear(today.getFullYear() + 1)
</script>

<template>
  <article class="flex flex-col gap-10">
   <Breadcumbs
       :name="data.name"
        :prev="{
          name: data?.location?.city,
          slug: data?.location?.slug
        }"
   />
    <h2 class="text-xl lg:text-2xl xl:text-3xl font-bold"> {{ data.name }} </h2>
    <ul class="md:flex gap-4">
      <li v-if="data?.rooms?.guests"> <b>Travelers:</b> <span class="rounded-full w-7 h-7 bg-gray-100 inline-flex items-center justify-center border border-solid border-gray-200 text-neutral-600 m-1">{{ data.rooms.guests }}</span></li>
      <li v-if="data?.rooms?.rooms"> <b>Rooms:</b> <span class="rounded-full w-7 h-7 bg-gray-100 inline-flex items-center justify-center border border-solid border-gray-200 text-neutral-600 m-1">{{ data.rooms.rooms }}</span>  </li>
      <li v-if="data?.rooms?.beds"> <b>Beds:</b> <span class="rounded-full w-7 h-7 bg-gray-100 inline-flex items-center justify-center border border-solid border-gray-200 text-neutral-600 m-1">{{ data.rooms.beds }}</span>  </li>
      <li v-if="data?.rooms?.WC"> <b>WC:</b> <span class="rounded-full w-7 h-7 bg-gray-100 inline-flex items-center justify-center border border-solid border-gray-200 text-neutral-600 m-1">{{ data.rooms.WC }}</span>  </li>
    </ul>
    <div>
      <ul class="md:flex gap-4">
        <li v-if="data?.checkin"><b>Checkin time:</b> {{ data.checkin }} </li>
        <li v-if="data?.checkout"><b>Checkout time:</b> {{ data.checkout }}  </li>
      </ul>
    </div>

    <p> {{ data.description }} </p>

    <div>
      <h3 class="text-lg font-bold mb-2"> Address: </h3>
      <ul>
        <li v-if="data?.address?.street"> {{ data.address.street }}</li>
        <li v-if="data?.address?.city"> {{ data.address.city }}  </li>
        <li v-if="data?.address?.postalCode"> {{ data.address.postalCode }}  </li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-bold mb-2"> What this apartment has: </h3>
      <ul class="grid grid-cols-3 gap-4">
        <li
          v-for="item in data?.list"
          :key="item"
          class="bg-gray-100 rounded-full px-2 py-1 text-center border border-solid border-gray-200 text-neutral-600"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div
      class="article-calendar"
    >
      <h3 class="text-lg font-bold mb-5"> Select the date of the departure </h3>
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
            showPreview: false
          }"
          @update:modelValue="apartments().updateDatesCalendar"
          @cleared="apartments().updateDatesCalendar([])"
      />
      <button
          class="mt-5 hover:underline text-blue-800 w-full text-right"
          @click="apartments().clearDatesCalendar()"
      >Clean dates</button>
    </div>
  </article>
</template>

<style lang="scss">
.article-calendar {
  --dp-cell-size: 45px;
  --dp-common-padding: 5px;
  .dp__main {
    @apply w-full
  }
  .dp__main > div + div  {
    @apply w-full
  }
  .dp__cell_inner {
    @apply text-lg
  }
}
</style>