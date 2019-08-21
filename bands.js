var artistName = 'sum41';
var date = ["upcoming", "past", "all"];
var baseURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

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

axios.get(baseURL).then(function(resp){
    // console.log(resp);
    // console.log('--------------------\n');
    // console.log(resp.data[0]);
    for (let i = 0; i < resp.data.length; i++){
        console.log('------------------------------');
        console.log('Venue: '+resp.data[i].venue.name);
        console.log('Location: '+resp.data[i].venue.city + ', ' + resp.data[i].venue.region);
        console.log('Date: '+resp.data[i].datetime);
        console.log('------------------------------\n');
    }
   
   



}).catch(function(err){
    console.log(err);
});
