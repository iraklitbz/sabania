import { apartments } from '~/store/apartments'

export default defineNuxtRouteMiddleware( (from, to) => {
    if(apartments().apartment.slug !== from.params.order) {
        return navigateTo(`/${from.params.order}`);
    }
})