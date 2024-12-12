<template>
  <div
    class="flex items-center gap-2 rounded-lg p-4 text-xs font-bold text-white"
    :class="{
      'bg-blue-600': type === 'info',
      'bg-green-600': type === 'success',
      'bg-yellow-600': type === 'warning',
      'bg-red-600': type === 'error',
    }"
  >
    <Icon v-if="type && getNotificationIcon" :name="getNotificationIcon" />
    <span>{{ message }}</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const getNotificationIcon = computed(() => {
  switch (props.type) {
    case "info":
      return "icon:info";
    case "success":
      return "icon:check";
    case "warning":
      return "icon:warning";
    case "error":
      return "icon:error";
    default:
      return false;
  }
});
</script>
