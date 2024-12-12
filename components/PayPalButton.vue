<script setup lang="ts">
import { usePayPal } from "~/composables/usePayPal";

const paypalRef = ref<HTMLElement | null>(null);
onMounted(async () => {
  const paypal = await usePayPal();

  if (paypal) {
    paypal
      .Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "100.00",
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            console.log("Transaction completed by", details);
            navigateTo("/success");
          });
        },
        onError: function (err) {
          console.error("PayPal SDK error:", err);
        },
      })
      .render(paypalRef.value!);
  }
});
</script>

<template>
  <div>
    <div ref="paypalRef"></div>
  </div>
</template>
