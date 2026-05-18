<script setup lang="ts">
import { FormKitMessages } from "@formkit/vue";
import { getNode } from "@formkit/core";
import Notification from "~/components/Notification.vue";
const { forgotPassword } = useStrapiAuth();
const loading = ref(false);
const success = ref(false);

const FormKitMessagesCustomComponents = { Notification: markRaw(Notification) };

const onSubmit = async (input: { email: string }, node: any) => {
  loading.value = true;
  try {
    node.clearErrors();
    await forgotPassword({ email: input.email });
    success.value = true;
    loading.value = false;
  } catch (e) {
    console.error(e);
    loading.value = false;
    node.setErrors(["Something went wrong. Please try again later."]);
  }
};
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full bg-gray-100 py-14 px-6">
      <div v-if="success" class="max-w-[20em] mx-auto">
        <Notification
          type="success"
          message="If an account with that email exists, a reset link has been sent."
        />
        <NuxtLink to="/login" class="block text-center text-blue-500 mt-4">
          Back to login
        </NuxtLink>
      </div>
      <FormKit
        v-else
        type="form"
        :actions="false"
        name="forgotPasswordForm"
        form-class="flex flex-col gap-3 max-w-[20em] mx-auto"
        @submit="onSubmit"
      >
        <p class="text-center text-gray-600 mb-2">
          Enter your email and we'll send you a link to reset your password.
        </p>
        <FormKit
          id="email"
          name="email"
          placeholder="winterfell@sabania.com"
          type="email"
          label="Email"
          validation="required|email"
          validation-visibility="dirty"
          :classes="{ outer: 'mb-3 sm:mb-0' }"
          :validation-messages="{
            required: 'This field is required',
            email: 'Please enter a valid email address',
          }"
        />
        <FormKit
          variant="primary"
          type="submit"
          :disabled="loading"
          :classes="{ input: 'w-full flex justify-center' }"
        >
          <span v-if="!loading" class="flex items-center">Send reset link</span>
          <Icon name="loader" v-else class="text-6xl" />
        </FormKit>
        <NuxtLink to="/login" class="text-center text-gray-600">
          Back to <span class="text-blue-500">login</span>
        </NuxtLink>
        <transition name="fade" mode="out-in">
          <FormKitMessages
            :node="getNode('forgotPasswordForm')"
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
