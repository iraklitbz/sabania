<template>
  <div class="flex min-h-[calc(100vh-4rem)] justify-center px-4 py-20">
    <div class="w-full max-w-md text-center">
      <div class="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
        <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
          <svg class="size-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h1 class="font-display text-2xl font-bold text-zinc-900">E-Mail bestätigt!</h1>
        <p class="mt-2 text-sm text-zinc-500">Ihr Konto ist jetzt aktiv. Sie können sich anmelden.</p>
        <NuxtLink
          to="/login"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-saba-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Zur Anmeldung
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
