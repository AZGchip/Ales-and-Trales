var searchbox;
let searchLat;
let searchLon;
var zip;
var theMap;
var brew;
theMap = L.map("map-content",{
    center: [37.54, -77.43],
    zoom: 8, })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(theMap);

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
            // console.log(response);
            // console.log(response[0].display_name);
            // console.log(response[0].display_name[3]);
            // console.log(searchLon);
            // console.log(searchLat);
            theMap.panTo(new L.LatLng(searchLat,searchLon));
            getZip()
            function getZip() { 
                var str = results[0].display_name; 
                var matches = str.match(/(\d{5})/); 
                  
                if (matches) { 
                    zip = matches[0]; 
                    console.log(zip)
                } 
            } 
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
                console.log(response);
            });
      
        function populateData(response) {
            var trailIcon = L.icon({
                iconUrl: 'hiking.png',
            })
            for(let i = 0;i < response.trails.length;i++){
                var marker = L.marker([response.trails[i].latitude,response.trails[i].longitude], {icon: trailIcon}).addTo(theMap);
                marker.bindPopup("Trail: " + response.trails[i].name + " Length: " + response.trails[i].length + "mi.").openPopup();
            }
        }
    }

    function brewerySearch() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=" + zip,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
                "x-rapidapi-key": "cdc0ac54bamshcdd268cd5c832d8p100753jsn8ab4fd9912f8"
            }
        }
        $.ajax(settings).done(function (response) {
            brew = response
            console.log(response)
            var beerIcon = L.icon({
                iconUrl: 'beer-icon.png',
            })
            for(let i = 0;i < response.length;i++){
                if(response[i].latitude !== null){
                var marker = L.marker([response[i].latitude,response[i].longitude], {icon: beerIcon}).addTo(theMap); 
                marker.bindPopup("Brewery: " + response[i].name + " Address: " + response[i].street).openPopup();
                }
            }
        });
    }
}
