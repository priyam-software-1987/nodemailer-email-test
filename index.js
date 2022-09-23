const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/', async (req, res) => {

    nodemailer.createTestAccount( async (err) => {
        if (err) {
            console.error("Failed to create a testing account. " + err.message);
            return process.exit(1);
        }
        
        console.log("Credentials obtained, sending message...");

        let transporter = nodemailer.createTransport({
            name: '157.230.191.79:5000',
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "friedrich.emard3@ethereal.email", // generated ethereal user
                pass: "7pNe9nxFbucSVXXv62" // generated ethereal password
            },
        });

        transporter.verify(function (error, success) {
            if (error) {
            console.log(error);
            } else {
            console.log("Server is ready to take our messages");
            }
        });


        // let transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //       type: 'OAuth2',
        //       user: "priyam.g@codopoliz.com",
        //       pass: "Priyam01122019#",
        //       clientId: "378133900278-pm35ce24ktdqujr971vueombs116es2m.apps.googleusercontent.com",
        //       clientSecret: "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",
        //       refreshToken: "1//044CLsUjaCJT8CgYIARAAGAQSNwF-L9Ir90iN7zBV04m01-rQPaUSGCWqR2hrEAJIfB_hf2yuiD6sdHm0TUxEfpN0rBEbDj8jIFU"
        //     }
        // });

        // let message = {
        //     from: 'priyam.g@codopoliz.com', // sender address
        //     to: 'priyam.g.codopoliz@gmail.com', // list of receivers
        //     subject: "Email Verification - Godspeedgames Webshop", // Subject line
        //     text: 'OTP : 1234' // plain text body
        // };


        let message = {
            from: 'priyam.g@codopoliz.com', // listed in rfc822 message header
            to: 'priyam.g.codopoliz@gmail.com', // listed in rfc822 message header
            subject: "Email Verification - Godspeedgames Webshop", // Subject line
            text: 'OTP : 1234', // plain text body
            envelope: {
                from: 'Priyam Ghosh <priyam.g@codopoliz.com>', // used as MAIL FROM: address for SMTP
                to: 'priyam.g.codopoliz@gmail.com' // used as RCPT TO: address for SMTP
            }
        }

        // send mail with defined transport object
        let info = await transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            res.status(200).send(info.messageId);
        });

    });
});


app.listen(5000, () => {
    console.log('Service listening to port no 5000 ...');
});