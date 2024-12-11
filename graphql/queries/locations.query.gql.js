export const locationsQuery = `
  query getLocations {
      locations {
        city
        latitude
        longitude
        slug
      }
  }
`

export const locationQuery = `
  query getLocation($filters: LocationFiltersInput){
    locations (filters: $filters) {
        city
        latitude
        longitude
        slug
    }
  }
`