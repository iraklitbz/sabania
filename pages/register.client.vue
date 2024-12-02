<script setup lang="ts">
import type { RegisterInput } from '~/types/locale-types'
import { FormKitMessages } from '@formkit/vue'
import { getNode } from '@formkit/core'
import Notification from '~/components/Notification.vue'
const FormKitMessagesCustomComponents = { Notification: markRaw(Notification) }
const { register } = useStrapiAuth()
const loading = ref(false)
const onSubmit = async (input: RegisterInput, node: any) => {
    loading.value = true
    try {
        await register({ 
            username: input.username, 
            email: input.email, 
            password: input.password
        })
        loading.value = false
        navigateTo('/thanks')
    } catch (e) {
        loading.value = false
        console.error(e)
        loading.value = false
        const generalErrors = []
        if (e.error.status === 500) {
            generalErrors.push('500. Something went wrong, please try again later')
        }
        if (e.error.status === 400 && e.error.message === 'Email or Username are already taken') {
            generalErrors.push('Email or Username are already taken')
        }
        node.setErrors(generalErrors)
    }
}
</script>


<template>
    <div
        class="flex justify-center"
    >
      <div
          class="w-full bg-gray-100 py-14 px-6"
      >
        <FormKit
          type="form"
          :actions="false"
          form-class="flex flex-col gap-3 max-w-[20em] mx-auto"
          name="registerForm"
          @submit="onSubmit"
        >
                <FormKit
                    id="username"
                    name="username"
                    autocomplete="new-username"
                    placeholder="jon Snow"
                    type="text"
                    label="Username"
                    validation="required"
                    :classes="{
                        outer: 'mb-3 sm:mb-0'
                    }"
                    :validation-messages="{ required: 'This field is required' }"
                />
                <FormKit
                    id="email"
                    name="email"
                    placeholder="winterfell@sabania.com"
                    type="email"
                    label="Email"
                    validation="required|email"
                    validation-visibility="dirty"
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
                    validation="required|contains_numeric|contains_special|contains_uppercase"
                    label="Password"
                    :classes="{
                        outer: 'mb-3 sm:mb-0'
                    }"
                    :validation-messages="{
                        required: 'This field is required'
                    }"
                />
                <FormKit
                    id="passwordConfirmation"
                    name="password_confirm"
                    type="password"
                    autocomplete="new-password"
                    validation="required|confirm"
                    validation-visibility="live"
                    label="Confirm Password"
                    :classes="{
                        outer: 'mb-3 sm:mb-0'
                    }"
                    :validation-messages="{
                        required: 'This field is required',
                        confirm: 'Passwords do not match'
                    }"
                />
                <FormKit 
                    variant="primary" 
                    type="submit"
                    :disabled="loading"
                    :classes="{
                        input: 'w-full flex justify-center'
                    }"
                >
                    <span
                        v-if="!loading"
                        class="flex items-center"
                    >
                        Register
                    </span>
                    <Icon
                        v-else
                        name="icon:loader"
                        class="text-6xl"
                    />
                </FormKit>
                <transition name="fade" mode="out-in">
                    <FormKitMessages
                    :node="getNode('registerForm')"
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
      </div>
    </div>
</template>