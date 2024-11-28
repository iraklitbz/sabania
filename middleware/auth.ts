export default defineNuxtRouteMiddleware((to, _from) => {
    const token = useStrapiToken()
    if (!token.value) {
      useCookie('redirect', { path: '/' }).value = to.fullPath
      return navigateTo('/login')
    }
  })