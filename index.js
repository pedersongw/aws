const express = require("express");
let cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello World from first aws node.js server project- Garrett Pederson"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
