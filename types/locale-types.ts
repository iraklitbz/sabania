export interface LoginInput {
  email: string;
  password: string;
}
export interface RegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface Location {
  city: string;
  slug: string;
  latitude: string;
  longitude: string;
}

export interface Customer {
    name: string;
    surname: string;
    address: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    email: string;
    phone: string;
}

export interface ComponentAddressAddress {
  city: string;
  postalCode: string;
  street: string;
  latitude: string;
  longitude: string;
}

export interface Apartments {
  slug: string;
  address: ComponentAddressAddress;
  price: number;
  checkin: string;
  checkout: string;
  description: string;
  name: string;
  checkIfDataRangeIsEmpty: boolean;
}
export interface Range {
  arrival: string;
  departure: string;
  apartment?: string;
}
