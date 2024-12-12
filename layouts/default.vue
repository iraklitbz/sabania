<script setup>
import Header from '~/components/Menu/Header.vue'
import { settings } from "~/store/settings"
const router = useRouter()
router.afterEach(() => {
  settings().closeMenu()
});
</script>

<template>
  <div class="general">
      <Header />
      <Menu />
      <div
          class="pt-32 bg-white rounded-t-[40px]"
      >
        <slot />
      </div>
      <Footer />
  </div>
</template>
