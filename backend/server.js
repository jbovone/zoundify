require("dotenv").config();
const { browseSpotify, getSpotifyToken } = require("./spotify");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

getSpotifyToken().then((token) => browseSpotify(token));

app.get("/browse", async (req, res) => {
  console.log("browsing");
  const token = await getSpotifyToken();
  const browseData = await browseSpotify(token);
  res.send(browseData);
});

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/", (req, res) => {
  console.log("home");
  res.sendFile("index.html");
});

app.listen(process.env.PORT || 3000, () => console.log("serving 3000"));
