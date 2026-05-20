<script setup lang="ts">
import { locations } from "~/store/locations";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const router = useRouter();
const selectedCitySlug = ref("");
const selectedRange = ref<string[]>([]);

const today = new Date();
const maxDate = new Date();
maxDate.setFullYear(today.getFullYear() + 1);

const cityOptions = computed(() =>
  locations().locations.map((l) => ({ label: l.city, value: l.slug }))
);

function handleSearch() {
  if (!selectedCitySlug.value) return;
  const params: Record<string, string> = {};
  if (selectedRange.value && Array.isArray(selectedRange.value) && selectedRange.value[0] && selectedRange.value[1]) {
    params.from = new Date(selectedRange.value[0]).toISOString().split("T")[0];
    params.to = new Date(selectedRange.value[1]).toISOString().split("T")[0];
  }
  router.push({ path: `/location/${selectedCitySlug.value}`, query: params });
}
</script>

<template>
  <div class="relative w-full min-h-[620px] flex flex-col justify-center bg-saba-darker overflow-hidden">

    <!-- Decorative background -->
    <div class="absolute inset-0 bg-gradient-to-br from-saba-darker via-saba-primary/80 to-saba-dark" />
    <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-saba-primary/20 blur-3xl" />
    <div class="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-saba-dark/40 blur-3xl" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-saba-primary/5 blur-3xl" />

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-20">

      <!-- Headline + search -->
      <div class="flex flex-col md:flex-row md:items-start gap-10">
        <div class="flex-1">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/40 mb-4">Sabania Apartments</p>
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Ankommen.<br />
            Abschalten.<br />
            <span class="text-saba-light/80">Wohlfühlen.</span>
          </h1>
        </div>
        <div class="flex-1 md:pl-10 md:border-l border-white/10">
          <p class="text-xl font-semibold text-white mb-3">Willkommen bei Sabania</p>
          <p class="text-base text-white/60 leading-relaxed mb-6">Ihr Zuhause auf Zeit – komfortabel, flexibel und unkompliziert. Für Monteure, Geschäftsreisende oder längere Aufenthalte.</p>

          <!-- Search widget -->
          <div class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex flex-col gap-3">

            <!-- City select -->
            <FormKit
              v-model="selectedCitySlug"
              type="select"
              placeholder="Stadt wählen…"
              :options="cityOptions"
              :classes="{
                outer: '!mb-0',
                inner: '!bg-white !shadow-none',
                input: 'text-saba-darker data-[placeholder]:!text-saba-primary/50',
              }"
            >
              <template #prefixIcon>
                <Icon name="city" class="text-xl text-saba-primary ml-3 shrink-0" />
              </template>
            </FormKit>

            <!-- Date picker -->
            <div class="min-w-0 hero-datepicker">
              <Datepicker
                v-model="selectedRange"
                teleport="body"
                :range="true"
                :multi-calendars="2"
                placeholder="Check-in – Check-out"
                :min-date="today"
                :max-date="maxDate"
                :enable-time-picker="false"
                locale="de"
                :hide-offset-dates="true"
                :hide-navigation="['month', 'year']"
                :format="'dd.MM.yyyy'"
                :clearable="true"
                cancelText="Abbrechen"
                selectText="OK"
                :config="{ setDateOnMenuClose: true }"
                :action-row="{ showPreview: false }"
              />
            </div>

            <!-- Search button -->
            <button
              class="w-full bg-saba-primary hover:bg-saba-dark text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="!selectedCitySlug"
              @click="handleSearch"
            >
              Suchen
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
/* CSS variables at :root so they reach the teleported calendar popup */
:root {
  --dp-primary-color: #4D1B26;
  --dp-primary-text-color: #ffffff;
  --dp-hover-color: rgba(77, 27, 38, 0.08);
  --dp-hover-text-color: #301118;
  --dp-range-between-dates-background-color: rgba(77, 27, 38, 0.15);
  --dp-range-between-dates-text-color: #301118;
  --dp-range-between-border-color: rgba(77, 27, 38, 0.15);
  --dp-border-color: rgba(77, 27, 38, 0.1);
}

/* Input — pill style identical to InputCalendar.vue */
.hero-datepicker .dp__input {
  color: #301118;
  border-color: rgba(77, 27, 38, 0.1);
  background-color: white !important;
  border-radius: 9999px;
  font-size: 1rem;
  padding: 15px 30px 15px 47px;
}
.hero-datepicker .dp__input::placeholder {
  color: rgba(77, 27, 38, 0.5);
}
.hero-datepicker .dp__input:hover {
  border-color: rgba(77, 27, 38, 0.1) !important;
}
.hero-datepicker .dp__input_focus {
  border-color: #4D1B26 !important;
  box-shadow: 0 0 0 1px #4D1B26 !important;
}
.hero-datepicker .dp__input_icons {
  color: #4D1B26;
}

/* Action buttons */
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

/* Calendar popup — global so styles reach the teleported element */
.dp__calendar_header {
  font-weight: 700;
  color: #4D1B26;
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
.dp__range_between {
  background-color: rgba(77, 27, 38, 0.12) !important;
}
</style>
