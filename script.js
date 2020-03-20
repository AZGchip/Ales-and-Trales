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

$.ajax(settings).done(function (response) {
	console.log(response);
});