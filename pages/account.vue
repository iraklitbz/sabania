<template>
  <div class="min-h-[calc(100vh-4rem)] py-20">
    <div class="container mx-auto px-4 lg:px-6">
      <div class="mx-auto max-w-2xl">

        <!-- Profile card -->
        <div class="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
          <div class="mb-6 flex items-center gap-4">
            <div class="flex size-14 items-center justify-center rounded-full bg-saba-primary/10 text-xl font-bold text-saba-primary">
              {{ user?.username?.charAt(0)?.toUpperCase() || '?' }}
            </div>
            <div>
              <h1 class="font-display text-xl font-bold text-zinc-900">{{ user?.username }}</h1>
              <p class="text-sm text-zinc-500">{{ user?.email }}</p>
            </div>
          </div>

          <div class="border-t border-zinc-100 pt-6">
            <dl class="space-y-4">
              <div>
                <dt class="text-xs font-medium uppercase tracking-wider text-zinc-400">Username</dt>
                <dd class="mt-1 text-sm font-medium text-zinc-800">{{ user?.username }}</dd>
              </div>
              <div>
                <dt class="text-xs font-medium uppercase tracking-wider text-zinc-400">Email</dt>
                <dd class="mt-1 text-sm font-medium text-zinc-800">{{ user?.email }}</dd>
              </div>
              <div>
                <dt class="text-xs font-medium uppercase tracking-wider text-zinc-400">Account Status</dt>
                <dd class="mt-1">
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
                    :class="user?.confirmed ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'"
                  >
                    <span class="size-1.5 rounded-full" :class="user?.confirmed ? 'bg-green-500' : 'bg-yellow-500'" />
                    {{ user?.confirmed ? 'Confirmed' : 'Unconfirmed' }}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-8 border-t border-zinc-100 pt-6">
            <button
              class="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              @click="handleLogout"
            >
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Logout
            </button>
          </div>
        </div>

        <!-- Bookings list -->
        <div class="mt-8 rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
          <h2 class="mb-6 text-lg font-bold text-zinc-900">Meine Buchungen</h2>

          <div v-if="loading" class="text-center text-sm text-zinc-400">Laden...</div>

          <div v-else-if="!bookings.length" class="text-center text-sm text-zinc-400">
            Keine Buchungen vorhanden.
          </div>

          <ul v-else class="divide-y divide-zinc-100">
            <li v-for="booking in bookings" :key="booking.documentId" class="py-4 first:pt-0 last:pb-0">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold text-zinc-800">{{ booking.apartment }}</p>
                  <p class="mt-0.5 text-xs text-zinc-500">
                    {{ formatDate(booking.checkin) }} – {{ formatDate(booking.checkout) }}
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-sm font-semibold text-zinc-800">{{ booking.amountPayed }} €</p>
                  <p class="mt-0.5 text-xs text-zinc-500">{{ booking.travelers }} Gäste</p>
                </div>
              </div>
              <p class="mt-1 text-xs text-zinc-400">Order #{{ booking.orderID }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ordersByEmailQuery } from "~/graphql/queries/orders.query.gql.js"

definePageMeta({ middleware: "auth" });

const user = useStrapiUser();
const { logout } = useStrapiAuth();

const bookings = ref<any[]>([]);
const loading = ref(true);

function formatDate(dateStr: string) {
  if (!dateStr) return ""
  return new Date(dateStr).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })
}

function handleLogout() {
  logout();
  navigateTo("/");
}

onMounted(async () => {
  if (!user.value?.email) { loading.value = false; return }
  try {
    const data = await apiCall(ordersByEmailQuery, "data", {
      filters: { email: { eq: user.value.email } }
    })
    bookings.value = data?.orders || []
  } catch (e) {
    console.error("Error fetching bookings:", e)
  } finally {
    loading.value = false
  }
})
</script>
