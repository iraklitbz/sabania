<script setup lang="ts">
import { locations } from "~/store/locations";
import CardDefault from "~/components/Cards/CardDefault.vue";
await locations().fetchLocations();

useSeoMeta({
  title: "Ferienwohnungen & Monteurwohnungen in Bielefeld, Oerlinghausen, Hiddenhausen & Hagen",
  ogTitle: "Sabania Apartments – Möblierte Wohnungen in Bielefeld, Oerlinghausen, Hiddenhausen & Hagen",
  ogUrl: "https://www.sabania.eu/",
  description:
    "Möblierte Apartments in Bielefeld, Oerlinghausen, Hiddenhausen und Hagen mieten. Ideal für Monteure, Geschäftsreisende und Kurzzeitmiete – flexibel und direkt buchbar.",
  ogDescription:
    "Komfortable Ferienwohnungen und Monteurunterkünfte in Bielefeld, Oerlinghausen, Hiddenhausen und Hagen. Für Monteure, Geschäftsreisende und längere Aufenthalte – flexibel und unkompliziert.",
  keywords: "Wohnung mieten Bielefeld, Monteurwohnung Bielefeld, Ferienwohnung Oerlinghausen, Wohnung mieten Hiddenhausen, Monteurunterkunft Hagen, möblierte Apartments Ostwestfalen-Lippe, Kurzzeitmiete NRW, Sabania",
});

useHead({
  link: [{ rel: "canonical", href: "https://www.sabania.eu/" }],
});

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SabaNia GmbH',
      url: 'https://www.sabania.eu',
      logo: 'https://www.sabania.eu/favicon.svg',
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
