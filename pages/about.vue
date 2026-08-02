<script setup lang="ts">
import MainHeadline from "~/components/Headline/MainHeadline.vue";

useSeoMeta({
  title: "Über uns – Ihr Partner für Kurzzeitunterkünfte",
  description: "SabaNia bietet stilvolle möblierte Apartments in Bielefeld, Oerlinghausen, Hiddenhausen und Hagen. Ideal für Monteure, Geschäftsreisende und längere Aufenthalte.",
  ogTitle: "Über SabaNia – Möblierte Apartments in Bielefeld, Oerlinghausen, Hiddenhausen & Hagen",
  ogUrl: "https://sabania.eu/about",
  ogDescription: "Komfortable Kurzzeitunterkünfte in Bielefeld, Hiddenhausen, Oerlinghausen und Hagen. Hochwertig ausgestattet, flexibel buchbar.",
});

useHead({
  link: [{ rel: "canonical", href: "https://sabania.eu/about" }],
});
</script>

<template>
  <main>
    <MainHeadline
      :title="'Über uns'"
      :description="'SabaNia – Ihr Partner für stilvolle und komfortable Kurzzeit-Unterkünfte'"
    />
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-xl text-neutral-600 pb-20">
      <div class="mb-8">
        <nuxt-link to="/contact" class="inline-flex items-center gap-2 bg-saba-primary hover:bg-saba-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-base">
          👉 Kontaktieren Sie uns
        </nuxt-link>
      </div>
      <p class="mb-5">Willkommen bei SabaNia, Ihrem zuverlässigen Anbieter für stilvolle und gemütliche Kurzzeit-Unterkünfte in Bielefeld, Hiddenhausen, Oerlinghausen und Hagen.</p>
      <p class="mb-5">Wir bieten Ihnen hochwertig ausgestattete Apartments und Zimmer, die Funktionalität mit einer angenehmen Wohlfühlatmosphäre verbinden – ideal für Geschäftsreisende, Monteure, Kurzurlauber oder längere Aufenthalte.</p>
      <p class="mb-5">Unsere Unterkünfte überzeugen durch durchdachte Ausstattung, moderne Einrichtung und eine konsequent hohe Sauberkeit. Jedes Detail ist darauf ausgelegt, Ihnen einen entspannten und unkomplizierten Aufenthalt zu ermöglichen – ganz gleich, ob Sie nur wenige Tage oder mehrere Wochen bleiben.</p>
      <p class="mb-5">Dank flexibler Buchungsmöglichkeiten und einer reibungslosen Abwicklung über Plattformen wie Airbnb und Booking.com garantieren wir Ihnen eine einfache und zuverlässige Organisation Ihres Aufenthalts.</p>
      <p class="mb-5 font-semibold text-neutral-800">Unser Anspruch ist klar:<br />höchste Qualität, faire Preise und ein Service, auf den Sie sich jederzeit verlassen können.</p>
      <p class="mb-5">Ob beruflich unterwegs oder auf der Suche nach einem komfortablen Zuhause auf Zeit – bei SabaNia finden Sie die passende Unterkunft.</p>
      <p class="mb-5 font-semibold text-neutral-800">Ankommen. Entspannen. Wohlfühlen.</p>
      <p class="mb-5">Entdecken Sie Ihr Zuhause auf Zeit – mit SabaNia.</p>
    </div>
  </main>
</template>
