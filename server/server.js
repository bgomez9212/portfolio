const { createServer } = require("node:http");
const { axios } = require("axios");
const dotenv = require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

async function main() {
  const response = await fetch(
    process.env.API_URL +
      new URLSearchParams({
        apiKey: process.env.API_KEY,
      }).toString()
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
