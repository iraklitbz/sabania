<script setup lang="ts">
import type { OrderInputSabania } from "~/types/sabania-types"
import { customer } from "~/store/customer"
import { apartments } from "~/store/apartments"
import { orderRegister } from "~/store/orderRegister"
const emit = defineEmits(["trigger-submit"])
const router = useRouter()
onMounted(() => {
  usePaypalButton({
    onClick: (data, actions) => {
      const isFormFiller = customer().getIfInputsAreFilled
      if( !isFormFiller ) {
        emit('trigger-submit')
        return actions.reject()
      }
    },
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: apartments().calculateTotalPrice === apartments().getTotalPriceWithDiscount
                  ? apartments().calculateTotalPrice.toFixed(2)
                  : apartments().getTotalPriceWithDiscount.toFixed(2)
            },
          },
        ],
      });
    },
    onApprove: async (data, actions) => {
      try {
        if (!actions.order) {
          throw new Error("Order actions are not available.");
        }
        const details = await actions.order.capture()

        const orderDetail: OrderInputSabania = {
          amountPayed: details.purchase_units[0].amount.value,
          apartment: apartments().apartment.name,
          checkin: apartments().checkinDate,
          checkout: apartments().checkoutDate,
          date: new Date(),
          email: customer().userData.email || "N/A",
          firstName: customer().userData.firstName,
          lastName: customer().userData.lastName,
          address: {
            street: customer().userData.street,
            postalCode: customer().userData.postalCode,
            location: customer().userData.location,
          },
          phone: customer().userData.phone,
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
          discountPrice: apartments().getTotalPriceWithDiscount,
        };

        await orderRegister().registerOrder(orderDetail, currentApartmentData);
        router.push("/book/success");
      } catch (err) {
        console.error("Error durante la aprobación de PayPal:", err);
      }
    },

    onError: (err) => {
      console.error("Error del SDK de PayPal:", err);
    },
  });
});
</script>
<template>
  <div>
    <div id="paypal-checkout" />
  </div>
</template>