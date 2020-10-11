const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
   _id:mongoose.Schema.Types.ObjectId,
   reportedOn:String,
   ageEstimate:Number,
   gender:String,
   state:String
},{collection:'covid'});

module.exports = mongoose.model('Patient',patientSchema);
