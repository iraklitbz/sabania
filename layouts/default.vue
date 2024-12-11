<script setup>
import Header from '~/components/Menu/Header.vue'
import { settings } from "~/store/settings";
</script>

<template>
  <div>
    <div>
      <Header />
      <Menu />
    </div>
      <div
          class="primary py-32 overflow-hidden bg-white rounded-t-[40px]"
          :class="settings().menuIsOpen ? 'menu-open' : ''"
      >
        <slot />
      </div>
    <Footer />
  </div>
</template>
