const { createServer } = require("node:http");
const dotenv = require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

async function main() {
  try {
    const response = await fetch(
      process.env.API_URL +
        new URLSearchParams({
          apiKey: process.env.API_KEY,
        }).toString()
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
}

app.get("/", (req, res) => {
  main()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => res.status(500).json({ error: "error fetching data" }));
});

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("listening");
});
