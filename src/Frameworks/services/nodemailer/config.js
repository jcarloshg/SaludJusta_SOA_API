const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saludjustamx@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: 'saludjustamx@gmail.com',
    to: 'carlosj12336@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

module.exports = { transporter, mailOptions };