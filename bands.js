var app_id = '';
var artistName = '';
var date = ["upcoming", "past", "all"];

// Expected URL
// 'https://rest.bandsintown.com/artists/{artistname}/events'

var baseURL = 'https://rest.bandsintown.com/artists/'+{artistname: artistName}+'/events?date='+date[0];


function queryBuilder() {
  
}
