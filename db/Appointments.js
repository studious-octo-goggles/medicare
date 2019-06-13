var mongoose = require("mongoose");
require('../connection.js');
var Schema = mongoose.Schema;

var appointmentSchema = new Schema({
  disease:String,
  symptom:[String],
  prescription1:String,
});

const appointment = mongoose.model("prescription", appointmentSchema);
module.exports=appointment;