const express = require('express');
const router = express.Router();
var nodemailer = require("nodemailer");
const Contact = require('../models/contacts');

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "",
        pass: ""
    }
});

//retriveing contacts
router.get('/contacts', (req, res, next) => {
    Contact.find(function (err, contacts) {
        res.json(contacts);
    })
});

//add Contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({
                msg: 'Failed to add Contact'
            });
            // console.log('error in add new contact is ' + err);
        }
        else {
            console.log(contact);
            var receiver = contact.email;
            // var msg = 'Welcome'+ contact.first_name + '  your phone no  ' + contact.phone + '  is successfully added'
            var mailOptions = {
                from:"<patelsunil202@gmail.com>",
                to: receiver,
                subject: 'Welcome',
                text: 'Welcome' + contact.first_name +  ' your phone no  ' + contact.phone + '  is successfully added',
                html: `
                    <b>Sunil Patel</b>
                     <img src="http://www.hdwallpaper.nu/wp-content/uploads/2015/02/smiley-face-digital-art-hd-wallpaper-1920x1200-19553.jpg" style="width:304px;height:228px;">
                `
            }
            // console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                    res.end("error");
                } else {
                    console.log(response);
                    console.log("Message sent: " + response.message);
                    // res.end("sent");
                }
            });
            res.json({
                msg: 'Contact Added Successfully'
            });
        }
    });
});


router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            // console.log( 'error in delete contact is '+ err); 
            res.json(err);
        }
        else {
            // console.log('Contact deleted successfully '+result);
            res.json(result);
        }
    });
});


//Update Contact
router.put('/contact/:id', (req, res, next) => {
       let updateContact = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    }
    
    Contact.findByIdAndUpdate(req.params.id, { $set: updateContact }, function (err, result) {
        if (err) {
            console.log('error in update contact is ' + err);
            res.json(err);
        }
        else {
            console.log('Contact update successfully ' + result);
            res.json(result);
        }
 
  });

});

module.exports = router;        