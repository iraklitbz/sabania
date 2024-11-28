<script setup lang="ts">
const { authenticateProvider } = useStrapiAuth()
const route = useRoute()
try {
    const token = route.query.access_token as string
    if (!token) throw new Error('No token provided')
    await authenticateProvider('google', token)
    useCookie('skipMiddleware').value = 'true'
    navigateTo('/')
} catch (e) {
    console.error(e)
    navigateTo('/login')
}
</script>