<template>
  <div class="flex min-h-[calc(100vh-4rem)] justify-center px-4 py-20">
    <div class="w-full max-w-md text-center">

      <!-- Loading -->
      <div v-if="status === 'loading'" class="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
        <svg class="mx-auto size-8 animate-spin text-saba-primary" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
        <p class="mt-4 text-sm text-zinc-500">Confirming your email...</p>
      </div>

      <!-- Success -->
      <div v-else-if="status === 'success'" class="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
        <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
          <svg class="size-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h1 class="font-display text-2xl font-bold text-zinc-900">Email confirmed!</h1>
        <p class="mt-2 text-sm text-zinc-500">Your account is now active. You can sign in.</p>
        <NuxtLink
          to="/login"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-saba-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Go to login
        </NuxtLink>
      </div>

      <!-- Error -->
      <div v-else-if="status === 'error'" class="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
        <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-red-100">
          <svg class="size-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        </div>
        <h1 class="font-display text-2xl font-bold text-zinc-900">Confirmation failed</h1>
        <p class="mt-2 text-sm text-zinc-500">{{ errorMessage }}</p>
        <NuxtLink
          to="/login"
          class="mt-6 inline-block text-sm font-medium text-saba-primary hover:underline"
        >
          Go to login
        </NuxtLink>
      </div>

      <!-- No token -->
      <div v-else class="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
        <p class="text-sm text-zinc-500">Invalid or missing confirmation link.</p>
        <NuxtLink to="/login" class="mt-3 inline-block text-sm font-medium text-saba-primary hover:underline">
          Go to login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const confirmation = route.query.confirmation as string | undefined;

type Status = 'idle' | 'loading' | 'success' | 'error';
const status = ref<Status>(confirmation ? 'loading' : 'idle');
const errorMessage = ref('');

onMounted(async () => {
  if (!confirmation) return;
  try {
    const config = useRuntimeConfig();
    const strapiUrl = config.public.strapi?.url || 'https://cms.sabania.eu';
    await $fetch(`${strapiUrl}/api/auth/email-confirmation`, {
      params: { confirmation },
    });
    status.value = 'success';
  } catch (e: any) {
    errorMessage.value = e?.data?.error?.message || 'The confirmation link is invalid or has expired.';
    status.value = 'error';
  }
});
</script>
