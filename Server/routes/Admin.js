var express = require("express");
var app = require('express').Router();
var AdminCollection = require('../models/AdminSchema');
var uploadImage = require('../multer/multer_images');
// app.use(express.static('pics'));
// ---------------- Admin Response ----------------
app.get("/",function(req, res) {
  console.log("Response");
    res.end('Response');
});
// ---------------- Admin Get ----------------
app.get("/GetDBdata", function(req, res) {
  AdminCollection
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
// ---------------- Admin Add ----------------
 app.post("/AddDBdata" ,uploadImage.single('pic'), function(req,res) {
   console.log(req.file.path);
  let saveNewRow = new  AdminCollection();  
  saveNewRow.id = req.body.id;
  saveNewRow.title = req.body.title;
  saveNewRow.rupee = req.body.rupee;
  saveNewRow.detail = req.body.detail;
  saveNewRow.pic = req.file.path;
  // console.log("file",req.file);
  // console.log("body",req.body);
  saveNewRow.save((err, save) => {
    if (err) {
      res.json("error occored");
    } else {
      res.json(save);
    }
  });
});

// ---------------- Admin Delete ----------------
app.post("/DeleteDBdata", function(req, res) {
  AdminCollection
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
// ---------------- Product Search ----------------

app.get("/GetProductDetail", function(req, res) {
  AdminCollection
      .findOne()
      .where('id')
      .equals(req.body.id)   
      .exec((err, data) => {
        if (err) {
          res.json("error occored");
        } else {
          res.json(data);
        }
      });
})

module.exports = app;
