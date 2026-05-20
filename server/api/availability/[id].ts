import { format } from "@formkit/tempo"
export default defineEventHandler(async (event): Promise<any> => {
    const config = useRuntimeConfig()
    try {
        const { id } = event.context.params as { id: string }
        const today = format(new Date(), "YYYY-MM-DD")
        const data = await $fetch(`${config.smoobuApiUrl}/api/reservations?apartmentId=${id}&from=${today}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Api-Key": config.smoobuApiKey
            },
        })
        return data
    }
    catch (error) {
        console.error(error)
        throw createError({
            statusCode: 500,
            statusMessage: "Error fetching apartment data.",
        })
    }
}) 