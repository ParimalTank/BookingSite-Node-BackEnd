const Booking = require("../models/Booking");

// For now validation is remaining
const booking = async (req, res) => {

    try {
        const bookingDetails = await req.body;

        const BookingDetails = {
            startTime: bookingDetails.startTime,
            endTime: bookingDetails.endTime,
            clientName: bookingDetails.clientName,
            clientEmail: bookingDetails.clientEmail,
            payment: bookingDetails.payment,
            paymentStatus: bookingDetails.paymentStatus
        }

        await Booking.create(BookingDetails);

        // Also Add this booking details to the slot Schema so that we can confirm that this is booked slot.

        res.status(200).json({ message: "Booking Successful" })
    } catch (error) {
        console.log("error: ", error);
        res.status(404).json({ message: "Something went wrong" })
    }

}

module.exports = {
    booking
}
