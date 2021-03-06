var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var moment = require('moment');

// Initialize spotify object with credentials
var spotify = new Spotify(keys.spotify);
//  Query types can be fused with a comma in between
queryTypes = ['album', 'artist', 'playlist', 'track'];

// Formats a query for making API calls to Spotify
function queryFormatter(query) {
    // Declare empty string
    var string = '';
    // For each character in query
    for (let i = 0; i < query.length; i++) {
        // If the character is a space
        if (query[i] == ' ') {
            // replace with '+'
            string = string + '+';

        } else {
            // Else, use character
            string = string + query[i];
        }
    }
    return string
}

// Either prints single artist or multiple artists
function extractArtists(ref) {
    ref = ref.artists
    if (ref.length > 0) {
        console.log('Artist: '+ref[0].name);

        // Else, concatenate
    } else {
        let string = '';
        for (let i = 0; i < ref.length; i++) {
            console.log('Artists: '+ref[i].name);

        }

    }

}

function formatSongDuration(duration) {
    // Extract minutes
    let minutes = moment.duration(duration).minutes();
    // Extract seconds
    let seconds = moment.duration(duration).seconds();
    // Find seconds left in the minute
    let secondsLeftInMinute = seconds%60;
    // If secondsLeft is less than 10, add a 0 for formatting
    if (secondsLeftInMinute < 10) {
        secondsLeftInMinute = '0' + secondsLeftInMinute
    }
    return minutes +':'+secondsLeftInMinute
}

// Print results from response
function printResults(response) {
    let ref = response.tracks.items;

    console.log('There are ' + ref.length + ' Results:');
    console.log('###############################################################');

    // Iterate through results printing each result
    for (let i = 0; i < ref.length; i++) {
        // extract the artist based on the number of artists on the track
        extractArtists(ref[i].album)
        console.log('Release Date: ' + ref[i].album.release_date);
        console.log('Album Name: ' + ref[i].album.name);
        console.log('Name: ' + ref[i].name);
        console.log('Popularity: ' + ref[i].popularity);
        console.log('href: ' + ref[i].href);
        console.log('Duration: ' + formatSongDuration(ref[i].duration_ms));
        console.log('###############################################################');
    }


}

// Searches spotify using node-spotify-api package
function searchSpotify(searchQuery, searchType='track') {
    // convert searchQuery into correct format
    searchQuery = queryFormatter(searchQuery);

    // Send search call to Spotify API
    spotify
        .search({
            type: searchType,
            query: searchQuery,
            market: 'AU',
            limit: 5
        })
        .then(function (response) {
            // console.log(JSON.stringify(response.tracks.items[1], null, 2));

            printResults(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Module Exports
module.exports.searchMusic = searchSpotify;