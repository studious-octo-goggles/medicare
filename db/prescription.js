var mongoose = require("mongoose");
require('../connection.js');
var Schema = mongoose.Schema;

var prescriptionSchema = new Schema({
  disease:String,
  symptom:[String],
  prescription1:String,
});

const prescription = mongoose.model("prescription", prescriptionSchema);
module.exports=prescription;