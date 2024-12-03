import type { Apartments } from '~/types/locale-types'
import { apiCall } from "~/composables/apiCall"
import { apartmentsByLocaleQuery, apartmentQuery } from '~/graphql/queries/apartments.query.gql'
export const apartments = defineStore('apartmentsData', {
    state: ()=> ({
        apartments: [] as Apartments[],
        apartment: {} as Apartments,
        occupiedDates: [] as string[]
    }),
    getters: {
        getDisabledDates(state) {
            const disabledDates = [];
            state.occupiedDates.forEach((range) => {
                const from = new Date(range.arrival);
                const to = new Date(range.departure);

                for (
                    let date = new Date(from);
                    date <= to;
                    date.setDate(date.getDate() + 1)
                ) {
                    disabledDates.push(new Date(date).toISOString().split("T")[0])
                }
            });
            return disabledDates
        }
    },
    actions: {
        async fetchApartmentsByLocal(slug: string) {
            const variables = {
                filters: {
                    location: {
                        slug: {
                            eq: slug
                        }
                    }
                }
            }
            const data = await apiCall(apartmentsByLocaleQuery, 'data', variables)
            if (data) {
                this.apartments = data.apartments
            }
        },
        async fetchApartment(slug: string) {
            const variables = {
                filters: {
                    slug: {
                        eq: slug
                    }
                }
            }
            const data = await apiCall(apartmentQuery, 'data', variables)
            if (data) {
                this.apartment = data.apartments[0]
            }
        },
        async fetchApartmentSmoobu(id: string) {
            this.occupiedDates = []
            const { data } = await useFetch(`/api/availability/${id}`)
            this.occupiedDates = data.value.bookings.map((booking: any) => ({
                arrival: booking.arrival,
                departure: booking.departure,
                apartment: booking.apartment
            }))
        }
    }
})