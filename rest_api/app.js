const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const patientRoutes = require('./api/routes/patients');
const emailRouter = require('./api/routes/email')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//routes handling requests
app.use('/patients',patientRoutes);
app.use('/email',emailRouter);

mongoose.connect('mongodb+srv://harshul:harshul@cluster0.4eyuv.mongodb.net/VitHack?retryWrites=true&w=majority',
  {
      useMongoClient: true
  }
);

app.use((req,res,next)=>{
    res.status(200).json({
      message:"Get the database with /patients"
    });
});

module.exports = app;
