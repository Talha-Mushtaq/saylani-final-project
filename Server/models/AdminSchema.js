var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AdminTable = new Schema({
  id:String,
  title:String,
  rupee:Number,
  detail:String,
  pic:String
});
const AdminCollection = mongoose.model("Admin",AdminTable);

module.exports = AdminCollection;