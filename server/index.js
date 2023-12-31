const express = require("express");
const connectDB = require("./db/index");
const path = require("path"); // NEW
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "../dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html"); // NEW
require("dotenv").config();
connectDB();

app.use(express.static(DIST_DIR)); // NEW
app.use("/api", require("./api"));
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
  console.log("App listening on port: " + port);
});

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});
