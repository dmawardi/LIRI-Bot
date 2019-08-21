var audio = require('./spotify.js');

require("dotenv").config();

var keys = require("./keys.js");

var arguments = process.argv.slice(2);

var command = arguments[0];

console.log(command);

switch (command) {
    case 'concert-this':
        audio.search('thriller');
        break;
    case 'spotify-this-song':
        // Search Spotify API
        break;
    case 'movie-this':
        // OMDB API Call
        break;
    case 'do-what-it-says':
        // reads command from random.txt
        break;
}
