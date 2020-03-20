<<<<<<< HEAD
// Brewery DB query
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=NY&by_name=cooper&by_tag=patio&by_type=micro",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
		"x-rapidapi-key": "ad79893db0msh519507ce219a2cep1942b9jsn16290fa29320"
	}
};

=======
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
>>>>>>> c6a80fbe0d6445e03e36e5a3132a1480af2dbcc9
$.ajax(settings).done(function (response) {
	console.log(response);
});