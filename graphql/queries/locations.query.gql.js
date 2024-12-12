export const locationsQuery = `
  query getLocations {
      locations {
        city
        latitude
        longitude
        description
        slug
        feature {
            name
            url
        }
      }
  }
`

export const locationQuery = `
  query getLocation($filters: LocationFiltersInput){
    locations (filters: $filters) {
        city
        description
        latitude
        longitude
        slug
        feature {
            name
            url
        }
    }
  }
`