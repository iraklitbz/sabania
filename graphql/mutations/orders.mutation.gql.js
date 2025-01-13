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
        address {
            street
            postalCode
            location
        }
        orderID
        publishedAt
        travelers
        updatedAt
      }
    }
`