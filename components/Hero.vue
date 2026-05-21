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

const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 768;
  });
});

const cityOptions = computed(() =>
  locations().locations.map((l) => ({ label: l.city, value: l.slug }))
);

const showCityError = ref(false);

function handleSearch() {
  if (!selectedCitySlug.value) {
    showCityError.value = true;
    setTimeout(() => { showCityError.value = false; }, 2000);
    return;
  }
  const params: Record<string, string> = {};
  if (selectedRange.value && Array.isArray(selectedRange.value) && selectedRange.value[0] && selectedRange.value[1]) {
    params.from = new Date(selectedRange.value[0]).toISOString().split("T")[0];
    params.to = new Date(selectedRange.value[1]).toISOString().split("T")[0];
  }
  router.push({ path: `/location/${selectedCitySlug.value}`, query: params });
}
</script>

<template>
  <div class="relative w-full flex flex-col justify-center bg-saba-darker">

    <!-- Decorative background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-saba-darker via-saba-primary/80 to-saba-dark" />
      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-saba-primary/20 blur-3xl" />
      <div class="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-saba-dark/40 blur-3xl" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-saba-primary/5 blur-3xl" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-20">

      <!-- Headline + search -->
      <div class="flex flex-col md:flex-row md:items-start gap-10">
        <div class="md:w-2/5">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/40 mb-4">Sabania Apartments</p>
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Ankommen.<br />
            Abschalten.<br />
            <span class="text-saba-light/80">Wohlfühlen.</span>
          </h1>
        </div>
        <div class="md:w-3/5 md:pl-10 md:border-l border-white/10">
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
                inner: showCityError ? '!bg-white/70 !shadow-none animate-shake' : '!bg-white/70 !shadow-none',
                input: 'text-saba-darker data-[placeholder]:!text-saba-primary/50',
              }"
            >
              <template #prefixIcon>
                <Icon name="city" class="text-xl text-saba-primary ml-3 shrink-0" />
              </template>
            </FormKit>

            <!-- Inline calendar -->
            <div class="hero-calendar">
              <Datepicker
                v-model="selectedRange"
                inline
                auto-apply
                :range="true"
                :multi-calendars="isMobile ? false : 2"
                :min-date="today"
                :max-date="maxDate"
                :enable-time-picker="false"
                locale="de"
                :hide-offset-dates="true"
                :hide-navigation="['month', 'year']"
                :month-change-on-scroll="false"
                :action-row="{ showPreview: false }"
              />
              <button
                v-if="selectedRange && selectedRange.length"
                class="mt-2 text-xs text-white/60 hover:text-white w-full text-right"
                @click="selectedRange = []"
              >
                Zurücksetzen
              </button>
            </div>

            <!-- Search button -->
            <button
              class="w-full bg-saba-primary hover:bg-[#301118] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
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

.hero-calendar {
  --dp-cell-size: 36px;
  --dp-common-padding: 4px;
  --dp-primary-color: #ffffff;
  --dp-primary-text-color: #4D1B26;
  --dp-hover-color: rgba(255, 255, 255, 0.1);
  --dp-hover-text-color: #4D1B26;
  --dp-range-between-dates-background-color: rgba(255, 255, 255, 0.12);
  --dp-range-between-dates-text-color: rgba(255, 255, 255, 0.8);
  --dp-range-between-border-color: transparent;
  --dp-border-color: rgba(255, 255, 255, 0.1);
  --dp-menu-border-color: transparent;
  --dp-background-color: #4D1B26;
  --dp-text-color: #C2BEB5;
  --dp-secondary-color: rgba(194, 190, 181, 0.6);
  --dp-disabled-color: rgba(194, 190, 181, 0.6);
  border-radius: 1rem;
  overflow: hidden;
}
.hero-calendar .dp__main {
  width: 100%;
}
.hero-calendar .dp__main > div + div {
  width: 100%;
}
.hero-calendar .dp__menu {
  background-color: #4D1B26 !important;
  border: none !important;
}
.hero-calendar .dp__instance_calendar {
  background-color: #4D1B26 !important;
}
.hero-calendar .dp__cell_inner {
  color: #C2BEB5 !important;
}
.hero-calendar .dp__cell_disabled {
  color: rgba(194, 190, 181, 0.4) !important;
}
.hero-calendar .dp__calendar_header {
  font-weight: 700;
  color: #C2BEB5 !important;
}
.hero-calendar .dp__calendar_header_item {
  color: #C2BEB5 !important;
}
.hero-calendar .dp__calendar_header_separator {
  background: rgba(255, 255, 255, 0.1) !important;
}
.hero-calendar .dp__active_date,
.hero-calendar .dp__range_start,
.hero-calendar .dp__range_end {
  background-color: #301118 !important;
  color: #C2BEB5 !important;
}
.hero-calendar .dp__today {
  border-color: rgba(255, 255, 255, 0.5) !important;
}
.hero-calendar .dp__range_between {
  background-color: #301118 !important;
  color: rgba(194, 190, 181, 0.8) !important;
  border-color: transparent !important;
}
.hero-calendar .dp__date_hover:hover .dp__cell_inner,
.hero-calendar .dp__cell_inner:hover {
  color: #4D1B26 !important;
}
.hero-calendar .dp__cell_disabled:hover {
  color: rgba(194, 190, 181, 0.4) !important;
  background-color: transparent !important;
  cursor: default;
}
.hero-calendar .dp__month_year_wrap {
  color: rgba(194, 190, 181, 0.8) !important;
  font-weight: 600;
  justify-content: center;
}
.hero-calendar .dp__month_year_select {
  pointer-events: none;
  cursor: default;
  color: rgba(194, 190, 181, 0.8) !important;
}
.hero-calendar .dp__inner_nav svg {
  fill: #ffffff;
}
.hero-calendar .dp__inner_nav:hover svg {
  fill: #4D1B26;
}
.hero-calendar .dp__month_year_select + .dp__month_year_select {
  display: none;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-4px); }
  30% { transform: translateX(4px); }
  45% { transform: translateX(-4px); }
  60% { transform: translateX(4px); }
  75% { transform: translateX(-2px); }
  90% { transform: translateX(2px); }
}
.animate-shake {
  animation: shake 0.5s ease-in-out;
}
</style>
