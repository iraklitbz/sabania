<script setup lang="ts">
import type { FormKitNode } from "@formkit/core"
import { FormKitMessages } from "@formkit/vue"
import parsePhoneNumber from "libphonenumber-js"
import { customer } from "~/store/customer"
import PayPalButton from "~/components/PayPalButton.vue"

const store = customer()
const user = useStrapiUser()
const userFields = ref()
const phoneGroup = ref()

// Inline login
const showLogin = ref(false)
const loginForm = reactive({ email: "", password: "" })
const loginLoading = ref(false)
const loginError = ref("")
const { login, getProviderAuthenticationUrl } = useStrapiAuth()

async function handleInlineLogin() {
  loginLoading.value = true
  loginError.value = ""
  try {
    await login({ identifier: loginForm.email, password: loginForm.password })
    showLogin.value = false
  } catch (e: any) {
    const msg = e?.error?.message || ""
    const translations: Record<string, string> = {
      "Your account email is not confirmed": "E-Mail noch nicht bestätigt",
      "Invalid identifier or password": "Ungültige E-Mail oder Passwort",
    }
    loginError.value = translations[msg] || msg || "Ungültige E-Mail oder Passwort"
  } finally {
    loginLoading.value = false
  }
}

function handleGoogleLogin() {
  localStorage.setItem("auth_redirect", window.location.pathname + window.location.search)
  window.location.href = getProviderAuthenticationUrl("google")
}

const countries = [
  { label: "DE", value: "DE" },
  { label: "AT", value: "AT" },
  { label: "CH", value: "CH" },
  { label: "ES", value: "ES" },
  { label: "FR", value: "FR" },
  { label: "IT", value: "IT" },
  { label: "NL", value: "NL" },
  { label: "BE", value: "BE" },
  { label: "PL", value: "PL" },
  { label: "GB", value: "GB" },
  { label: "US", value: "US" },
  { label: "PT", value: "PT" },
]

function handlePhoneValidation(node: FormKitNode) {
  try {
    const value = node.value as any
    if (!value?.phone) return false
    const phoneNumber = parsePhoneNumber(value.phone, {
      defaultCountry: value.phoneCountry,
      extract: false,
    })
    if (!phoneNumber) return false
    return phoneNumber.isValid()
  } catch {
    return false
  }
}

function isPhoneRequired(node: FormKitNode) {
  const value = node.value as any
  return !!value?.phone && !!value?.phoneCountry
}

const submitForm = () => {
  userFields?.value?.node.submit()
}
</script>
<template>
  <div>
    <!-- NOT logged in: inline login option -->
    <div v-if="!user" class="mb-8 rounded-xl border border-saba-primary/20 bg-saba-primary/5 p-5">
      <div v-if="!showLogin">
        <p class="text-sm text-zinc-700 mb-3">
          <strong>Haben Sie bereits ein Konto?</strong> Loggen Sie sich ein und sparen Sie sich das Ausfüllen.
        </p>
        <button
          class="rounded-full bg-saba-primary px-4 py-1.5 text-sm font-medium text-white transition hover:bg-saba-dark"
          @click="showLogin = true"
        >
          Einloggen
        </button>
      </div>
      <div v-else class="space-y-3">
        <div v-if="loginError" class="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
          {{ loginError }}
        </div>

        <!-- Google login -->
        <button
          type="button"
          class="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          @click="handleGoogleLogin"
        >
          <svg class="size-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Weiter mit Google
        </button>

        <!-- Divider -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-zinc-200" />
          </div>
          <div class="relative flex justify-center">
            <span class="px-3 text-xs text-zinc-400" style="background-color: #F6F3F4">oder</span>
          </div>
        </div>

        <!-- Email/password login -->
        <FormKit
          v-model="loginForm.email"
          type="email"
          placeholder="E-Mail"
          @keydown.enter="handleInlineLogin"
        />
        <FormKit
          v-model="loginForm.password"
          type="password"
          placeholder="Passwort"
          @keydown.enter="handleInlineLogin"
        />
        <div class="flex gap-2">
          <button
            :disabled="loginLoading"
            class="rounded-full bg-saba-primary px-4 py-1.5 text-sm font-medium text-white transition hover:bg-saba-dark disabled:opacity-50"
            @click="handleInlineLogin"
          >
            {{ loginLoading ? 'Laden...' : 'Anmelden' }}
          </button>
          <button
            class="rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-50"
            @click="showLogin = false"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>

    <div v-if="!user" class="mb-8 h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent" />

    <!-- Logged-in: badge -->
    <div v-if="user" class="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-4 py-3">
      <span class="size-2 rounded-full bg-green-500" />
      <p class="text-sm text-green-800">
        Eingeloggt als <strong>{{ user.email }}</strong> — Sie können direkt bezahlen.
      </p>
    </div>

    <!-- Personal data form: only for non-logged users -->
    <FormKit
      v-if="!user"
      ref="userFields"
      v-model="store.userData"
      name="userFields"
      type="form"
      :actions="false"
      form-class="flex flex-col gap-4 mb-10"
      :incomplete-message="false"
    >
      <div class="flex flex-col md:flex-row w-full gap-3">
        <FormKit
          type="text"
          name="firstName"
          label="Vorname"
          placeholder="z.B. Max"
          validation="required"
          :validation-messages="{ required: 'Bitte geben Sie Ihren Vornamen ein' }"
        />
        <FormKit
          type="text"
          name="lastName"
          label="Nachname"
          placeholder="z.B. Mustermann"
          validation="required"
          :validation-messages="{ required: 'Bitte geben Sie Ihren Nachnamen ein' }"
        />
      </div>
      <FormKit
        type="text"
        name="street"
        label="Straße und Hausnummer"
        placeholder="z.B. Musterstraße 12"
        validation="required"
        :validation-messages="{ required: 'Bitte geben Sie Ihre Adresse ein' }"
      />
      <div class="flex flex-col md:flex-row w-full gap-3">
        <FormKit
          type="text"
          name="postalCode"
          label="PLZ"
          placeholder="z.B. 10115"
          validation="required|number"
          :validation-messages="{
            required: 'Bitte geben Sie Ihre PLZ ein',
            number: 'Bitte geben Sie eine gültige PLZ ein'
          }"
        />
        <FormKit
          type="text"
          name="location"
          label="Stadt"
          placeholder="z.B. Berlin"
          validation="required"
          :validation-messages="{ required: 'Bitte geben Sie Ihre Stadt ein' }"
        />
      </div>
      <FormKit
        type="email"
        name="email"
        label="E-Mail"
        placeholder="z.B. max@beispiel.de"
        validation="required|email"
        :validation-messages="{
          required: 'Bitte geben Sie Ihre E-Mail ein',
          email: 'Bitte geben Sie eine gültige E-Mail ein'
        }"
      />
      <!-- Phone with country code validation -->
      <div>
        <FormKit
          ref="phoneGroup"
          name="phoneGroup"
          type="group"
          validation="isPhoneRequired|+handlePhoneValidation"
          :validation-rules="{ handlePhoneValidation, isPhoneRequired }"
          validation-visibility="dirty"
          :validation-messages="{
            handlePhoneValidation: 'Bitte geben Sie eine gültige Telefonnummer ein',
            isPhoneRequired: 'Telefonnummer ist erforderlich'
          }"
          @input="phoneGroup?.node?.clearErrors()"
        >
          <div class="flex flex-col gap-1">
            <label class="block text-sm font-medium text-gray-700 mb-1">Telefonnummer*</label>
            <div class="flex gap-2">
              <FormKit
                type="select"
                name="phoneCountry"
                value="DE"
                :options="countries"
                outer-class="!w-24 shrink-0"
              />
              <FormKit
                type="tel"
                name="phone"
                placeholder="z.B. 0176 12345678"
                outer-class="flex-1"
              />
            </div>
            <FormKitMessages :node="phoneGroup?.node" />
          </div>
        </FormKit>
      </div>
    </FormKit>

    <div v-if="!user" class="mb-8 h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent" />

    <!-- Billing section -->
    <div class="mb-10">
      <h3 class="text-lg font-semibold mb-4">Rechnungsadresse</h3>
      <FormKit
        v-model="store.sameAsPersonal"
        type="checkbox"
        name="sameAsPersonal"
        label="Gleich wie persönliche Adresse"
        outer-class="mb-4"
      />

      <FormKit
        v-if="!store.sameAsPersonal"
        v-model="store.billingData"
        type="form"
        :actions="false"
        form-class="flex flex-col gap-4"
        :incomplete-message="false"
      >
        <FormKit
          type="text"
          name="company"
          label="Firma"
          placeholder="z.B. Muster GmbH"
        />
        <FormKit
          type="text"
          name="vatNumber"
          label="USt-IdNr."
          placeholder="z.B. DE123456789"
        />
        <FormKit
          type="text"
          name="street"
          label="Straße und Hausnummer"
          placeholder="z.B. Firmenstraße 5"
          validation="required"
          :validation-messages="{ required: 'Bitte geben Sie die Rechnungsadresse ein' }"
        />
        <div class="flex flex-col md:flex-row w-full gap-3">
          <FormKit
            type="text"
            name="postalCode"
            label="PLZ"
            placeholder="z.B. 80331"
            validation="required|number"
            :validation-messages="{
              required: 'PLZ erforderlich',
              number: 'Ungültige PLZ'
            }"
          />
          <FormKit
            type="text"
            name="location"
            label="Stadt"
            placeholder="z.B. München"
            validation="required"
            :validation-messages="{ required: 'Stadt erforderlich' }"
          />
        </div>
      </FormKit>
    </div>

    <div class="mb-8 h-px bg-gradient-to-r from-transparent via-saba-primary/20 to-transparent" />

    <div>
      <h3 class="mb-2 text-lg font-semibold">Zahlungsoptionen:</h3>
      <PayPalButton @trigger-submit="submitForm" />
    </div>
  </div>
</template>
