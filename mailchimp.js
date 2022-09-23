const express = require('express');
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

mailchimp.setConfig({
    apiKey: "d614f6b3fdd8c22ac3f6c2124d77be28-us12",
    server: "us12",
})

app.get('/mailchimp', async (req, res) => {

});


app.listen(5000, () => {
    console.log('Service listening to port no 5000 ...');
});