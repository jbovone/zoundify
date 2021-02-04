const axios = require("axios");
const fs = require("fs");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

function getSpotifyToken() {
  const id = new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    "base64"
  );
  return axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: "Basic " + id,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      grant_type: "client_credentials",
    },
    json: true,
  })
    .then((res) => res.data.access_token)
    .catch(() => false);
}

function browseSpotify(token) {
  const endpoints = ["featured-playlists"];
  console.log(token);
  return axios({
    method: "get",
    url: `https://api.spotify.com/v1/browse/new-releases`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Authorization: Bearer ${token}`,
    },
    params: {
      grant_type: "client_credentials",
    },
    json: true,
  })
    .then((res) => fs.writeFileSync("./data.json", JSON.stringify(res.data)))
    .catch(() => false);
}

module.exports = { getSpotifyToken, browseSpotify };
