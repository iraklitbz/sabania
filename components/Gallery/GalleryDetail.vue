<script setup lang="ts">
type Photos = {
  url: string;
  name: string;
};

const props = defineProps<{
  data: {
    name: string;
    photos: Photos[];
  };
}>();
const emit = defineEmits<{
  (e: "closeGalleryDetail"): void;
}>();
const openDetailImage = ref<boolean>(false);
const selectedImage = ref<Photos | null>(null);
function handleDetailImage(photo: Photos) {
  openDetailImage.value = true;
  selectedImage.value = photo;
}
function hanldeClosePhoto() {
  openDetailImage.value = false;
}
</script>

<template>
  <main
    class="bg-white h-screen fixed top-0 left-0 z-40 w-full"
    :class="openDetailImage ? 'overflow-hidden' : 'overflow-y-auto'"
  >
    <div class="relative max-w-7xl mx-auto p-6 lg:px-8">
      <header class="sticky top-0 bg-white z-50 p-6 lg:px-8">
        <button
          class="flex items-center gap-1"
          @click="emit('closeGalleryDetail')"
        >
          <Icon name="icon:chevron-left" class="text-3xl text-black" />
          Zurück
        </button>
      </header>
      <section class="p-6 lg:px-8">
        <div v-for="(item, index) in props.data" :key="index" class="mt-10">
          <h2 class="text-xl mb-5">{{ item?.name }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <div
              v-for="photo in item?.photos"
              :key="photo?.name"
              class="overflow-hidden rounded-lg h-44 cursor-pointer group"
            >
              <nuxt-img
                :src="photo?.url"
                :alt="photo?.name"
                class="object-cover w-full h-full group-hover:scale-105 transition-all ease-in-out duration-300"
                width="400"
                height="200"
                @click="handleDetailImage(photo)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <transition name="fade" mode="out-in">
      <div
        v-if="openDetailImage"
        class="bg-black fixed top-0 left-0 w-full h-full bg-opacity-95 px-10 py-8 pb-20 overflow-y-auto z-50"
      >
        <div
          class="flex flex-col justify-center items-center max-w-4xl mx-auto"
        >
          <button
            class="flex items-center gap-1 mb-5 text-white"
            @click="hanldeClosePhoto()"
          >
            <Icon name="icon:close" class="text-3xl text-white" />
            Close
          </button>
          <nuxt-img
            :src="selectedImage?.url"
            :alt="selectedImage?.name"
            class="object-cover w-full h-full"
            width="400"
            height="200"
          />
        </div>
      </div>
    </transition>
  </main>
</template>

<style scoped></style>
