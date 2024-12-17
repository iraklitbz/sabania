import { format } from "@formkit/tempo";

export default defineEventHandler(async (event): Promise<any> => {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    const [firstName, ...lastNameParts] = body.fullName.split(" ");
    const lastName = lastNameParts.join(" ");
    const dataToSend = {
        apartmentId: Number(body.apartmentId),
        arrivalDate: format(new Date(body.checkin), "YYYY-MM-DD"),
        departureDate: format(new Date(body.checkout), "YYYY-MM-DD"),
        firstName: firstName || "",
        lastName: lastName || "",
        email: body.email,
        adults: Number(body.adults),
        price: parseFloat(body.amountPayed)
    };

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