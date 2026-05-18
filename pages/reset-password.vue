<script setup lang="ts">
import { FormKitMessages } from "@formkit/vue";
import { getNode } from "@formkit/core";
import Notification from "~/components/Notification.vue";
const { resetPassword } = useStrapiAuth();
const route = useRoute();
const loading = ref(false);
const success = ref(false);

const code = computed(() => route.query.code as string);

const FormKitMessagesCustomComponents = { Notification: markRaw(Notification) };

const onSubmit = async (input: { password: string }, node: any) => {
  loading.value = true;
  try {
    node.clearErrors();
    await resetPassword({
      code: code.value,
      password: input.password,
      passwordConfirmation: input.password,
    });
    success.value = true;
    loading.value = false;
  } catch (e) {
    console.error(e);
    loading.value = false;
    node.setErrors(["Could not reset password. The link may have expired."]);
  }
};
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full bg-gray-100 py-14 px-6">
      <div v-if="!code" class="max-w-[20em] mx-auto">
        <Notification type="error" message="Invalid or missing reset code." />
        <NuxtLink to="/forgot-password" class="block text-center text-blue-500 mt-4">
          Request a new link
        </NuxtLink>
      </div>
      <div v-else-if="success" class="max-w-[20em] mx-auto">
        <Notification type="success" message="Password reset successfully!" />
        <NuxtLink to="/login" class="block text-center text-blue-500 mt-4">
          Go to login
        </NuxtLink>
      </div>
      <FormKit
        v-else
        type="form"
        :actions="false"
        name="resetPasswordForm"
        form-class="flex flex-col gap-3 max-w-[20em] mx-auto"
        @submit="onSubmit"
      >
        <p class="text-center text-gray-600 mb-2">Enter your new password.</p>
        <FormKit
          id="password"
          name="password"
          type="password"
          autocomplete="new-password"
          label="New Password"
          validation="required|contains_numeric|contains_special|contains_uppercase"
          :classes="{ outer: 'mb-3 sm:mb-0' }"
          :validation-messages="{ required: 'This field is required' }"
        />
        <FormKit
          id="password_confirm"
          name="password_confirm"
          type="password"
          autocomplete="new-password"
          label="Confirm Password"
          validation="required|confirm"
          validation-visibility="dirty"
          :classes="{ outer: 'mb-3 sm:mb-0' }"
          :validation-messages="{
            required: 'This field is required',
            confirm: 'Passwords do not match',
          }"
        />
        <FormKit
          variant="primary"
          type="submit"
          :disabled="loading"
          :classes="{ input: 'w-full flex justify-center' }"
        >
          <span v-if="!loading" class="flex items-center">Reset password</span>
          <Icon name="loader" v-else class="text-6xl" />
        </FormKit>
        <transition name="fade" mode="out-in">
          <FormKitMessages
            :node="getNode('resetPasswordForm')"
            :library="FormKitMessagesCustomComponents"
            :sections-schema="{
              message: {
                $el: undefined,
                $cmp: 'Notification',
                props: {
                  type: 'error',
                  message: '$message.value',
                },
              },
            }"
          />
        </transition>
      </FormKit>
    </div>
  </div>
</template>
