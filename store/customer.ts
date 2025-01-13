import type { Customer } from "~/types/locale-types";
export const customer = defineStore("customerData", {
    state: () => ({
        userData: {
            name: "",
            surname: "",
            address: "",
            houseNumber: "",
            postalCode: "",
            city: "",
            email: "",
            phone: ""
        } as Customer,
        dataIsValidate: false,
    }),
    getters: {
        getIfInputsAreFilled(state) {
            return Object.values(state.userData).every(value => value !== "")
        }
    },
    actions: {
        handleCheckoutForm() {
            console.log("Form is submitted")
        }
    }
});
