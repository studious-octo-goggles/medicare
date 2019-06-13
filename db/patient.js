var mongoose = require("mongoose");
require('../connection.js');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
  patient_id:String,
  patient_name:String,
  patient_address:String,
  // patient_email:String,
  patient_mobile:Number,
  disease:String,
 // blood_group:String,
//  relative_name:String,
//  patient_relation:String,
 // relative_mobile:Number,
 // patient_password:String
  entryDate:Date,
  assignDocId:String,
  roomType:String,
  bedNo:Number

});

const patient = mongoose.model("patient", patientSchema);
module.exports=patient;