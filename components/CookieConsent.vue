<script setup lang="ts">
const { showBanner, acceptAll, rejectOptional, saveConsent } = useCookieConsent()
const showSettings = ref(false)
const analyticsEnabled = ref(true)

const saveCustom = () => {
  saveConsent({ essential: true, analytics: analyticsEnabled.value })
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showBanner" class="fixed bottom-4 right-4 z-[9999]">
        <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4">
          <h2 class="text-lg font-semibold text-gray-900">🍪 Cookie-Einstellungen</h2>

          <template v-if="!showSettings">
            <p class="text-sm text-gray-600">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
              Einige sind für den Betrieb der Website unerlässlich, andere helfen uns,
              die Nutzung zu analysieren und unseren Service zu verbessern.
            </p>
            <div class="flex flex-col sm:flex-row gap-2">
              <button class="flex-1 bg-saba-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition" @click="acceptAll">
                Alle akzeptieren
              </button>
              <button class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition" @click="rejectOptional">
                Nur notwendige
              </button>
              <button class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition" @click="showSettings = true">
                Einstellungen
              </button>
            </div>
          </template>

          <template v-else>
            <div class="space-y-3">
              <div class="p-3 bg-gray-50 rounded-lg space-y-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Notwendige Cookies</p>
                  <span class="text-xs text-gray-400 font-medium">Immer aktiv</span>
                </div>
                <ul class="text-xs text-gray-500 list-disc list-inside space-y-0.5">
                  <li>Authentifizierung (Login-Session)</li>
                  <li>Cookie-Einstellungen</li>
                  <li>Warenkorb &amp; Buchungsdaten</li>
                </ul>
              </div>

              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p class="text-sm font-medium text-gray-900">Analyse-Cookies</p>
                  <p class="text-xs text-gray-500">Google Analytics – hilft uns, die Nutzung zu verstehen</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input v-model="analyticsEnabled" type="checkbox" class="sr-only peer">
                  <div class="w-9 h-5 bg-gray-300 peer-checked:bg-saba-primary rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full" />
                </label>
              </div>
            </div>

            <div class="flex gap-2 pt-2">
              <button class="flex-1 bg-saba-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition" @click="saveCustom">
                Auswahl speichern
              </button>
              <button class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition" @click="showSettings = false">
                Zurück
              </button>
            </div>
          </template>

          <p class="text-xs text-gray-400 text-center">
            <NuxtLink to="/agb" class="underline">Datenschutzerklärung</NuxtLink>
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
