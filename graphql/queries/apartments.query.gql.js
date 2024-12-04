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
        description
        smoobuID
        rooms {
          beds
          WC
          guests
          rooms
        }
        standards
        checkin
        address {
            postalCode
            street
            city
            latitude
            longitude
        }
        list
        location {
            city
            slug
        }
        discount {
          percentageDiscount
        }
        checkout
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