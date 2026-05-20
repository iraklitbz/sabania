export const orderMutation = `
    mutation CreateOrder($data: OrderInput!) {
      createOrder(data: $data) {
        amountPayed
        apartment
        checkin
        checkout
        createdAt
        date
        documentId
        email
        firstName
        lastName
        phone
        phonePrefix
        address {
            street
            postalCode
            location
        }
        billingAddress {
            street
            postalCode
            location
        }
        company
        vatNumber
        sameAsPersonal
        orderID
        publishedAt
        travelers
        updatedAt
      }
    }
`
