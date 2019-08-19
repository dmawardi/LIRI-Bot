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

function queryBuilder(searchTerm, plotType, searchType, releaseYear) {
  var baseURL = 'http://www.omdbapi.com/?apikey='+api_key;
  
  //   If plot type detected, add to query string
  if (plotType !== '') {
    baseURL = baseURL + '+plot='+plotType;
  }
  //   If search type detected, add to query string
  if (searchType !== '') {
    baseURL = baseURL + '+type='+searchType;
  }
//   If release year detected, add to query string
  if (releaseYear !== '') {
    baseURL = baseURL + '+y='+plotType;
  }
//   Add search term to Query URL
  baseURL = baseURL + '+s=' + searchTerm;
  return baseURL
  
}

function searchOMDB(searchQuery) {
  axios.get(searchQuery).then(function(resp){
  console.log(resp);
  })
}
