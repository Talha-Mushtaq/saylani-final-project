var express = require("express");
var app = require('express').Router();
var OrderCollection = require('../models/OrderSchema');
// app.use(express.static(__dirname+''));

// ---------------- Admin Get Order----------------
app.get("/GetAdminOrder", function(req, res) {
    OrderCollection
      .find()
      .exec((err, data) => {
        if (err) {
          res.json("error occored");
        } 
        else {
          res.json(data);
        }
      });
})
// ----------------  Add Order ----------------
 app.post("/AddAdminOrder" , function(req,res) {
   console.log(req.body.product);
  let saveNewRow = new  OrderCollection();  
  saveNewRow.id = req.body.id;
  saveNewRow.info = req.body.info;
  saveNewRow.product = req.body.product;
  saveNewRow.totalRupee = req.body.totalRupee;

  saveNewRow.save((err, save) => {
    if (err) {
      res.json("error occored");
    } else {
      res.json(save);
    }
  });

});

// ---------------- Admin Delete  Order----------------
app.post("/DeleteAdminOrder", function(req, res) {
    console.log(req.body.id)
    OrderCollection
  .findOneAndDelete()
  .where('id')
  .equals(req.body.id)  
  .exec(function(err, data) {
    if (err) {
      console.log(err);
      res.json("error occured");
    }
    res.json(data);
  });
});


module.exports = app;