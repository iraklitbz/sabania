<template>
  <div class="flex min-h-[calc(100vh-4rem)] justify-center px-4 py-20">
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <h1 class="font-display text-2xl font-bold text-zinc-900">Forgot your password?</h1>
        <p class="mt-2 text-sm text-zinc-500">Enter your email and we'll send you a reset link.</p>
      </div>

      <div v-if="success" class="rounded-xl border border-green-100 bg-green-50 px-5 py-6 text-center">
        <div class="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-green-100">
          <svg class="size-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
          </svg>
        </div>
        <h2 class="font-semibold text-zinc-900">Check your email</h2>
        <p class="mt-1 text-sm text-zinc-500">If an account exists with that email, a reset link has been sent.</p>
        <NuxtLink to="/login" class="mt-4 inline-block text-sm font-medium text-saba-primary hover:underline">
          Back to login
        </NuxtLink>
      </div>

      <form v-else class="space-y-4" @submit.prevent="handleForgot">
        <div v-if="error" class="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          {{ error }}
        </div>

        <div>
          <label class="mb-1.5 block text-sm font-medium text-zinc-700">Email</label>
          <input
            v-model="email"
            type="email"
            required
            autocomplete="email"
            placeholder="you@example.com"
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
          Send reset link
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-zinc-500">
        <NuxtLink to="/login" class="font-medium text-saba-primary hover:underline">
          ← Back to login
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { forgotPassword } = useStrapiAuth();

const email = ref("");
const loading = ref(false);
const error = ref("");
const success = ref(false);

async function handleForgot() {
  loading.value = true;
  error.value = "";
  try {
    await forgotPassword({ email: email.value });
    success.value = true;
  } catch (e: any) {
    error.value = e?.error?.message || "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>
