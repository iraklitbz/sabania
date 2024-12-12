<script setup lang="ts">
const { logout } = useStrapiAuth();
const handleLogout = () => {
  logout();
  navigateTo("/");
};
</script>
<template>
  <main>
    <h2>My Account</h2>
    <button @click="handleLogout">Logout</button>
  </main>
</template>
