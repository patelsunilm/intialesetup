const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    birth_date:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    
});


const registration = module.exports = mongoose.model('registration', RegistrationSchema);