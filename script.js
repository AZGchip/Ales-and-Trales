// Global Variables
var searchbox;
var theMap;
var brew;
var beerArray = [];
var trailArray = [];
var results;
var beerIcon;
var trailIcon;

//Setting default center point on map
theMap = L.map("map-content", {
    center: [37.54, -77.43],
    zoom: 8,
});

// Setting map aesthetics (???)
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(theMap);

//Click event on user input box
$("#user-input").on("click", function (event) {
    event.preventDefault();
    searchbox = $(this).prev().val();
    getLatLon();
    // clearing out input field
    $(this).prev().val("");
});

//Taking user input, Nominatim ajax call will return lat/long and city/state info
function getLatLon() {
    var apiUrl = "https://nominatim.openstreetmap.org/search/" + searchbox + "?format=json&addressdetails=1";
    $.ajax({
        url: apiUrl,
        method: "GET"
    }).then(function (response) {
        results = response;
        //Parameters to be passed into brewery & trail search functions
        let city;
        let state;
        let searchLat;
        let searchLon;
        if (results[0] !== undefined && results[0].address.city !== undefined) {
            city = results[0].address.city.replace(" City", "");
            state = results[0].address.state;
            searchLat = results[0].lat;
            searchLon = results[0].lon;
        }
        else if (results[1] !== undefined && results[1].address.city !== undefined) {
            city = results[1].address.city.replace(" City", "");
            state = results[1].address.state;
            searchLat = results[1].lat;
            searchLon = results[1].lon;
        }
        else {
            // alert("enter valid city")
        }
        // If beer array is not empty, remove each previous icons
        if (beerArray !== []) {
            beerArray.forEach(b => {
                theMap.removeLayer(b)
            });
        }
        //if trail array is not empty remove each previous icon
        if (trailArray !== []) {
            trailArray.forEach(t => {
                theMap.removeLayer(t)
            });
        }
        //set mapview to searched location
        theMap.panTo(new L.LatLng(searchLat, searchLon));
        trailSearch(searchLat, searchLon);
        brewerySearch(city, state);
    });

    //Call to REI hiking trails api
    function trailSearch(searchLat, searchLon) {
        var reiURL = "https://www.hikingproject.com/data/get-trails?lat=" + searchLat + "&lon=" + searchLon + "&maxDistance=20&maxResults=500&key=200708264-a5ce732ab3823333a148cde68ddfa0ce";
        $.ajax({
            url: reiURL,
            method: "GET"
        }).then(function (response) {
            trailIcon = L.icon({
                iconUrl: "assets/hiker-pin-green.png",
                iconSize: [20, 39.7],
                iconAnchor: [10, 39.7],
                popupAnchor: [-9, -39.7]
            });
            for (let i = 0; i < response.trails.length; i++) {
                let marker = L.marker([response.trails[i].latitude, response.trails[i].longitude], { icon: trailIcon }).addTo(theMap);
                marker.bindPopup("Trail: " + response.trails[i].name + "<br>" + "Length: " + response.trails[i].length + "mi.").openPopup();
                trailArray.push(marker);
            }
        });
    };

    //Call to Open Brewery API
    function brewerySearch(city, state) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_city=" + city + "&by_state=" + state,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
                "x-rapidapi-key": "cdc0ac54bamshcdd268cd5c832d8p100753jsn8ab4fd9912f8"
            }
        };
        $.ajax(settings).done(function (response) {
            brew = response;
            beerIcon = L.icon({
                iconUrl: "assets/beer-yellow-map-pin.png",
                iconSize: [20, 39.7],
                iconAnchor: [10, 39.7],
                popupAnchor: [-9, -39.7]
            })
            for (let i = 0; i < response.length; i++) {
                if (response[i].latitude !== null) {
                    let marker = L.marker([response[i].latitude, response[i].longitude], { icon: beerIcon }).addTo(theMap);
                    marker.bindPopup("Brewery: " + response[i].name + "<br>" + "Address: " + response[i].street).openPopup();
                    beerArray.push(marker);
                }
            }
        });
    };

}