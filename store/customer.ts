import type { Customer } from "~/types/locale-types";
export const customer = defineStore("customerData", {
    state: () => ({
        userData: {
            firstName: "",
            lastName: "",
            street: "",
            postalCode: "",
            location: "",
            email: "",
            phone: ""
        } as Customer,
        dataIsValidate: false,
    }),
    getters: {
        getIfInputsAreFilled(state) {
            return Object.values(state.userData).every(value => value !== "")
        }
    }
});
