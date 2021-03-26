require("dotenv").config();
const { homeSpotify, getSpotifyToken } = require("./spotify");
const mapper = require("./mapper");
const path = require("path");
const express = require("express");
const cors = require("cors");
const mockData = require("../mockData");

const app = express();
app.use(cors());

app.get("/home", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const browseData = await homeSpotify(token);
    res.send(mapper(browseData));
  } catch (err) {
    console.log(err);
    res.send(mockData);
  }
});

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT || 3001, () => console.log("serving 3001"));
