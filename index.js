const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/', async (request, response) => {

    console.log("Hello World");
    return response.status(200).send("Hello Priyam");

    let transporter = nodemailer.createTransport({
        name: 'godspeedgames.com',
        host: "smtp.mailtrap.io",
        port: 2525,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "20983252ca9ddc", // generated ethereal user
            pass: "261a77a8b36029" // generated ethereal password
        },
    });

    let message = {
        from: 'admin@godspeedgames.com', // sender address
        to: 'priyam.g.codopoliz@gmail.com', // list of receivers
        subject: "Email Verification - Godspeedgames Webshop", // Subject line
        text: 'OTP : 1234' // plain text body
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        response.status(200).send(info.messageId);
    });

    
});

app.listen(4000, () => {
    console.log('Service listening to port no 4000 ...');
});