var audio = require('./spotify.js');
var movie = require('./omdb.js');
var bands = require('./bands.js');

require("dotenv").config();

var keys = require("./keys.js");

var arguments = process.argv.slice(2);

// Type of initiated command is determined by initial parameter argument
var command = arguments[0];

// Fuse the rest of the arguments that come after the command as one string, with a space as delimiter
var parameters = arguments.slice(1).join(' ');

// Depending on value of command perform associated function
switch (command) {
    // Search for concerts by band name
    case 'concert-this':
        console.log('concert this');
        // Search Bands in town for band
        bands.searchBandEvents(parameters)
        break;
    case 'spotify-this-song':
        // Search Spotify API
        audio.search(parameters);
        break;
    case 'movie-this':
        // OMDB API Call
        movie.searchMovie(movie.queryFormat(parameters));
        break;
    case 'do-what-it-says':
        // reads command from random.txt
        break;
}