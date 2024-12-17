<script setup lang="ts">
import type { OrderInputSabania } from "~/types/sabania-types";
import { apartments } from "~/store/apartments";
import { orderRegister } from "~/store/orderRegister";
import { usePayPal } from "~/composables/usePayPal";
const paypalRef = ref<HTMLElement | null>(null);
onMounted(async () => {
  try {
    const paypal = await usePayPal();

    if (paypal) {
      paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: apartments().calculateTotalPrice === apartments().getTotalPriceWithDiscount ? apartments().calculateTotalPrice : apartments().getTotalPriceWithDiscount
                },
              },
            ],
          });
        },
        onApprove: async function (data, actions) {
          try {
            const details = await actions.order.capture(); // Espera la respuesta de la captura
            const fullName =
                (details.payer.name?.given_name || "N/A") +
                " " +
                (details.payer.name?.surname || "N/A");

            const orderDetail: OrderInputSabania = {
              amountPayed: details.purchase_units[0].amount.value,
              apartment: apartments().apartment.name,
              checkin: apartments().checkinDate,
              checkout: apartments().checkoutDate,
              date: new Date(),
              email: details.payer.email_address || "N/A",
              fullName: fullName,
              orderID: details.id,
              travelers: apartments().travelers,
            };
            const currentApartmentData = {
              apartment: apartments().apartment,
              smoobuID: apartments().apartment.smoobuID,
              checkinDate: apartments().checkinDate,
              checkoutDate: apartments().checkoutDate,
              travelers: apartments().travelers,
              totalPrice: apartments()?.getTotalPrice,
              calculateNights: apartments().calculateNights,
              calculateTotalPrice: apartments().calculateTotalPrice,
              discountPrice: apartments().getTotalPriceWithDiscount
            }
            await orderRegister().registerOrder(orderDetail, currentApartmentData);
            navigateTo("/book/success");
          } catch (err) {
            console.error("Error during PayPal approval:", err);
          }
        },
        onError: function (err) {
          console.error("PayPal SDK error:", err);
        },
      }).render(paypalRef.value!);
    }
  } catch (err) {
    console.error("Error loading PayPal buttons:", err);
  }
});
</script>

<template>
  <div>
    <div ref="paypalRef"></div>
  </div>
</template>