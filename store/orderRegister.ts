import { orderMutation } from "~/graphql/mutations/orders.mutation.gql.js"
import { apartments } from "~/store/apartments";
import type {OrderInputSabania, ApartmentSabania} from "~/types/sabania-types";
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
            this.currentApartment = {}
            this.currentApartment = currentApartment
            this.orderCreationTime = new Date().toISOString()
            apartments().clearDatesCalendar()

            try {
                const smoobuData = {
                    smoobuID: currentApartment.apartment.smoobuID,
                    ...order
                }
                const { data: postResponse, error: postError } = await useFetch('/api/reservations', {
                    method: 'POST',
                    body: smoobuData
                })

                if (postError.value) {
                    console.error('Error en la llamada POST:', postError.value)
                    return
                }

                const variables = { data: order as OrderInputSabania }
                // const data = await apiCall(orderMutation, "data", variables)

                // if (data) {
                //     this.currentOrder = data.createOrder
                // }
            } catch (error) {
                console.error('Error general en registerOrder:', error)
            }
        },
        cleanOrderData() {
            this.currentOrder = {}
            this.currentApartment = {}
            this.orderCreationTime = ''
        }
    },
});
