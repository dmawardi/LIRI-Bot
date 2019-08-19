var axios = require('axios');

// Preceded by s/search or t/title
var searchTerm = 'Avengers';
var api_key = '44ec4369';
//Preceded by plot=
var plotTypeChoices = ['short', 'full'];
var plotType = '';
//Preceded by type=
var searchTypeChoices = ['movie', 'series', 'episode'];
var searchType = '';
// Preceded by y=
var releaseYear = '';

// Replaces strings in search term with '+'
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

function queryBuilder(searchTerm, plotType, searchType, releaseYear) {
  var baseURL = 'http://www.omdbapi.com/?apikey=' + api_key + '&';

  //   If plot type detected, add to query string
  if (plotType !== '') {
    baseURL = baseURL + 'plot=' + plotType + "&";
  }
  //   If search type detected, add to query string
  if (searchType !== '') {
    baseURL = baseURL + 'type=' + searchType + '&';
  }
  //   If release year detected, add to query string
  if (releaseYear !== '') {
    baseURL = baseURL + 'y=' + plotType + '&';
  }
  //   Add search term to Query URL
  baseURL = baseURL + 't=' + searchTerm;

  return baseURL

}
// Prints from results
function printTitleSearchResults(resp) {
  // Title of the movie.
  console.log('Title: ' + resp.data.Title);
  // * Year the movie came out.
  console.log('Year: ' + resp.data.Year);

  // * IMDB Rating of the movie.
  console.log('IMDB Rating: ' + resp.data.Ratings[0].Value);

  // * Rotten Tomatoes Rating of the movie.
  console.log('Rotten Tomato Rating: ' + resp.data.Ratings[1].Value);

  // * Country where the movie was produced.
  console.log('Country: ' + resp.data.Country);

  // * Language of the movie.
  console.log('Language: ' + resp.data.Language);

  // * Plot of the movie.
  console.log('Plot: ' + resp.data.Plot);

  // * Actors in the movie.
  console.log('Actors: ' + resp.data.Actors);
}

function searchOMDB(searchQuery) {
  axios.get(searchQuery).then(function (resp) {
    console.log(resp.data);
    printTitleSearchResults(resp);

  }).catch(function (err) {
    console.log(err);
  })
}



searchOMDB(queryBuilder(searchTerm, plotType, searchType, releaseYear));