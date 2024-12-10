export interface LoginInput {
    email: string
    password: string
}
export interface RegisterInput {
    username: string
    email: string
    password: string
}

export interface Location {
    city: string,
    slug: string
}

export interface ComponentAddressAddress {
    city: string,
    postalCode: string,
    street: string
}

export interface Apartments {
    slug: string,
    address: ComponentAddressAddress,
    price: number,
    checkin: string,
    checkout: string,
    description: string,
    name: string,
    checkIfdataRangeIsEmpty: boolean
}