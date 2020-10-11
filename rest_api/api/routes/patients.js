const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
   Patient.find()
     .exec()
     .then(docs => {
       console.log(docs);
       res.status(200).json(docs);
     })
     .catch(err => {
       console.log(err);
       res.status(500).json({
         error: err
       });
     });
});

router.post('/filter',(req,res,next) =>{
   let lower = req.body.lower;
   let upper = req.body.upper;
   let state = req.body.state;
   let start = req.body.start;
   let end = req.body.end;
    console.log(start, end);
   Patient.find({ageEstimate:{$gt:lower, $lt:upper},state:state,reportedOn:{$gt:start,$lt:end}})
   .exec()
   .then(docs =>{
     res.status(201).json(docs);
   }).catch(err => {
     console.log(err);
     res.status(500).json({
       error: err
     });
   });
});


router.get('/:patientId',(req,res,next)=>{
    const id = req.params.patientId;
    console.log(id);
    Patient.findById(id).
    exec().
    then(doc =>{
       console.log(doc);
       if(doc){
         res.status(200).json(doc);
       }else{
          res.status(404).json({message:"ID not found"});
       }
    }).
    catch(err => {
       console.log(err);
       res.status(500).json({error:err});
    });

 });

 module.exports = router;
