var audio = require('./spotify.js');
var movie = require('./omdb.js');
var bands = require('./bands.js');
var fs = require('fs');

require("dotenv").config();

var keys = require("./keys.js");

var arguments = process.argv.slice(2);

// Type of initiated command is determined by initial parameter argument
var commandType = arguments[0];

// Fuse the rest of the arguments that come after the command as one string, with a space as delimiter
var parameters = arguments.slice(1).join(' ');
console.log(parameters);

// Read file and take command using file location as file path
function readFileAndTakeCommand(fileLocation) {
    // Reads file using fileLocation as path
    fs.readFile(fileLocation, 'UTF-8', function (err, data) {
        if (err) {
            console.log(err);
        }
        let parameters = data.split(' ');
        let command = parameters[0];
        let arguments = parameters.slice(1).join(' ');
        console.log(arguments);
        // Use data to take command and process
        takeCommand(command, arguments);

    })
}

// Depending on value of command perform associated function
function takeCommand(command, parameters) {
    switch (command) {
        // Search for concerts by band name
        case 'concert-this':
            // Search Bands in town for band
            bands.searchBandEvents(parameters);
            break;
        case 'spotify-this-song':
            // Search Spotify API
            audio.searchMusic(parameters);
            break;
        case 'movie-this':
            // OMDB API Call
            movie.searchMovie(movie.queryFormat(parameters));
            break;
        case 'do-what-it-says':
            // reads command from random.txt
            readFileAndTakeCommand('./random.txt');
            break;
    }
}

// Arguments begin
takeCommand(commandType);