<script setup>
import Header from '~/components/Menu/Header.vue'
import { settings } from "~/store/settings"
const router = useRouter()
router.afterEach(() => {
  settings().closeMenu()
});
</script>

<template>
  <div>
    <div>
      <Header />
      <Menu />
    </div>
      <div
          class="primary py-32 overflow-hidden bg-white rounded-t-[40px]"
      >
        <slot />
      </div>
    <Footer />
  </div>
</template>
