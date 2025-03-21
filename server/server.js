const { createServer } = require("node:http");
const { axios } = require("axios");
const dotenv = require("dotenv").config();

const port = 3000;

async function main() {
  const response = await fetch(
    "https://digitalnotebook-production.up.railway.app/api/info",
    {
      params: {
        example: "example",
      },
    }
  );
  const data = await response.json();
  return data;
}

const server = createServer((req, res) => {
  main().then((data) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
