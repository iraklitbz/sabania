<script setup lang="ts">
import MainHeadline from "~/components/Headline/MainHeadline.vue";
</script>

<template>
  <main>
    <MainHeadline
      :title="'Über uns'"
      :description="'Sabania – Ihr Partner für stilvolle und komfortable Kurzzeit-Unterkünfte.'"
    />
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-xl text-neutral-600 pb-20">
      <p class="mb-5">Unser Unternehmen mit Sitz in Bielefeld hat es sich zur Aufgabe gemacht, Ihnen Apartments anzubieten, die nicht nur praktisch, sondern auch gemütlich und geschmackvoll gestaltet sind.</p>
      <p class="mb-5">Ob Geschäftsreise, Kurzurlaub oder ein spontaner Aufenthalt – bei Sabania finden Sie Ihr perfektes Zuhause auf Zeit. Wir legen Wert auf Qualität, Sauberkeit und eine unkomplizierte Buchungserfahrung über Plattformen wie AirBnB und Booking.</p>
      <p class="mb-5">Ihr Wohlbefinden steht bei uns an erster Stelle.</p>
      <p>In der art auch rein:</p>
      <div>
        <div class="my-10">
          <iframe
              class="w-full aspect-video"
              src="https://www.youtube.com/embed/EA9q_LLqI4A?enablejsapi=1&version=3&playerapiid=ytplayer"
              title="Video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
          ></iframe>
        </div>
        <div>
          <div>
            <iframe
                class="w-full aspect-video"
                src="https://www.youtube.com/embed/SreMQfipczA?enablejsapi=1&version=3&playerapiid=ytplayer"
                title="Video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
