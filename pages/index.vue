<script setup lang="ts">
import { locations } from "~/store/locations";
import CardDefault from "~/components/Cards/CardDefault.vue";
await locations().fetchLocations();

useSeoMeta({
  title: "Möblierte Wohnungen mieten in Ostwestfalen-Lippe",
  ogTitle: "Sabania Apartments – Möblierte Wohnungen in Bielefeld & OWL",
  description:
    "Möblierte Apartments in Bielefeld, Detmold und Ostwestfalen-Lippe mieten. Ideal für Monteure, Geschäftsreisende und Kurzzeitmiete – flexibel und direkt buchbar.",
  ogDescription:
    "Komfortable Ferienwohnungen und Monteurunterkünfte in NRW. Für Monteure, Geschäftsreisende und längere Aufenthalte – flexibel und unkompliziert.",
  keywords: "Wohnung mieten Bielefeld, Monteurwohnung OWL, möblierte Apartments Ostwestfalen-Lippe, Kurzzeitmiete NRW, Ferienwohnung Bielefeld, Apartment mieten Lippe, Sabania",
});

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SabaNia GmbH',
      url: 'https://sabania.eu',
      logo: 'https://sabania.eu/favicon.svg',
      contactPoint: { '@type': 'ContactPoint', telephone: '+49-172-1577536', contactType: 'customer service', availableLanguage: ['German'] },
      address: { '@type': 'PostalAddress', streetAddress: 'Herforderstraße 109', postalCode: '33602', addressLocality: 'Bielefeld', addressCountry: 'DE' },
    }),
  }],
});
</script>

<template>
  <main>
    <Hero />
    <section class="relative max-w-7xl mx-auto p-6 lg:px-8">
      <div class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        <CardDefault
          v-for="(location, index) in locations().locations"
          :key="index"
          :data="location"
        />
      </div>
    </section>
  </main>
</template>
