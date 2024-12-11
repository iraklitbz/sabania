export const settings = defineStore('settingsData', {
    state: () => ({
        menuIsOpen: false
    }),
    actions: {
        toggleMenu() {
            this.menuIsOpen = !this.menuIsOpen
        },
        closeMenu () {
            this.menuIsOpen = false
        }
    }
})