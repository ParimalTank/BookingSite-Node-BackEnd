const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({

    dateOfBook: {
        type: String,
        required: true
    },
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
        default: 100
    },
    paymentStatus: {
        type: Boolean,
        default: false
    },
    appliedCouponCode: {
        type: String,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
