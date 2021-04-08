require("dotenv").config();
const passport=require('passport');
const bcrypt=require('bcryptjs');

let express = require("express");
let bodyParser = require("body-parser");
let http = require("http");
let path = require("path");
let cors = require("cors");
let mongoose = require("mongoose");
// Init App
var app = express();
var server = http.createServer(app);
//Use CORS

app.use(cors());
// connect to db
mongoose.connect(
  process.env.MONGO_DB_CONN_STRING,
  { useNewUrlParser: true },
  function (err) {
    if (err) console.log(err);
    else console.log("connected..");
  }
);




//passport Middelware
app.use(passport.initialize());
app.use(passport.session());

// Routes setup
let apiRoutes = require("./routers/api");

app.use("/api", apiRoutes);

app.set("port", process.env.PORT || 80);

server.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});
