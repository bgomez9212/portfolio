const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Note: simplified this line
const app = express();

app.use(cors());

async function main() {
  try {
    const url = new URL(process.env.API_URL);
    url.searchParams.append("apiKey", process.env.API_KEY);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to handle in route handler
  }
}

app.get("/", (req, res) => {
  main()
    .then((data) => {
      res.status(200).json(data); // Proper way to send JSON with status
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch data" });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
