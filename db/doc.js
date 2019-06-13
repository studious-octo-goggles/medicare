var mongoose = require("mongoose");
require('../connection.js');
var Schema = mongoose.Schema;

var docSchema = new Schema({
  doc_id:String,
  doc_name:String,
  doc_password:String,
  doc_address:String,
  doc_email:String,
  doc_mobile:Number,
  specialist:String,
  salary:Number
});

const doc = mongoose.model("doc", docSchema);
module.exports=doc;