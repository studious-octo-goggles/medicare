var mongoose = require("mongoose");
require('../connection.js');
var Schema = mongoose.Schema;

var patientTempSchema = new Schema({
  patientname:String,
  patientaddress:String,
  patientmobile:Number,
  dob:Date,
  age:Number,
});

const temppatient = mongoose.model("temppatient", patientTempSchema);
module.exports=temppatient;