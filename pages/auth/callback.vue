<script setup lang="ts">
const { authenticateProvider } = useStrapiAuth();
const route = useRoute();
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  const accessToken = route.query.access_token as string | undefined;

  if (!accessToken) {
    error.value = "No token provided";
    loading.value = false;
    return;
  }

  try {
    await authenticateProvider("google", accessToken);
    const redirect = localStorage.getItem("auth_redirect");
    localStorage.removeItem("auth_redirect");
    navigateTo(redirect || "/account");
  } catch (e) {
    console.error("[OAuth Callback]", e);
    error.value = "Authentication failed. Please try again.";
    loading.value = false;
  }
});
</script>

<template>
  <div class="flex min-h-[50vh] items-center justify-center px-4 py-20">
    <div class="w-full max-w-md text-center">
      <div v-if="loading">
        <p class="text-gray-500">Signing in...</p>
      </div>
      <div v-else-if="error">
        <p class="text-red-600 mb-4">{{ error }}</p>
        <NuxtLink to="/login" class="text-blue-500 hover:underline">
          Back to login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
