import { format } from "@formkit/tempo"
export default defineEventHandler(async (event): Promise<any> => {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    console.log(body)
    // try {
    //
    //     const data = await $fetch(`${config.public.SMOOBU_API_URL}/api/reservations`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Api-Key": config.public.SMOOBU_API_KEY
    //         },
    //     })
    //     return data
    // }
    // catch (error) {
    //     console.error(error)
    //     throw createError({
    //         statusCode: 500,
    //         statusMessage: "Error fetching apartment data.",
    //     })
    // }
})