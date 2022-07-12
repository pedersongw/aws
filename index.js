const express = require("express");
let cors = require("cors");
require("dotenv").config();

const app = express();
const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.send(
    "Hello World from first aws node.js server project- Garrett Pederson"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
