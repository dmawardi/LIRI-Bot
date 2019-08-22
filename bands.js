var date = ["upcoming", "past", "all"];

var keys = require("./keys.js");
var axios = require('axios');


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

// Expected URL
// 'https://rest.bandsintown.com/artists/{artistname}/events'

// 'date='+date[0];
// 'https://rest.bandsintown.com/artists/'+{artistname: artistName}+'/events?';

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

module.exports.searchBandEvents = bandsInTownSearchFor;