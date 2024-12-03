<script setup lang="ts">
  type Photos = {
    url: string,
    name: string,
  }
  const props = defineProps<{
    data: {
      name: string,
      photos: Photos[],
    }
  }>()
  const emit = defineEmits<{
    (e: 'closeGalleryDetail'): void
  }>()
</script>

<template>
  <main
    class="bg-white h-screen fixed top-0 left-0 z-50 w-full overflow-y-auto"
  >
    <div
        class="relative max-w-7xl mx-auto p-6 lg:px-8"
    >
     <button
        class="flex items-center gap-1"
        @click="emit('closeGalleryDetail')"
     >
       <Icon
           name="icon:chevron-left"
           class="text-3xl text-black"
       />
       Back
     </button>
      <section>
        <div
          v-for="(item, index) in props.data"
          :key="index"
          class="mt-10"
        >
          <h2 class="text-xl mb-5">{{item?.name}}</h2>
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
          >
              <div
                v-for="photo in item?.photos"
                :key="photo?.name"
                class="overflow-hidden rounded-lg h-44"
              >
                  <nuxt-img
                      :src="photo?.url"
                      :alt="photo?.name"
                      class="object-cover w-full h-full"
                      width="400"
                      height="200"
                  />
              </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>

</style>