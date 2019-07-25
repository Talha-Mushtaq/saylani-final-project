var mongoose = require('mongoose');

function dbConnection() {

    mongoose.connect('mongodb+srv://talha:12345@cluster0-9d5bk.mongodb.net/test?retryWrites=true&w=majority',
    
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("successfully connected to database");
    }
  }
);
}

module.exports = dbConnection;