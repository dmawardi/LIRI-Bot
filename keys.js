require("dotenv").config();

// Spotify API key and secret
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// OMDB API KEY
exports.omdb = process.env.OMDB_KEY;
