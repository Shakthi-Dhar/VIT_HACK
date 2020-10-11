const express = require('express')
const router = new express.Router()
const nodemailer = require('nodemailer');

router.get("/test",(req,res)=>{
    res.send("Hey!!")
})


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testharshul@gmail.com',
    pass: 'Abc@12345'
  }
});

router.post('/',async (req,res)=>{
  let mailid = req.body.mailid;

  var mailOptions = {
    from: 'testharshul@gmail.com',
    to: mailid,
    subject: 'Sending Email using Node.js',
    text: 'Image is supposed to come !'
  };
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
     } else {
    console.log('Email sent: ' + info.response);
    res.send(201).json(info);
   }
 });
})

module.exports = router
