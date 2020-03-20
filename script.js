// var userLat = 37.540726;
// var userLon = -77.436050;

// var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + userLat + "&lon=" + userLon + "&maxDistance=10&key=200708264-a5ce732ab3823333a148cde68ddfa0ce"

// $.ajax ({
//     url: queryURL,
//     method: "GET"
// })
//     .then(function(response) {
//         populateData(response);
//     });

// function populateData(response) {
//     console.log(response);
// }


// var secondURL = "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=richmond"

// $.ajax ({
//     url: secondURL,
//     method: "GET"
// })
//     .then(function(response) {
//         secondData(response);
//     });
// function populateData(response) {
//     console.log(response);
// }

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=richmond",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
		"x-rapidapi-key": "cdc0ac54bamshcdd268cd5c832d8p100753jsn8ab4fd9912f8"
	}
}
$.ajax(settings).done(function (response) {
	console.log(response);
});