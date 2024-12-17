import { format } from "@formkit/tempo";

export default defineEventHandler(async (event): Promise<any> => {
    const config = useRuntimeConfig();
    let dataToSend = JSON.stringify({
        "arrivalDate": "2025-12-04",
        "departureDate": "2025-12-05",
        "apartmentId": 2130636,
        "firstName": "irakli",
        "lastName": "tbz",
        "email": "iraklitbz@gmail.com"
    });

    try {
        const response = await $fetch('https://login.smoobu.com/api/reservations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "API-Key": config.public.SMOOBU_API_KEY
            },
            data: dataToSend
        });

        return response;
    } catch (error) {
        console.error('Error en la llamada a la API:', error);

        throw createError({
            statusCode: 500,
            statusMessage: "Error al crear la reserva en la API de Smoobu.",
            data: error
        });
    }
});