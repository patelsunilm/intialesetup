var express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
var bodyparser = require('body-parser');
const Payment = require('./models/payments');
var cors = require('cors');
var path = require('path');

//Connect to Mongo DB
mongoose.connect('mongodb://localhost/payment');

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb');
});

const keyPublishable = 'pk_test_EPzmSj2c4ch3eXNPUrWldfyr';
const keySecret = 'sk_test_crOcTN4rb3HYpp8At50mnqDV';
const app = require("express")();
const stripe = require("stripe")(keySecret);

app.use(cors());
app.use(bodyparser.json());


app.get("/welcome", function (req, res) {
    console.log("welcome to the payment page");
});


app.post("/charge", (req, res) => {
    console.log("post request called");
    const card_number = req.body.card_number,
        exp_month = req.body.exp_month,
        exp_year = req.body.exp_year,
        cvc = req.body.cvc,
        amount = req.body.amount * 100,
        email = req.body.email,
        description = req.body.description;

    stripe.tokens.create({
        card: {
            "number": card_number,
            "exp_month": exp_month,
            "exp_year": exp_year,
            "cvc": cvc
        }
    }, function (err, token) {
        if (err) {
            console.log('token error');
            console.log(err.message);
            var msg = err.message;
            res.json(msg);
        }
        else {
            stripe.customers.create({
                email: email,
                source: token.id
            }).then(function (customer) {
                if (customer) {
                    // console.log(customer);
                    stripe.charges.create({
                        amount,
                        description: description,
                        currency: "usd",
                        customer: customer.id
                    }).then(function (charge) {
                        const status = charge;
                        console.log('complete result is here');
                        console.log(charge);
                        let newPayment = new Payment({
                            email: email,
                            amount: amount,
                            description: description,
                            transaction_details: status
                        });
                        newPayment.save((err, details) => {
                            if (err) {
                                res.json({
                                    msg: err
                                });
                            }
                            else {
                                res.json(
                                    'Your Transation is done successfully '
                                );
                            }
                        })
                        // res.json({ charge });
                    }, function (error) {
                        console.log('i am new error');
                        console.log(error);
                        res.json({ error });
                    });
                } else {
                    console.log('error in create customer');
                }
            }, function (error) {
                // CVC error
                console.log('cvc error');
                console.log(error.raw.message);
                var msg = error.raw.message;
                res.json(msg);
            }
                );
        }
    });
});

app.post('/pay', (req, res) => {
    console.log('pay request called');
    const
        token_id = req.body.token_id,
        amount = req.body.amount,
        email = req.body.email,
        description = req.body.description;

    stripe.customers.create({
        email: email,
        source: token_id
    }).then(function (customer) {
        if (customer) {
            stripe.charges.create({
                amount,
                description: description,
                currency: "usd",
                customer: customer.id
            }).then(function (charge) {
                const status = charge;
                console.log('complete result is here');
                console.log(charge);

                let newPayment = new Payment({
                    email: email,
                    amount: amount,
                    description: description,
                    transaction_details: status
                });

                newPayment.save((err, details) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            msg: err
                        });
                    }
                    else {
                        console.log(details);
                        res.json(
                            'Your Transation is done successfully '
                        );
                    }
                });
            }, function (error) {
                console.log('i am new error');
                console.log(error);
                res.json({ error });
            }
                )
        }
        else {
            console.log('error in create customer');
        }
    }, function (error) {
        // CVC error
        console.log('cvc error');
        console.log(error.raw.message);
        var msg = error.raw.message;
        res.json(msg);
    });


});


//payment refund
app.post('/refund', (req, res) => {
    console.log('refund called');
    console.log(req.body);

    var transation_id = req.body.t_id;
    console.log(transation_id);
    stripe.refunds.create({

        charge: transation_id
    }, function (err, refund) {
        // asynchronously called
        if (err) {
            console.log('error');
            console.log(err.message);
            res.json(err.message);
        }
        else {
            console.log('result');
            console.log(refund);
            res.json(refund);
        }
    });
});


//retriveing payments
app.get('/payment', (req, res, next) => {
    Payment.find(function (err, payments) {
        res.json(payments);
    })
});

app.listen(5000, function () {
    console.log("run the program 50000")
})  