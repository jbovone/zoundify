const axios = require("axios");
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

async function homeSpotify(token) {
  return await Promise.all(
    [
      { title: "Featured Playlists", endpoint: "featured-playlists" },
      { title: "New Releases", endpoint: "new-releases" },
      { title: "Mood", endpoint: "categories/mood/playlists" },
      { title: "Top Lists", endpoint: "categories/toplists/playlists" },
      { title: "Romance", endpoint: "categories/romance/playlists" },
      { title: "Instrumental", endpoint: "categories/instrumental/playlists" },
    ].map(({ endpoint, title }) =>
      getSpotifyData(token, endpoint)
        .then((res) => {
          res.data.title = title;
          return res.data;
        })
        .catch(() => false)
    )
  );
}

function getSpotifyData(token, endpoint) {
  return axios({
    method: "get",
    url: `https://api.spotify.com/v1/browse/${endpoint}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Authorization: Bearer ${token}`,
    },
    params: {
      grant_type: "client_credentials",
    },
    json: true,
  });
}

module.exports = { getSpotifyToken, homeSpotify, getSpotifyData };
