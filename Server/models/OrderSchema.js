var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const OrderTable = new Schema({
 id:String,
 info:Object,
 product:Object,
 totalRupee:Number
});
const OrderCollection = mongoose.model("Orders",OrderTable);

module.exports = OrderCollection;