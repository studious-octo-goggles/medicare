var mongoose = require("mongoose");
require('../connection.js');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
  room_id:String,
  room_no:Number,
  type:String,
  beds:Number,
  costPerDay:Number,
});

const room = mongoose.model("room", roomSchema);
module.exports=room;