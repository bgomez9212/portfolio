const { createServer } = require("node:http");
const { axios } = require("axios");
const dotenv = require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());

async function main() {
  const response = await fetch(
    "https://digitalnotebook-production.up.railway.app/api/info"
  );
  const data = await response.json();
  return data;
}

app.get("/", (req, res) => {
  main().then((data) => {
    res.send(JSON.stringify(data)).status(200);
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening");
});
