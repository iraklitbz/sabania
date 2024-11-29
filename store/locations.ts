import type { Location } from '~/types/locale-types'
import { apiCall } from "~/composables/apiCall"
import { locationsQuery, locationQuery } from '~/graphql/queries/locations.query.gql'
export const locations = defineStore('locationsData', {
    state: () => ({
        locations: [] as Location[],
        location: {} as Location
    }),
    actions: {
        async fetchLocations() {
            const data = await apiCall(locationsQuery, 'data', {})
            if (data) {
                this.locations = data.locations
            }
        },
        async fetchLocation(slug: string) {
            const variables = {
                filters: {
                    slug: {
                        eq: slug
                    }
                }
            }
            const data = await apiCall(locationQuery, 'data', variables)
            if (data && data.locations.length) {
                this.location = data.locations[0]
            }
        }
    }
})