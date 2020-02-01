const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const category = require("./routes/api/category");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const DB = require("./config/keys").mongoURI;

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Mongodb connected successfully"))
  .catch(err => console.log("Mongodb not connected" + err));

app.use("/api/category", category);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
