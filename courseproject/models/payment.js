const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Payment = module.exports = mongoose.model('Payment', PaymentSchema)