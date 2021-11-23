const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

//middleware

app.use(express.static('ppublic'));
app.use(express.json());



app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res)=>{
   console.log(req.body);
   const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth:{
           user: 'pevroguin@gmail.com',
           pass:'Le47492156'
       }
       
   })
   const mailOptions = {
       from : req.body.email,
       to: 'pevroguin@gmail.com',
       subject: `Message from ${req.body.email}: ${req.body.nom}`,
       text: req.body.message
   }
   transporter.sendMail(mailOptions, (error,info)=>{
       if(error){
           console.log(error);
           res.send('error');
       }else{
           console.log('Email sent: ' + info.response)
           res.send('access');
       }
   })
   
})

app.listen(PORT,()=>{
    console.log( `server running on port ${PORT}`)
})