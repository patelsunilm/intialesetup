const mongoose  = require('mongoose');

const PaymentSchema = mongoose.Schema({

  email:{
      type: String,
      require: true
  },
  amount: {
      type: Number,
      require: true
  },
  description: {
       type: String,
       require: true  
  },
  transaction_details: {
      type : Object
  }

});
const Payment = module.exports = mongoose.model('Payment',PaymentSchema)