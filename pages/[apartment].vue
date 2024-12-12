<script setup lang="ts">
import { apartments } from "~/store/apartments";
import AsideDetail from "~/components/Aside/AsideDetail";
import ApartmentDetail from "~/components/ApartmentDetail.vue";
import Maps from "~/components/Maps.vue";
const route = useRoute();
await apartments().fetchApartment(route.params.apartment as string);
if (
  !apartments().apartment ||
  Object.keys(apartments().apartment).length === 0
) {
  navigateTo("/404");
}

const randomPhotos = ref([]);
const galleryIsActivated = ref(false);
onMounted(() => {
  function getRandomPhotos(apartmentPhotos, count = 4) {
    if (!apartmentPhotos || !Array.isArray(apartmentPhotos)) return [];

    const allPhotos = apartmentPhotos.flatMap((category) =>
      category.photos.map((photo) => ({
        name: category.name,
        url: photo.url,
      })),
    );

    const shuffledPhotos = allPhotos.sort(() => Math.random() - 0.5);

    return shuffledPhotos.slice(0, count);
  }
  randomPhotos.value = getRandomPhotos(apartments().apartment?.photos, 4);
});
function toggleGallery() {
  galleryIsActivated.value = !galleryIsActivated.value;
  document.body.classList.toggle("overflow-hidden", galleryIsActivated.value);
}
if (apartments().apartment && apartments().apartment?.smoobuID) {
  await apartments().fetchApartmentSmoobu(apartments().apartment?.smoobuID);
}
</script>

<template>
  <div v-if="apartments().apartment" class="relative">
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
            <div class="lg:w-6/12">
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
            class="absolute bottom-14 right-14 bg-white/80 text-gray-900 px-4 py-2 rounded-md flex items-center gap-2"
            @click="toggleGallery"
          >
            <Icon name="icon:image" class="text-2xl text-black" />
            See all photos
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
</style>
