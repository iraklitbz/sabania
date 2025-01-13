import { format } from "@formkit/tempo";
import {apartments} from "~/store/apartments";
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
        "address": {
            "street": body.street || "",
            "postalCode": body.postalCode || "",
            "location": body.location || ""
        },
        "email": body.email,
        'adults': Number(body.travelers),
        'price': parseFloat(body.amountPayed)
    });
    try {
        const response = await $fetch(`${config.public.SMOOBU_API_URL}/api/reservations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "API-Key": config.public.SMOOBU_API_KEY
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