const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bus-booking", );

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo Db Connection Successful");
});

db.on("error", () => {
  console.log("Mongo Db Connection Failed");
});
