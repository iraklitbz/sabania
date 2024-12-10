import type { Apartments } from '~/types/locale-types'
export const checkout = defineStore('checkoutData', {
    state: ()=> ({
        apartment: {} as Apartments,
        checkinDate: null as any,
        checkoutDate: null as any,
        travelers: '' as string
    }),
    getters: {
        calculateNights(state) {
            const arrivalDate = new Date(state.checkinDate)
            const departureDate = new Date(state.checkoutDate)
            const timeDifference = departureDate.getTime() - arrivalDate.getTime()
            const daysDifference = timeDifference / (1000 * 3600 * 24)
            return daysDifference > 0 ? Math.ceil(daysDifference) : 0
        },
        calculateTotalPrice(state) {
            return state.calculateNights * state.apartment.price
        }
    },
    actions: {
        setApartmentToCheckout (apartment: Apartments, checkinDate: any, checkoutDate: any, travelersList: string) {
            this.apartment = apartment
            this.checkinDate = checkinDate
            this.checkoutDate = checkoutDate
            this.travelersList = travelersList
        },
        clearCheckoutData () {
            this.apartment = {} as Apartments
            this.checkinDate = null
            this.checkoutDate = null
            this.travelersList = ''
        },
    }
})