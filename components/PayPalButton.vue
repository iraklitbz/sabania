<script setup lang="ts">
import { usePayPal } from '~/composables/usePayPal';

const paypalRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  const paypal = await usePayPal();

  if (paypal) {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '100.00', // Reemplaza con tu monto
            },
          }],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then(details => {
          console.log('Transaction completed by:', details.payer.name.given_name);
        });
      },
      onError: (err) => {
        console.error('PayPal SDK error:', err);
      },
    }).render(paypalRef.value!);
  }
});
</script>

<template>
  <div>
    <div ref="paypalRef"></div>
  </div>
</template>