export const apartmentsByLocaleQuery = `
  query getApartmentsByLocale($filters: ApartmentFiltersInput){
      apartments(filters: $filters) {
        name
        slug
      }
  }
`

export const apartmentQuery = `
  query getApartment($filters: ApartmentFiltersInput){
      apartments(filters: $filters) {
        name
        price
        smoobuID
        feature {
            name
            url
        }
        photos {
          name,
          photos {
            url,
            mime
          }
        }
      }
  }
`