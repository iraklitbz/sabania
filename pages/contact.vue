<script setup lang="ts">
import MainHeadline from "~/components/Headline/MainHeadline.vue";
</script>

<template>
  <main class="w-full flex-auto">
    <MainHeadline
      :title="'Kontaktieren Sie uns'"
    />
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-0 pb-20">
      <p class="mb-10">Haben Sie Fragen oder möchten Sie eine Unterkunft buchen? Wir sind für Sie da. Kontaktieren Sie uns <span class="pl-1">jederzeit</span> wir freuen uns darauf, Ihnen weiterzuhelfen.</p>

      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <div class="lg:order-last" style="opacity: 1; transform: none">
            <form
              data-np-autofill-form-type="identity"
              data-np-checked="1"
              data-np-watching="1"
            >
              <h2 class="font-display text-base  text-neutral-950">
                Kontaktieren Sie uns
              </h2>
              <div class="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                <FormKit
                  type="form"
                  :actions="false"
                  form-class="flex flex-col gap-4"
                  name="input"
                  :on-submit-invalid="true"
                  :incomplete-message="false"
                >
                  <FormKit type="email" name="email" placeholder="Email" />
                  <FormKit type="text" name="subject" placeholder="Betreff" />
                  <FormKit
                    type="textarea"
                    name="textarea"
                    placeholder="Nachricht"
                  />
                  <FormKit
                    type="submit"
                    :classes="{
                      input: 'w-full flex justify-center',
                    }"
                  >
                    Senden
                  </FormKit>
                </FormKit>
              </div>
            </form>
          </div>
          <div style="opacity: 1; transform: none">
            <ul role="list" class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <li>
                <address class="text-sm not-italic text-black">
                  <strong class="text-black">Herforder Straße 109</strong
                  ><br />33602 Bielefeld
                </address>
              </li>
            </ul>
            <div
              class="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
            >
              <h2 class="font-display text-base text-neutral-950">
                Kontaktieren Sie uns
              </h2>
              <dl class="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                <div>
                  <dt class="text-neutral-950">Email</dt>
                  <dd>
                    <a
                      class="text-neutral-600 hover:text-neutral-950"
                      href="mailto:press@studioagency.com"
                      >hola@sabania.com</a
                    >
                  </dd>
                </div>
              </dl>
            </div>
            <div
              class="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
            >
              <h2 class="font-display text-base text-neutral-950">
                Folgen Sie uns
              </h2>
              <ul role="list" class="flex gap-x-10 text-neutral-950 mt-6">
                <li>
                  <a
                    aria-label="Facebook"
                    class="transition hover:text-neutral-700"
                    href="https://facebook.com"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 fill-current"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Instagram"
                    class="transition hover:text-neutral-700"
                    href="https://instagram.com"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 fill-current"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
