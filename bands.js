var app_id = '';
var artistName = 'sum41';
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

var baseURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
// 'date='+date[0];
// 'https://rest.bandsintown.com/artists/'+{artistname: artistName}+'/events?';

axios.get(baseURL).then(function(resp){
    console.log(JSON.stringify(resp));
    console.log(resp[0].venue);
    console.log(resp[0].venue);
    console.log(resp[0].datetime);


}).catch(function(err){
    console.log(err);
});
