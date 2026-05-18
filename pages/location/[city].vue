<script setup lang="ts">
import { locations } from "~/store/locations";
import { apartments } from "~/store/apartments";
import CardApartments from "~/components/Cards/CardApartments.vue";
import MainHeadline from "~/components/Headline/MainHeadline.vue";
import Maps from "~/components/Maps.vue";
import { apartmentsByLocaleQuery } from "~/graphql/queries/apartments.query.gql";
import { apiCall } from "~/composables/apiCall";

const route = useRoute();
await locations().fetchLocation(route.params.city as string);

useSeoMeta({
  title: () => `Wohnungen mieten in ${locations().location?.city ?? ""}`,
  ogTitle: () => `Ferienwohnungen & Monteurunterkünfte in ${locations().location?.city ?? ""} – Sabania`,
  description: () =>
    `Verfügbare Apartments in ${locations().location?.city ?? ""} mieten. Komfortabel, flexibel und direkt buchbar – ideal für Monteure und Geschäftsreisende.`,
  ogDescription: () =>
    `Verfügbare Apartments in ${locations().location?.city ?? ""} mieten. Komfortabel, flexibel und direkt buchbar – ideal für Monteure und Geschäftsreisende.`,
});
if (!locations().location || Object.keys(locations().location).length === 0) {
  navigateTo("/404");
}
if (Object.keys(locations().location).length > 0) {
  await apartments().fetchApartmentsByLocal(route.params.city as string);
}

// Pre-fill dates from hero search
const fromParam = route.query.from as string;
const toParam = route.query.to as string;
if (fromParam && toParam) {
  apartments().checkinDate = fromParam;
  apartments().checkoutDate = toParam;
  apartments().selectedRange = [fromParam, toParam] as any;
}

// Filter by availability when dates are provided
const displayedApartments = ref(apartments().apartments);

async function checkAvailability(apts: any[]): Promise<any[]> {
  if (!fromParam || !toParam) return apts;
  const results = await Promise.all(
    apts.map(async (apt) => {
      if (!apt.smoobuID) return { apt, available: true };
      try {
        const data = await $fetch<{ bookings: { arrival: string; departure: string }[] }>(
          `/api/availability/${apt.smoobuID}`
        );
        const occupied = data?.bookings ?? [];
        const available = !occupied.some((b) => b.arrival <= toParam && b.departure >= fromParam);
        return { apt, available };
      } catch {
        return { apt, available: true };
      }
    })
  );
  return results.filter((r) => r.available).map((r) => r.apt);
}

if (fromParam && toParam) {
  displayedApartments.value = await checkAvailability(apartments().apartments);
}

// Haversine distance in km
function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

type NearbyCity = { city: string; slug: string; distanceKm: number; apartments: any[] };
const nearbyCities = ref<NearbyCity[]>([]);

if (fromParam && toParam && displayedApartments.value.length === 0) {
  if (!locations().locations.length) await locations().fetchLocations();

  const { latitude: curLat, longitude: curLng } = locations().location;

  const candidates = locations().locations
    .filter((l) => l.slug !== route.params.city)
    .map((l) => ({ ...l, km: distanceKm(curLat, curLng, l.latitude, l.longitude) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, 4);

  const nearbyResults = await Promise.all(
    candidates.map(async (loc) => {
      const data = await apiCall(apartmentsByLocaleQuery, "data", {
        filters: { location: { slug: { eq: loc.slug } } },
      });
      const apts = data?.apartments ?? [];
      const available = await checkAvailability(apts);
      return { city: loc.city, slug: loc.slug, distanceKm: loc.km, apartments: available };
    })
  );

  nearbyCities.value = nearbyResults.filter((r) => r.apartments.length > 0);
}
</script>

<template>
  <div>
    <MainHeadline
      :title="locations().location.city"
      :description="locations().location.description"
    />
    <section
      v-if="locations().location"
      class="relative max-w-7xl mx-auto p-6 lg:px-8"
    >
      <Breadcumbs :name="locations().location.city" />
      <p v-if="fromParam && toParam" class="mt-4 text-sm text-saba-primary/60">
        {{ displayedApartments.length }} {{ displayedApartments.length === 1 ? 'Wohnung verfügbar' : 'Wohnungen verfügbar' }}
        vom {{ new Date(fromParam).toLocaleDateString('de-DE') }} bis {{ new Date(toParam).toLocaleDateString('de-DE') }}
      </p>

      <!-- Empty state -->
      <div v-if="fromParam && toParam && displayedApartments.length === 0" class="mt-16 space-y-12">

        <!-- No availability message -->
        <div class="flex flex-col items-center text-center gap-6 py-16 px-6 rounded-3xl border border-saba-primary/10 bg-saba-primary/5">
          <div class="w-16 h-16 rounded-full bg-saba-primary/10 flex items-center justify-center">
            <Icon name="alarm" class="text-3xl text-saba-primary" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-saba-darker mb-2">Keine Verfügbarkeit</h2>
            <p class="text-saba-primary/60 max-w-sm">
              Für den Zeitraum vom
              <span class="font-semibold text-saba-darker">{{ new Date(fromParam).toLocaleDateString('de-DE') }}</span>
              bis
              <span class="font-semibold text-saba-darker">{{ new Date(toParam).toLocaleDateString('de-DE') }}</span>
              sind leider keine Wohnungen verfügbar.
            </p>
          </div>
          <nuxt-link
            to="/"
            class="bg-saba-primary hover:bg-saba-dark text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Neue Suche starten
          </nuxt-link>
        </div>

        <!-- Nearby cities with availability -->
        <div v-if="nearbyCities.length > 0">
          <h3 class="text-xl font-bold text-saba-darker mb-1">In der Nähe verfügbar</h3>
          <p class="text-sm text-saba-primary/60 mb-8">Diese Städte in der Umgebung haben freie Wohnungen für deinen Zeitraum.</p>

          <div class="space-y-10">
            <div v-for="loc in nearbyCities" :key="loc.slug">
              <!-- City header -->
              <div class="flex items-center gap-3 mb-5">
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <h4 class="text-lg font-bold text-saba-darker">{{ loc.city }}</h4>
                    <span class="text-xs font-semibold bg-saba-primary/10 text-saba-primary px-2.5 py-1 rounded-full">
                      {{ loc.distanceKm }} km entfernt
                    </span>
                  </div>
                  <p class="text-sm text-saba-primary/50">{{ loc.apartments.length }} {{ loc.apartments.length === 1 ? 'Wohnung' : 'Wohnungen' }} verfügbar</p>
                </div>
              </div>

              <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <CardApartments
                  v-for="(apt, i) in loc.apartments"
                  :key="i"
                  :data="apt"
                  :from="fromParam"
                  :to="toParam"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div v-else class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        <CardApartments
          v-for="(apartment, index) in displayedApartments"
          :key="index"
          :data="apartment"
          :from="fromParam"
          :to="toParam"
        />
      </div>
    </section>
    <div class="mt-16">
      <Maps
        :city-location="{
          lat: locations().location.latitude,
          lng: locations().location.longitude,
        }"
        :apartaments-location="apartments().apartments"
      />
    </div>
  </div>
</template>

<style scoped></style>
