export const locationsQuery = `
  query getLocations {
      locations {
        city
        slug
      }
  }
`

export const locationQuery = `
  query getLocation($filters: LocationFiltersInput){
    locations (filters: $filters) {
        city
        slug
    }
  }
`