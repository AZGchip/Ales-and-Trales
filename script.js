//var searchbox is what would be typed into the search box
var searchbox = "richmond, va"
//api value 
var apiUrl =  " https://nominatim.openstreetmap.org/search/"+ searchbox +"?format=json"

var results
function getLatLon(){
    $.ajax({
        url: apiUrl,
        method: "GET"
    })
        .then(function (response) {
results = response;
let searchLat = results[0].lat
let searchlon = results[0].lon
        });
}