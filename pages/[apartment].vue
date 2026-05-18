<script setup lang="ts">
import { apartments } from "~/store/apartments";
import AsideDetail from "~/components/Aside/AsideDetail";
import ApartmentDetail from "~/components/ApartmentDetail.vue";
import Maps from "~/components/Maps.vue";
import { currencyFormat } from "~/utils/currency-utils";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const route = useRoute();
await apartments().fetchApartment(route.params.apartment as string);

useSeoMeta({
  title: () => apartments().apartment?.name ?? "Apartment",
  ogTitle: () => `${apartments().apartment?.name ?? "Apartment"} mieten – Sabania Apartments`,
  description: () =>
    apartments().apartment?.shortDescription ??
    `${apartments().apartment?.name ?? "Apartment"} in ${apartments().apartment?.address?.city ?? ""} mieten – komfortabel, flexibel und direkt buchbar bei Sabania Apartments.`,
  ogDescription: () =>
    apartments().apartment?.shortDescription ??
    `${apartments().apartment?.name ?? "Apartment"} in ${apartments().apartment?.address?.city ?? ""} mieten – komfortabel, flexibel und direkt buchbar bei Sabania Apartments.`,
});

const fromParam = route.query.from as string | undefined;
const toParam = route.query.to as string | undefined;
if (fromParam && toParam) {
  apartments().checkinDate = fromParam;
  apartments().checkoutDate = toParam;
  apartments().selectedRange = [fromParam, toParam] as any;
}
if (
  !apartments().apartment ||
  Object.keys(apartments().apartment).length === 0
) {
  navigateTo("/404");
}

const randomPhotos = ref([]);
const galleryIsActivated = ref(false);
const showBookingSheet = ref(false);
const showCalendarPanel = ref(false);
const isMobile = ref(false);

const today = new Date();
const maxDate = new Date();
maxDate.setFullYear(today.getFullYear() + 1);

const optionsTravelers = computed(() => {
  const opts: Record<number, number> = {};
  const max = apartments().apartment?.price?.maxTravelers ?? 10;
  for (let i = 1; i <= max; i++) opts[i] = i;
  return opts;
});

const selectedDatesLabel = computed(() => {
  const { checkinDate, checkoutDate } = apartments();
  if (checkinDate && checkoutDate) {
    const fmt = (d: string) => new Date(d).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
    return `${fmt(checkinDate)} – ${fmt(checkoutDate)}`;
  }
  return "Check-in – Check-out";
});

onMounted(() => {
  function getRandomPhotos(apartmentPhotos, count = 4) {
    if (!apartmentPhotos || !Array.isArray(apartmentPhotos)) return [];
    const allPhotos = apartmentPhotos.flatMap((category) =>
      category.photos.map((photo) => ({ name: category.name, url: photo.url })),
    );
    return allPhotos.sort(() => Math.random() - 0.5).slice(0, count);
  }
  randomPhotos.value = getRandomPhotos(apartments().apartment?.photos, 4);

  const checkMobile = () => { isMobile.value = window.innerWidth < 1024; };
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

watch(() => apartments().selectedRange, (val) => {
  if (showCalendarPanel.value && val && Array.isArray(val) && val[0] && val[1]) {
    showCalendarPanel.value = false;
  }
});

function toggleGallery() {
  galleryIsActivated.value = !galleryIsActivated.value;
  document.body.classList.toggle("overflow-hidden", galleryIsActivated.value);
}

function openSheet() {
  showBookingSheet.value = true;
  showCalendarPanel.value = false;
  document.body.classList.add("overflow-hidden");
}

function closeSheet() {
  showBookingSheet.value = false;
  showCalendarPanel.value = false;
  document.body.classList.remove("overflow-hidden");
}

function handleMobileSearch() {
  if (!(apartments().checkinDate && apartments().checkoutDate)) {
    apartments().setCheckDataRangeIsEmpty();
    return;
  }
  navigateTo("/book/" + apartments().apartment?.slug);
}

if (apartments().apartment && apartments().apartment?.smoobuID) {
  await apartments().fetchApartmentSmoobu(apartments().apartment?.smoobuID);
}
</script>

<template>
  <div v-if="apartments().apartment" class="relative pb-24 lg:pb-0">
    <transition name="fade-left" mode="out-in">
      <GalleryDetail
        v-if="apartments().apartment?.photos && galleryIsActivated"
        :data="apartments().apartment?.photos"
        @closeGalleryDetail="toggleGallery"
      />
    </transition>

    <div class="w-full relative">
      <section class="relative max-w-7xl mx-auto px-6 py-10 lg:px-8">
        <client-only>
          <div class="flex flex-col gap-3 lg:flex-row h-96">
            <div class="h-full lg:w-6/12">
              <div
                class="overflow-hidden rounded-lg h-full cursor-pointer group"
                @click="toggleGallery"
              >
                <nuxt-img
                  :src="apartments().apartment?.feature?.url"
                  :alt="apartments().apartment?.feature?.name"
                  class="object-cover w-full h-full group-hover:scale-105 transition-all ease-in-out duration-300"
                  width="600"
                  height="200"
                />
              </div>
            </div>
            <div class="hidden lg:w-6/12 lg:block">
              <div class="grid grid-cols-2 gap-3 h-full">
                <div
                  v-for="(photo, index) in randomPhotos"
                  :key="index"
                  class="overflow-hidden rounded-lg cursor-pointer group"
                  @click="toggleGallery"
                >
                  <nuxt-img
                    :src="photo?.url"
                    :alt="photo?.name"
                    class="object-cover w-full h-full group-hover:scale-105 transition-all ease-in-out duration-300"
                    width="400"
                    height="200"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            class="absolute bottom-14 right-10 lg:right-14 bg-white/80 text-gray-900 px-4 py-2 rounded-md flex items-center gap-2"
            @click="toggleGallery"
          >
            <Icon name="image" class="text-2xl text-black" />
            Alle Bilder
          </button>
        </client-only>
      </section>
    </div>

    <section class="max-w-7xl mx-auto p-6 lg:px-8">
      <div class="flex flex-col gap-6 md:gap-12 lg:flex-row relative">
        <div class="lg:w-8/12">
          <ApartmentDetail :data="apartments().apartment" />
        </div>
        <client-only>
          <AsideDetail
            v-if="!isMobile"
            :data="apartments().apartment"
            :occupied-dates="apartments().occupiedDates"
          />
        </client-only>
      </div>
    </section>

    <div class="mt-16">
      <Maps
        :city-location="{
          lat: apartments().apartment.address.latitude,
          lng: apartments().apartment.address.longitude,
        }"
      />
    </div>

    <!-- Mobile fixed bottom bar -->
    <client-only>
      <div
        v-if="isMobile"
        class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-saba-primary/10 px-6 py-4 shadow-2xl shadow-saba-primary/20"
      >
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50">Preis pro Nacht</p>
            <span class="text-xl font-bold text-saba-darker">{{ currencyFormat(apartments().getTotalPrice) }}</span>
          </div>
          <button
            class="flex-shrink-0 bg-saba-darker text-white font-semibold px-6 py-3 rounded-full hover:bg-saba-dark transition-colors"
            @click="openSheet"
          >
            Reservieren
          </button>
        </div>
      </div>

      <!-- Mobile bottom sheet -->
      <Teleport to="body">
        <transition name="sheet">
          <div v-if="isMobile && showBookingSheet" class="fixed inset-0 z-50">
            <div class="absolute inset-0 bg-black/50" @click="closeSheet" />

            <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl h-[88vh] flex flex-col overflow-hidden">

              <!-- Sheet header -->
              <div class="flex items-center justify-between px-6 pt-5 pb-4 border-b border-saba-primary/10 shrink-0">
                <transition name="header-fade" mode="out-in">
                  <button
                    v-if="showCalendarPanel"
                    key="back"
                    class="flex items-center gap-1 text-saba-darker font-medium"
                    @click="showCalendarPanel = false"
                  >
                    <Icon name="chevron-left" class="text-3xl" />
                    Zurück
                  </button>
                  <h3 v-else key="title" class="font-semibold text-saba-darker">Reservierung</h3>
                </transition>
                <button
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-saba-primary/10 text-saba-darker hover:bg-saba-primary/20 transition-colors"
                  @click="closeSheet"
                >
                  <Icon name="close" class="text-xl" />
                </button>
              </div>

              <!-- Panels container -->
              <div class="flex-1 relative overflow-hidden">

                <!-- Panel 1: Booking form -->
                <div
                  class="absolute inset-0 overflow-y-auto p-6 transition-transform duration-300 ease-in-out"
                  :class="showCalendarPanel ? '-translate-x-full' : 'translate-x-0'"
                >
                  <!-- Price -->
                  <div class="mb-6">
                    <p class="text-xs font-semibold uppercase tracking-widest text-saba-primary/50 mb-1">Preis pro Nacht</p>
                    <div class="flex items-baseline gap-2">
                      <span class="text-3xl font-bold text-saba-darker">{{ currencyFormat(apartments().getTotalPrice) }}</span>
                      <span class="text-sm text-saba-primary/40">/ Nacht</span>
                    </div>
                  </div>

                  <div class="flex flex-col gap-4">
                    <!-- Date trigger button -->
                    <button
                      class="w-full flex items-center gap-3 px-4 py-3 rounded-full border text-left transition-colors"
                      :class="apartments().checkIfDataRangeIsEmpty
                        ? 'border-red-400 ring-1 ring-red-400'
                        : 'border-saba-primary/10 bg-saba-primary/5 hover:border-saba-primary/30'"
                      @click="showCalendarPanel = true"
                    >
                      <Icon name="alarm" class="text-xl text-saba-primary shrink-0" />
                      <span :class="apartments().checkinDate ? 'text-saba-darker' : 'text-saba-primary/50'">
                        {{ selectedDatesLabel }}
                      </span>
                    </button>

                    <!-- Travelers stepper -->
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
                          :disabled="apartments().travelers >= (apartments().apartment?.price?.maxTravelers ?? 10)"
                          @click="apartments().travelers++"
                        >+</button>
                      </div>
                    </div>

                    <!-- Reserve button -->
                    <button
                      class="w-full bg-saba-darker text-white font-semibold py-4 rounded-full hover:bg-saba-dark transition-colors"
                      @click="handleMobileSearch"
                    >
                      Reservieren
                    </button>
                  </div>
                </div>

                <!-- Panel 2: Calendar -->
                <div
                  class="absolute inset-0 overflow-y-auto p-6 transition-transform duration-300 ease-in-out mobile-sheet-calendar"
                  :class="showCalendarPanel ? 'translate-x-0' : 'translate-x-full'"
                >
                  <Datepicker
                    v-model="apartments().selectedRange"
                    inline
                    auto-apply
                    :range="true"
                    :multi-calendars="false"
                    :hide-navigation="['month', 'year']"
                    :min-date="today"
                    :max-date="maxDate"
                    :enable-time-picker="false"
                    locale="de"
                    :hide-offset-dates="true"
                    :disabled-dates="apartments().getDisabledDates"
                    :month-change-on-scroll="false"
                    :action-row="{ showPreview: false }"
                    @update:modelValue="apartments().updateDatesCalendar"
                    @cleared="apartments().updateDatesCalendar([])"
                  />
                  <button
                    v-if="apartments().checkinDate"
                    class="mt-4 hover:underline text-saba-primary w-full text-right text-sm"
                    @click="apartments().clearDatesCalendar()"
                  >
                    Zurücksetzen
                  </button>
                </div>

              </div>
            </div>
          </div>
        </transition>
      </Teleport>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
.card-list-transition-enter-active {
  @apply transition-all duration-300;
}
.card-list-transition-enter-from,
.card-list-transition-leave-to {
  @apply opacity-0 scale-95;
}

.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 0.3s ease;
  .absolute.bottom-0 {
    transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);
  }
}
.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
  .absolute.bottom-0 {
    transform: translateY(100%);
  }
}

.header-fade-enter-active,
.header-fade-leave-active {
  transition: opacity 0.15s ease;
}
.header-fade-enter-from,
.header-fade-leave-to {
  opacity: 0;
}

.mobile-sheet-calendar {
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

  :deep(.dp__main) { width: 100%; }
  :deep(.dp__main > div + div) { width: 100%; }
  :deep(.dp__active_date),
  :deep(.dp__range_start),
  :deep(.dp__range_end) {
    background-color: #4D1B26 !important;
    color: white !important;
  }
  :deep(.dp__today) { border-color: #4D1B26 !important; }
  :deep(.dp__calendar_header) { color: #4D1B26; font-weight: 700; }
}
</style>
