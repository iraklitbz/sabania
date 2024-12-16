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
        fullName
        orderID
        publishedAt
        travelers
        updatedAt
      }
    }
`