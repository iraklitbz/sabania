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
    address: ComponentAddressAddress,
    checkin: string,
    checkout: string,
    description: string,
    name: string
}