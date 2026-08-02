<script setup lang="ts">
import MainHeadline from "~/components/Headline/MainHeadline.vue";

useSeoMeta({
  title: "Kontakt – Fragen zu unseren Apartments",
  description: "Kontaktieren Sie Sabania für Fragen zu unseren möblierten Apartments in Bielefeld, Oerlinghausen, Hiddenhausen und Hagen. Wir helfen Ihnen gerne weiter.",
  ogTitle: "Kontakt – Sabania Apartments",
  ogUrl: "https://www.sabania.eu/contact",
  ogDescription: "Haben Sie Fragen zu unseren Wohnungen? Schreiben Sie uns – wir antworten schnell und unkompliziert.",
});

useHead({
  link: [{ rel: "canonical", href: "https://www.sabania.eu/contact" }],
});

const sending = ref(false);
const sent = ref(false);
const error = ref("");

async function handleSubmit(fields: { email: string; subject: string; textarea: string }) {
  sending.value = true;
  error.value = "";
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: fields,
    });
    sent.value = true;
  } catch {
    error.value = "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.";
  } finally {
    sending.value = false;
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s ease, max-height 0.25s ease, margin 0.25s ease;
  overflow: hidden;
  max-height: 80px;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  margin-bottom: 0;
}
</style>

<template>
  <main class="w-full flex-auto">
    <MainHeadline
      :title="'Kontaktieren Sie uns'"
    />
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-0 pb-20">
      <p class="mb-10 text-lg">Haben Sie Fragen oder möchten Sie eine Unterkunft buchen? Wir sind für Sie da. Kontaktieren Sie uns <span class="pl-1">jederzeit</span> wir freuen uns darauf, Ihnen weiterzuhelfen.</p>

      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <div class="lg:order-last" style="opacity: 1; transform: none">
            <h2 class="font-display text-lg text-saba-darker">
              Kontaktieren Sie uns
            </h2>
            <div class="isolate mt-6 rounded-2xl bg-white/50">
              <Transition name="fade" mode="out-in">

                <!-- Estado de éxito -->
                <div v-if="sent" key="success" class="flex flex-col items-center gap-4 py-12 px-6 text-center">
                  <div class="flex items-center justify-center w-16 h-16 rounded-full bg-saba-success/10">
                    <svg class="w-8 h-8 text-saba-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="text-xl font-semibold text-saba-darker">Nachricht gesendet!</p>
                  <p class="text-base text-neutral-600">Vielen Dank. Wir melden uns so schnell wie möglich bei Ihnen.</p>
                  <button
                    class="mt-2 text-sm text-saba-primary underline underline-offset-2 hover:text-saba-darker transition"
                    @click="sent = false"
                  >
                    Neue Nachricht senden
                  </button>
                </div>

                <!-- Formulario -->
                <FormKit
                  v-else
                  key="form"
                  type="form"
                  :actions="false"
                  form-class="flex flex-col gap-4"
                  name="input"
                  :on-submit-invalid="true"
                  :incomplete-message="false"
                  @submit="handleSubmit"
                >
                  <FormKit type="email" name="email" placeholder="Email" validation="required|email" />
                  <FormKit type="text" name="subject" placeholder="Betreff" validation="required" />
                  <FormKit
                    type="textarea"
                    name="textarea"
                    placeholder="Nachricht"
                    validation="required"
                  />

                  <!-- Banner de error -->
                  <Transition name="slide">
                    <div v-if="error" class="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 mb-1">
                      <svg class="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                      <span>{{ error }}</span>
                    </div>
                  </Transition>

                  <!-- Botón con spinner -->
                  <button
                    type="submit"
                    :disabled="sending"
                    class="w-full flex items-center justify-center gap-2 text-lg rounded-xl px-6 py-3 bg-saba-primary text-white font-medium transition hover:bg-saba-darker disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <svg
                      v-if="sending"
                      class="animate-spin h-5 w-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    {{ sending ? "Wird gesendet…" : "Senden" }}
                  </button>
                </FormKit>

              </Transition>
            </div>
          </div>
          <div style="opacity: 1; transform: none">
            <ul role="list" class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <li>
                <address class="text-lg not-italic text-black">
                  <strong class="text-black">Herforder Straße 109</strong
                  ><br />33602 Bielefeld
                </address>
              </li>
            </ul>
            <div
              class="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
            >
              <h2 class="font-display text-lg text-saba-darker">
                Kontaktieren Sie uns
              </h2>
              <dl class="mt-6 grid grid-cols-1 text-lg gap-8 sm:grid-cols-2">
                <div>
                  <dt class="text-saba-darker">Email</dt>
                  <dd>
                    <a
                      class="text-neutral-600 hover:text-saba-darker"
                      href="mailto:info@sabania.eu"
                      >info@sabania.eu</a
                    >
                  </dd>
                </div>
              </dl>
            </div>
            <div
              class="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
            >
              <h2 class="font-display text-lg text-saba-darker">
                Folgen Sie uns
              </h2>
              <ul role="list" class="flex gap-x-10 text-saba-darker mt-6">
                <li>
                  <a
                    aria-label="Instagram"
                    class="transition hover:text-neutral-700"
                    href="https://www.instagram.com/sabania_apartments/"
                    target="_blank"
                    rel="noopener noreferrer"
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
