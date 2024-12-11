<script setup lang="ts">
  import { settings } from "~/store/settings"
  const containerRef = ref<HTMLElement | null>(null)
  const containerHeight = ref<number | null>(null)
  onMounted(() => {
    if (containerRef.value) {
      containerHeight.value = containerRef.value.offsetHeight
    }
  })
</script>
<template>
  <div
      class="relative z-50 overflow-hidden bg-neutral-950 pt-2 transition-all duration-300 ease-in-out"
      :style="settings().menuIsOpen ? `height: ${containerHeight}px` : 'height: 0.8rem'"
  >
    <div
        ref="containerRef"
        class="bg-neutral-800"
    >
      <div class="bg-neutral-950 pb-16 pt-14">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="flex items-center justify-between">
              <nuxt-link to="/">
                <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 sm:hidden">
                  <rect clip-path="url(#:R2mkra:-clip)" class="h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8"></rect>
                  <use href="#:R2mkra:-path" class="stroke-white" fill="none" stroke-width="1.5"></use>
                  <defs>
                    <path id=":R2mkra:-path" d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"></path>
                    <clipPath id=":R2mkra:-clip">
                      <use href="#:R2mkra:-path"></use>
                    </clipPath>
                  </defs>
                </svg>
                <svg viewBox="0 0 130 32" aria-hidden="true" class="hidden h-8 sm:block">
                  <svg viewBox="0 0 32 32" aria-hidden="true" preserveAspectRatio="xMinYMid meet">
                    <rect clip-path="url(#:Rcmkra:-clip)" class="h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8"></rect>
                    <use href="#:Rcmkra:-path" class="stroke-white" fill="none" stroke-width="1.5"></use>
                    <defs>
                      <path id=":Rcmkra:-path" d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"></path>
                      <clipPath id=":Rcmkra:-clip">
                        <use href="#:Rcmkra:-path"></use>
                      </clipPath>
                    </defs>
                  </svg>
                  <path class="fill-white" d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"></path>
                </svg>
              </nuxt-link>
              <div class="flex items-center gap-x-8">
                <nuxt-link
                    class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                    to="/contact"
                >
                  <span class="relative top-px">Contact us</span>
                </nuxt-link>
                <button
                    type="button"
                    class="group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10"
                    aria-label="Toggle navigation"
                    @click="settings().toggleMenu()"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-white group-hover:fill-neutral-200">
                    <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
                    <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="mt-px font-display text-5xl font-medium tracking-tight text-white">
        <div class="even:mt-px sm:bg-neutral-950">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="grid grid-cols-1 sm:grid-cols-2">
                <nuxt-link
                    class="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                    to="/apartments"
                >
                  Apartaments
                  <span class="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                </nuxt-link>
                <nuxt-link
                    class="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                    to="/about"
                >
                  About Us
                  <span class="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="even:mt-px sm:bg-neutral-950">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="grid grid-cols-1 sm:grid-cols-2">
                <nuxt-link class="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                   to="/contact"
                >
                  Contact
                  <span class="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
              <div>
                <h2 class="font-display text-base font-semibold text-white">Our office</h2>
                <ul role="list" class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <li>
                    <address class="text-sm not-italic text-neutral-300"><strong class="text-white">Madrid</strong><br>cantaperdiz 38<br>19240, Jadraque</address>
                  </li>
                </ul>
              </div>
              <div class="sm:border-l sm:border-transparent sm:pl-16">
                <h2 class="font-display text-base font-semibold text-white">Follow us</h2>
                <ul role="list" class="flex gap-x-10 text-white mt-6">
                  <li>
                    <a aria-label="Facebook" class="transition hover:text-neutral-200" href="https://facebook.com">
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a aria-label="Instagram" class="transition hover:text-neutral-200" href="https://instagram.com">
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>