import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (config.strapiToken) headers['Authorization'] = `Bearer ${config.strapiToken}`

  const { data } = await $fetch<any>(`${config.strapiUrl}/graphql`, {
    method: 'POST',
    headers,
    body: {
      query: `{
        locations { slug }
        apartments { slug }
      }`,
    },
  })

  const urls = [
    ...(data?.locations?.map((l: any) => ({ loc: `/location/${l.slug}`, changefreq: 'weekly', priority: 0.9 })) ?? []),
    ...(data?.apartments?.map((a: any) => ({ loc: `/${a.slug}`, changefreq: 'weekly', priority: 0.9 })) ?? []),
  ]

  return urls
})
