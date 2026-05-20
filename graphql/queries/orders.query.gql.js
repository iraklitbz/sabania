export const ordersByEmailQuery = `
  query getOrders($filters: OrderFiltersInput) {
    orders(filters: $filters, sort: "createdAt:desc") {
      documentId
      orderID
      apartment
      checkin
      checkout
      amountPayed
      travelers
      createdAt
    }
  }
`
