import { format } from "@formkit/tempo";
export default defineEventHandler(async (event): Promise<any> => {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    let dataToSend = JSON.stringify({
        "arrivalDate": format(new Date(body.checkin), "YYYY-MM-DD"),
        "departureDate": format(new Date(body.checkout), "YYYY-MM-DD"),
        "apartmentId": Number(body.apartmentId),
        "firstName": body.firstName || "",
        "lastName": body.lastName || "",
        "phone": body.phone || "",
        "street": body.address?.street || "",
        "postalCode": body.address?.postalCode || "",
        "location": body.address?.location || "",
        "email": body.email,
        'adults': Number(body.travelers),
        'price': parseFloat(body.amountPayed)
    });
    try {
        const response = await $fetch(`${config.smoobuApiUrl}/api/reservations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "API-Key": config.smoobuApiKey
            },
            body: dataToSend
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