const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

//process environement vars
const port = process.env.PORT;
const URI = process.env.URI;

//connect to database
mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));
//MIDDLEWARES
app.use(express.json());
app.use("/api/admin", require("./routes/admin"));
app.use("/api/visitors", require("./routes/visitors"));


// //multer middleware
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//connect server
app.listen(port, (err) => {
  if (err) throw err;
  console.log("server is up and running...");
});
