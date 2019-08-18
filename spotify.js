var Spotify = require('node-spotify-api');

// Initialize spotify object with credentials
var spotify = new Spotify({
    id: 'bd9f893e641441b8a1a0a839b14cf479',
    secret: '066407ba4a1843a99cb295db2d7b234f'
});
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

function printResults(response) {
    let ref = response.tracks.items;

    console.log('There are ' + ref.length + ' Results:');

    // Iterate through results printing each result
    for (let i = 0; i < ref.length; i++) {
        console.log('###############################################################');
        console.log('Artist Name: ' + ref[i].album.artists[i].name);
        console.log('Release Date: ' + ref[i].album.release_date);
        console.log('Album Name: ' + ref[i].album.name);
        console.log('Name: ' + ref[i].name);
        console.log('Popularity: ' + ref[i].popularity);
        console.log('href: ' + ref[i].href);
        console.log('Duration: ' + ref[i].duration_ms);
        console.log('###############################################################');
    }


}

// Searches spotify using node-spotify-api package
function searchSpotify(searchQuery) {

    // convert searchQuery into correct format
    searchQuery = queryFormatter(searchQuery);

    // Send search call to Spotify API
    spotify
        .search({
            type: 'track',
            query: searchQuery,
            market: 'AU',
            limit: 5
        })
        .then(function (response) {
            //   console.log(JSON.stringify(response.tracks.items, null, 2));
            console.log(JSON.stringify(response.tracks.items[0], null, 2));

            printResults(response);
            console.log('Results:');
            console.log('###############################################################');
            console.log('Artist Name: ' + response.tracks.items[0].album.artists[0].name);
            console.log('Release Date: ' + response.tracks.items[0].album.release_date);
            console.log('Album Name: ' + response.tracks.items[0].album.name);
            console.log('Name: ' + response.tracks.items[0].name);
            console.log('Popularity: ' + response.tracks.items[0].popularity);
            console.log('href: ' + response.tracks.items[0].href);
            console.log('Duration: ' + response.tracks.items[0].duration_ms);
            console.log('###############################################################');




            //   album.artists[0].name
            // album.name, album.release_date
            // response.name, response.popularity, response.href, response.duration_ms
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Arugments
searchSpotify('in da club');