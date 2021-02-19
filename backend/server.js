require("dotenv").config();
const { browseSpotify, getSpotifyToken } = require("./spotify");
const mapper = require("./mapper");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/browse", async (req, res) => {
  const token = await getSpotifyToken();
  const browseData = await browseSpotify(token);
  console.log(mapper(browseData)[0].articles);
  res.send(mapper(browseData));
});

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT || 3001, () => console.log("serving 3001"));
