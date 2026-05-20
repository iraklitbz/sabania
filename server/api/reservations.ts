export default defineEventHandler(async (event): Promise<any> => {
    const config = useRuntimeConfig();
    const body = await readBody(event);

    // Parse dates and format as YYYY-MM-DD
    const checkinDate = new Date(body.checkin);
    const checkoutDate = new Date(body.checkout);

    if (isNaN(checkinDate.getTime()) || isNaN(checkoutDate.getTime())) {
        throw createError({
            statusCode: 400,
            statusMessage: `Invalid dates: checkin=${body.checkin}, checkout=${body.checkout}`,
        });
    }

    const arrivalDate = checkinDate.toISOString().split("T")[0];
    const departureDate = checkoutDate.toISOString().split("T")[0];

    const dataToSend = JSON.stringify({
        arrivalDate,
        departureDate,
        "apartmentId": Number(body.apartmentId),
        "firstName": body.firstName || "",
        "lastName": body.lastName || "",
        "phone": body.phone || "",
        "street": body.address?.street || "",
        "postalCode": body.address?.postalCode || "",
        "location": body.address?.location || "",
        "email": body.email,
        "adults": Number(body.travelers) || 1,
        "price": parseFloat(body.amountPayed) || 0
    });

    console.log("Smoobu request:", { arrivalDate, departureDate, apartmentId: body.apartmentId, email: body.email });

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
    } catch (error: any) {
        console.error('Smoobu API error:', error?.data || error?.message || error);

        throw createError({
            statusCode: 500,
            statusMessage: "Error al crear la reserva en la API de Smoobu.",
            data: error?.data || error?.message
        });
    }
});