import { orderMutation } from "~/graphql/mutations/orders.mutation.gql.js"
import { apartments } from "~/store/apartments";
import type {OrderInputSabania} from "~/types/sabania-types";
export const orderRegister = defineStore("orderData", {
    state: () => ({
        currentOrder: {} as OrderInputSabania,
        currentApartment : {} as any,
        orderCreationTime : '' as string
    }),
    persist: {
        storage: piniaPluginPersistedstate.localStorage(),
        pick: [
            "currentOrder",
            "currentApartment",
            "orderCreationTime"
        ],
    },
    getters: {
        getDataIsExpired(state) {
            const currentTime = new Date().getTime()
            const orderCreationTime = new Date(state.orderCreationTime).getTime()
            const diff = currentTime - orderCreationTime
            return diff > 600000
        }
    },
    actions: {
        async registerOrder(order: OrderInputSabania, currentApartment: any) {
            this.currentApartment = currentApartment
            this.orderCreationTime = new Date().toISOString()
            apartments().clearDatesCalendar()

            // 1. SMOOBU reservation
            const smoobuData = {
                apartmentId: currentApartment.apartment.smoobuID,
                ...order
            }
            await $fetch('/api/reservations', {
                method: 'POST',
                body: smoobuData
            })

            // 2. Strapi order registration
            const variables = { data: order as OrderInputSabania }
            const data = await apiCall(orderMutation, "data", variables)
            if (data) {
                this.currentOrder = data.createOrder

                // 3. Send confirmation emails
                $fetch('/api/booking-confirmation', {
                    method: 'POST',
                    body: {
                        order: data.createOrder,
                        apartment: currentApartment.apartment,
                    }
                }).catch(err => console.error("Email sending error:", err))
            }
        },
        cleanOrderData() {
            this.currentOrder = {}
            this.currentApartment = {}
            this.orderCreationTime = ''
        }
    },
});
