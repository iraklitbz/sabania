export const customer = defineStore("customerData", {
    state: () => ({
        userData: {
            firstName: "",
            lastName: "",
            street: "",
            postalCode: "",
            location: "",
            email: "",
            phone: "",
            phonePrefix: "DE",
            phoneGroup: {
                phoneCountry: "DE",
                phone: "",
            },
        },
        billingData: {
            street: "",
            postalCode: "",
            location: "",
            company: "",
            vatNumber: "",
        },
        sameAsPersonal: true,
    }),
    getters: {
        getIfInputsAreFilled(state) {
            const { firstName, lastName, street, postalCode, location, email } = state.userData
            const phone = state.userData.phoneGroup.phone
            return !!(firstName && lastName && street && postalCode && location && email && phone)
        }
    }
});
