const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    payment: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        required: true
    },
    appliedCouponCode: {
        type: String,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);