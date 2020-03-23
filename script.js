var searchbox;
let searchLat;
let searchLon;

$("#user-input").on("click", function(event) {
    event.preventDefault();
    searchbox = $(this).prev().val();
    getLatLon();
});

function getLatLon(){
    //api value 
    var apiUrl =  "https://nominatim.openstreetmap.org/search/"+ searchbox + "?format=json";
    var results;
    $.ajax({
        url: apiUrl,
        method: "GET"
    })
        .then(function(response) {
            results = response;
            searchLat = results[0].lat;
            searchLon = results[0].lon;
            console.log(response);
            console.log(response[0].display_name);
            console.log(response[0].display_name[3]);
            console.log(searchLon);
            console.log(searchLat);
            trailSearch();
            brewerySearch();
        });

    function trailSearch() { 
        var reiURL = "https://www.hikingproject.com/data/get-trails?lat=" + searchLat + "&lon=" + searchLon + "&maxDistance=100&key=200708264-a5ce732ab3823333a148cde68ddfa0ce"

        $.ajax ({
            url: reiURL,
            method: "GET"
        })
            .then(function(response) {
                populateData(response);
            });

        function populateData(response) {
            console.log(response);
        }
    }

    function brewerySearch() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=" + searchbox,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
                "x-rapidapi-key": "cdc0ac54bamshcdd268cd5c832d8p100753jsn8ab4fd9912f8"
            }
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
}