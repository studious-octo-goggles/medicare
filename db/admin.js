var mongoose = require("mongoose");
require('../connection.js');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  id:String,
  name:String,
  password:String,
  address:String,
  email:String,
  mobile:Number,
});

const admin = mongoose.model("admin", adminSchema);
module.exports=admin;