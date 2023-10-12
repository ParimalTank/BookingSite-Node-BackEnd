const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
    startTime: {
        type: Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    }, // starting timestamp of the slot
    booked: {
        type: Boolean,
        required: true
    }, // obvious !
    bookingId: {
        type: String
    } // if booked, the _id of the booking in the other DB
}, {
    timestamps: true
});

module.exports = mongoose.model('Slot', slotSchema);
