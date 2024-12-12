<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const user = useStrapiUser();
const { logout } = useStrapiAuth();
const handleLogout = () => {
  logout();
  navigateTo("/");
};
</script>
<template>
  <main
    v-if="(user && user?.confirmed) || (user && user?.provider === 'google')"
  >
    <NuxtPage />
  </main>
  <div
    v-else-if="user && !user?.confirmed"
    class="flex-col items-center justify-center max-w-40"
  >
    <Notification
      type="warning"
      message="Please confirm your email address to continue"
    />
    <button @click="handleLogout">Logout</button>
  </div>
</template>
