<script setup lang="ts">
import type { LoginInput } from '~/types/locale-types'
import { FormKitMessages } from '@formkit/vue'
import { getNode } from '@formkit/core'
import Notification from '~/components/Notification.vue'
import { markRaw, ref } from 'vue'

const { login, getProviderAuthenticationUrl } = useStrapiAuth()
const loading = ref(false)

const FormKitMessagesCustomComponents = { Notification: markRaw(Notification) }

const onSubmit = async (input: LoginInput, node: any) => {
  loading.value = true
  try {
    node.clearErrors()
    await login({
      identifier: input.email,
      password: input.password,
    })
    loading.value = false
    navigateTo('/account')
  } catch (e) {
    console.error(e)
    loading.value = false
    const generalErrors = []
    if (e.error.status === 500) {
        generalErrors.push('500. Something went wrong, please try again later')
    }
    if (e.error.status === 400 && e.error.message === 'Invalid identifier or password') {
        generalErrors.push('Invalid email or password')
    }
    if (e.error.status === 400 && e.error.message === 'Your account has been blocked by an administrator') {
        generalErrors.push('Your account has been blocked, please contact support.')
    }
    node.setErrors(generalErrors)
  }
}
const handleProviderAuth = async () => {
    try {
        window.location.href = getProviderAuthenticationUrl('google')
    } catch (e) {
        console.error(e)
    }
}
</script>


<template>
    <div>
        <FormKit
            type="form"
            :actions="false"
            name="loginForm"
            form-class="flex flex-col gap-3"
            @submit="onSubmit"
        >
                <FormKit
                    id="email"
                    name="email"
                    autocomplete="current-email"
                    placeholder="winterfell@sabania.com"
                    type="email"
                    label="email"
                    validation="required|email"
                    validation-visibility="live"
                    :classes="{
                        outer: 'mb-3 sm:mb-0'
                    }"
                    :validation-messages="{
                        required: 'This field is required',
                        email: 'Please enter a valid email address'
                    }"
                />
                <FormKit
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="new-password"
                    label="password"
                    :classes="{
                        outer: 'mb-3 sm:mb-0'
                    }"
                    :validation-messages="{
                        required: 'This field is required'
                    }"
                />

                <FormKit 
                    variant="primary" 
                    type="submit"
                    :disabled="loading"
                >
                    <span
                        v-if="!loading"
                        class="flex items-center"
                    >
                        login
                    </span>
                    <Icon
                        v-else
                        name="icon:loader"
                        class="text-6xl"
                    />
                </FormKit>
                <transition name="fade" mode="out-in">
                    <FormKitMessages
                    :node="getNode('loginForm')"
                    :library="FormKitMessagesCustomComponents"
                    :sections-schema="{
                        message: {
                            $el: undefined,
                            $cmp: 'Notification',
                            props: {
                                type: 'error',
                                message: '$message.value'
                            }
                        }
                    }"
                    />
                </transition>
            </FormKit>
            <div>
                Login with Google
                <button @click="handleProviderAuth()">
                    Sign-in with Google
                </button>
            </div>
    </div>
</template>