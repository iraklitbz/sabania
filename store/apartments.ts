import type { Apartments } from '~/types/locale-types'
import { apiCall } from "~/composables/apiCall"
import { apartmentsByLocaleQuery, apartmentQuery } from '~/graphql/queries/apartments.query.gql'
export const apartments = defineStore('apartmentsData', {
    state: ()=> ({
        apartments: [] as Apartments[],
        apartment: {} as Apartments
    }),
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
        }
    }
})