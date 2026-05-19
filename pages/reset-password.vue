<template>
  <div class="flex min-h-[calc(100vh-4rem)] justify-center px-4 py-20">
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <h1 class="font-display text-2xl font-bold text-zinc-900">Passwort zurücksetzen</h1>
        <p class="mt-2 text-sm text-zinc-500">Geben Sie Ihr neues Passwort ein.</p>
      </div>

      <div v-if="!code" class="rounded-xl border border-red-100 bg-red-50 px-5 py-6 text-center">
        <p class="text-sm text-red-600">Ungültiger oder abgelaufener Link.</p>
        <NuxtLink to="/forgot-password" class="mt-3 inline-block text-sm font-medium text-saba-primary hover:underline">
          Neuen Link anfordern
        </NuxtLink>
      </div>

      <div v-else-if="success" class="rounded-xl border border-green-100 bg-green-50 px-5 py-6 text-center">
        <div class="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-green-100">
          <svg class="size-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h2 class="font-semibold text-zinc-900">Passwort zurückgesetzt!</h2>
        <p class="mt-1 text-sm text-zinc-500">Ihr Passwort wurde erfolgreich geändert.</p>
        <NuxtLink to="/login" class="mt-4 inline-block text-sm font-medium text-saba-primary hover:underline">
          Zur Anmeldung
        </NuxtLink>
      </div>

      <form v-else class="space-y-4" @submit.prevent="handleReset">
        <div v-if="error" class="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          {{ error }}
        </div>

        <div>
          <label class="mb-1.5 block text-sm font-medium text-zinc-700">Neues Passwort</label>
          <input
            v-model="form.password"
            type="password"
            required
            autocomplete="new-password"
            placeholder="••••••••"
            class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-saba-primary focus:ring-2 focus:ring-saba-primary/10"
          />
          <ul v-if="form.password.length > 0" class="mt-2 space-y-1">
            <li v-for="rule in passwordRules" :key="rule.label" class="flex items-center gap-1.5 text-xs" :class="rule.valid ? 'text-green-600' : 'text-zinc-400'">
              <svg class="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path v-if="rule.valid" d="M20 6L9 17l-5-5"/>
                <circle v-else cx="12" cy="12" r="9"/>
              </svg>
              {{ rule.label }}
            </li>
          </ul>
        </div>

        <div>
          <label class="mb-1.5 block text-sm font-medium text-zinc-700">Passwort bestätigen</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            required
            autocomplete="new-password"
            placeholder="••••••••"
            class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-saba-primary focus:ring-2 focus:ring-saba-primary/10"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-saba-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <svg v-if="loading" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          Passwort zurücksetzen
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { resetPassword } = useStrapiAuth();
const route = useRoute();

const code = computed(() => route.query.code as string | undefined);
const form = reactive({ password: "", confirmPassword: "" });
const loading = ref(false);
const error = ref("");
const success = ref(false);

const passwordRules = computed(() => [
  { label: "Mindestens 8 Zeichen", valid: form.password.length >= 8 },
  { label: "Ein Großbuchstabe", valid: /[A-Z]/.test(form.password) },
  { label: "Ein Sonderzeichen", valid: /[^A-Za-z0-9]/.test(form.password) },
]);

const passwordValid = computed(() => passwordRules.value.every((r) => r.valid));

async function handleReset() {
  if (!passwordValid.value) { error.value = "Passwort erfüllt nicht die Anforderungen"; return; }
  if (form.password !== form.confirmPassword) { error.value = "Passwörter stimmen nicht überein"; return; }
  if (!code.value) return;
  loading.value = true;
  error.value = "";
  try {
    await resetPassword({ code: code.value, password: form.password, passwordConfirmation: form.confirmPassword });
    success.value = true;
  } catch (e: any) {
    error.value = e?.error?.message || "Passwort konnte nicht zurückgesetzt werden. Der Link ist möglicherweise abgelaufen.";
  } finally {
    loading.value = false;
  }
}
</script>
