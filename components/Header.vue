<script setup lang="ts">
import { settings } from "~/store/settings";
const navMenu = ref([
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Apartaments",
    link: "/apartments",
  },
  {
    name: "Company",
    link: "/company",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]);
</script>
<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Sabania</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="settings().toggleMenu()"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <ul class="hidden lg:flex lg:gap-x-12">
        <li
          v-for="(item, index) in navMenu"
          :key="index"
          class="text-sm/6 font-semibold leading-snug tracking-tight"
        >
          <nuxt-link :to="item.link">
            <span
              class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              {{ item.name }}
            </span>
          </nuxt-link>
        </li>
      </ul>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <nuxt-link to="/login" class="text-sm/6 font-semibold text-gray-900"
          >Log in <span aria-hidden="true">&rarr;</span>
        </nuxt-link>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div
      v-if="settings().menuIsOpen"
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Sabania</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="settings().toggleMenu()"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <ul class="space-y-2 py-6">
              <li v-for="(item, index) in navMenu" :key="index">
                <nuxt-link
                  :to="item.link"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {{ item.name }}
                </nuxt-link>
              </li>
            </ul>
            <div class="py-6">
              <nuxt-link
                to="/login"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
