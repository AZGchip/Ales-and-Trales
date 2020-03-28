# TRALES & ALES

*Our goal is to connect you with the trails and breweries in your desired location.*

A web application intergrating multiple server-side APIs that takes user's search input to populate pins for both trails and breweries on an interactive map.

https://emijoha.github.io/Ales-and-Trales/

## User Story

After a long day out on the trails, you want to find your nearest local brewery and gather with friends over a frosty cold brew. We have created this app to help you easily plan your future outdoor adventures.

```
AS An outdoors- and beer-enthusiast
I WANT to find trails and breweries
FOR a location of my choosing
SO that I can conveniently plan an enjoyable outing
```

## Technologies

### Libraries

- jQuery
- Leaflet
- Materialize

### APIs

- Nominatim for OpenStreetMap
- REI's Hiking Project Data API
- Open Brewery DB

## Functionality

```
GIVEN a map with a search input
WHEN I hover over the input field
THEN a tooltip message appears with example search 
WHEN I search for a city and state
THEN I am presented with pins for trails and breweries in that area
WHEN I click on a trail pin
THEN I am presented with the trail name and length in miles
WHEN I click on a brewery pin
THEN I am presented with the brewery name and address
WHEN I scroll or drag the map
THEN the map moves accordingly
WHEN I type a new city and state in the search field
THEN the new location is centered on the map
AND new trails and breweriers are populated
WHENEVER a search is submitted
THEN the search field is cleared
SO that I can easily search the next destination
```
## Future Development 

### API Improvements

**A More Complete Brewery API**

Open Brewery DB is a great resource for accessing information on American breweries. However, a significant amount of breweries have no longitude and latitude values, which makes them unrenderable on our map under our current working code. There are other brewery API alternatives, both free and paid, but there is also the option of becoming contributers to Open Brewery's API and submitting the missing information.

**Adding Winery, Distillery, and Other Establishments**

The possibilites for future API expansion are limitless. Obvious additions are a winery API, distillery API, cidery API, and bar and pub API. As more search options are added, user will have the option to include as many or as little in their searches, depending on what they are in the mood while planning their trips.

### Upcoming Functionality

**Previews**

When clicking a trail or brewery pin, a second click (double click) will generate an area for showcasing an image and additional information for that trail or brewery. User can exit and minimize the preview area by clicking outside of it.

**Inter-Connectivity**

As this app is a planning tool, it would be beneficial to have options for connecting with personal planners and calendars on user's devices, as well as the ability to text or email locations to friends' devices all from within the app. 

As an app that supports physical activity, it would also be convenient to link it with users' health and fitness apps. Trail information (like length, difficulty, ascent/descent) can be sent to outside apps which can then use it to generate accurate exercise logs.

### Global Expansion

This app is optimized for searches within the United States of America. With additional API's and research, it can extend beyond the current national limits and render accurate trail and brewery data for other countries and world regions.

## Creators

- [Andrew Zinski](https://github.com/AZGchip "Visit Andrew's GitHub")
- [Emilia Josefina Hartline](https://github.com/emijoha "Visit Emilia's GitHub")
- [Daniel Abell](https://github.com/dmabell693 "Visit Daniel's GitHub")
- [Paul Mikel Houser](https://github.com/paul-houser3333 "Visit Mike's GitHub")


