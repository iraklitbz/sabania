<script setup lang="ts">
import type { OrderInputSabania } from "~/types/sabania-types"
import { customer } from "~/store/customer"
import { apartments } from "~/store/apartments"
import { orderRegister } from "~/store/orderRegister"

const emit = defineEmits(["trigger-submit"])
const router = useRouter()
const { $paypal } = useNuxtApp()
const paymentError = ref("")

onMounted(() => {
  if (!$paypal?.Buttons) return

  $paypal.Buttons({
    style: { layout: "vertical", shape: "rect" },
    onClick(_data: any, actions: any) {
      const isLoggedIn = !!useStrapiUser().value
      if (!isLoggedIn && !customer().getIfInputsAreFilled) {
        emit("trigger-submit")
        return actions.reject()
      }
      return actions.resolve()
    },
    createOrder(_data: any, actions: any) {
      const amount = apartments().calculateTotalPrice === apartments().getTotalPriceWithDiscount
        ? apartments().calculateTotalPrice.toFixed(2)
        : apartments().getTotalPriceWithDiscount.toFixed(2)
      return actions.order.create({
        purchase_units: [{ amount: { value: amount, currency_code: "EUR" } }],
      })
    },
    async onApprove(_data: any, actions: any) {
      try {
        const details = await actions.order!.capture()

        const store = customer()
        const loggedUser = useStrapiUser().value

        const firstName = loggedUser ? (loggedUser.username?.split(" ")[0] || loggedUser.username || "") : store.userData.firstName
        const lastName = loggedUser ? (loggedUser.username?.split(" ").slice(1).join(" ") || "") : store.userData.lastName
        const email = loggedUser ? loggedUser.email : store.userData.email
        const phone = loggedUser ? "" : store.userData.phoneGroup.phone
        const phonePrefix = loggedUser ? "" : store.userData.phoneGroup.phoneCountry
        const personalAddress = loggedUser
          ? { street: "", postalCode: "", location: "" }
          : { street: store.userData.street, postalCode: store.userData.postalCode, location: store.userData.location }

        const billingAddress = store.sameAsPersonal
          ? personalAddress
          : { street: store.billingData.street, postalCode: store.billingData.postalCode, location: store.billingData.location }

        const orderDetail: OrderInputSabania = {
          amountPayed: details.purchase_units[0].amount.value,
          apartment: apartments().apartment.name,
          checkin: apartments().checkinDate,
          checkout: apartments().checkoutDate,
          date: new Date(),
          email: email || "N/A",
          firstName,
          lastName,
          address: personalAddress,
          phone,
          phonePrefix,
          billingAddress,
          company: store.sameAsPersonal ? "" : store.billingData.company,
          vatNumber: store.sameAsPersonal ? "" : store.billingData.vatNumber,
          sameAsPersonal: store.sameAsPersonal,
          orderID: details.id,
          travelers: apartments().travelers,
        }

        const currentApartmentData = {
          apartment: apartments().apartment,
          smoobuID: apartments().apartment.smoobuID,
          checkinDate: apartments().checkinDate,
          checkoutDate: apartments().checkoutDate,
          travelers: apartments().travelers,
          totalPrice: apartments()?.getTotalPrice,
          calculateNights: apartments().calculateNights,
          calculateTotalPrice: apartments().calculateTotalPrice,
          discountPrice: apartments().getTotalPriceWithDiscount,
        }

        await orderRegister().registerOrder(orderDetail, currentApartmentData)
        router.push("/book/success")
      } catch (err) {
        console.error("PayPal onApprove error:", err)
        paymentError.value = "Bei der Buchung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      }
    },
    onError(err: any) {
      console.error("PayPal SDK error:", err)
      paymentError.value = "Bei der Zahlung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
    },
  }).render("#paypal-checkout")
})
</script>
<template>
  <div>
    <div v-if="paymentError" class="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
      {{ paymentError }}
    </div>
    <div id="paypal-checkout" />
  </div>
</template>
