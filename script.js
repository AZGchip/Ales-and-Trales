var searchbox;
let searchLat;
let searchlon;

// $("#user-input").on("click", function(event) {
//     event.preventDefault();
//     searchbox = $(this).prev().val();
//     console.log(searchbox);
//     //api value 
//     var apiUrl =  "https://nominatim.openstreetmap.org/search/"+ searchbox + "?format=json";
//     var results;
//     function getLatLon(){
//         $.ajax({
//             url: apiUrl,
//             method: "GET"
//         })
//             .then(function (response) {
//                 results = response;
//                 searchLat = results[0].lat
//                 searchlon = results[0].lon
//                 console.log(results)
//             });
//     };
//     getLatLon();
// });





var theMap = L.map("map-content",{
    center: [37.54,-77.43],
    zoom: 13, })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(theMap);
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


// var secondURL = "https://sandbox-api.brewerydb.com/v2/locations/latitude=123&longitude=223&?key=87740aefbf643315535fd137158ffe98"

// $.ajax ({
//     url: secondURL,
//     method: "GET"
// })
//     .then(function(response) {
//        console.log(response)
 
// })

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=richmond",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "cdc0ac54bamshcdd268cd5c832d8p100753jsn8ab4fd9912f8"
// 	}
// }
// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



