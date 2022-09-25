var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
            user: 'junior.topos@gmail.com',
            pass: 'juniorfixo'
      }
});

var mailOptions = {
      from: 'junior.topos@gmail.com',
      to: 'juniormelo.dev@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
      if (error) {
            console.log(error);
      }else {
            console.log('Email sent: ' + info.response);
      }
});