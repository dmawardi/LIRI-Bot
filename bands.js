// var date = ["upcoming", "past", "all"];

var keys = require("./keys.js");
var axios = require('axios');

// Query formatter
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

// Search Bands in town API using artist name to find events
function bandsInTownSearchFor(artistName) {
    // Declare baseURL
    var baseURL = "https://rest.bandsintown.com/artists/" + queryFormatter(artistName) + "/events?app_id=codingbootcamp";


    axios.get(baseURL).then(function (resp) {
        
        // For the amount of results returned, print
        for (let i = 0; i < resp.data.length; i++) {
            console.log('------------------------------');
            // Venue Name
            console.log('Venue: ' + resp.data[i].venue.name);
            // Venue location
            console.log('Location: ' + resp.data[i].venue.city + ', ' + resp.data[i].venue.region);
            // Date of event
            console.log('Event Date: ' + resp.data[i].datetime);
            console.log('------------------------------\n');
        }

    }).catch(function (err) {
        console.log(err);
    });
}

// Module Exports
module.exports.searchBandEvents = bandsInTownSearchFor;