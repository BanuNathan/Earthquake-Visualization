

// var myMap = L.map("map", {
//   center: [15.5994, -28.6731],
//   zoom: 2
// });

// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
// var earthQuakeMarkers = [];
// d3.json(url, function(response) {


//   // data markers should reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. 
//   // Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.
  
//   for (var i = 0; i < response.features.length; i++) {
//     var earthQuake = response.features[i];
    
//       var color = "";
//     if (response.features[i].properties.mag > 7 ){
//       newradius = response.features[i].properties.mag * 120000;
//     }
//     else if (response.features[i].properties.mag > 6) { 
//       newradius = response.features[i].properties.mag * 100000;
//     }
//     else if (response.features[i].properties.mag > 5) {
//      newradius = response.features[i].properties.mag * 80000;
//     }
//     else if (response.features[i].properties.mag > 4) {
//       newradius = response.features[i].properties.mag * 50000;
//     } else {
//       newradius = response.features[i].properties.mag * 20000;
//     }

//     if (earthQuake.geometry.coordinates[2] > 90 ){
//       color = "#98ee00";
//     } else if (earthQuake.geometry.coordinates[2] > 70){
//       color = "#d4ee00";
//     } else if (earthQuake.geometry.coordinates[2] > 50){
//       color = "#eecc00";
//     } else if(earthQuake.geometry.coordinates[2] > 30){
//       color = "#ee9c00";
//     } else if ((earthQuake.geometry.coordinates[2] > 10)){
//       color = "#d4ee00"
//     }else{
//       color = "#98ee00";
//     }

//     L.circle([earthQuake.geometry.coordinates[1], earthQuake.geometry.coordinates[0]], {
//       opacity:1,
//       fillOpacity: 1,
//       fillColor: color,
//       radius: newradius ,
//       stroke: true,
//       weight: 0.2
//     }).bindPopup("<h3>" + earthQuake.properties.place + "<h3><h3>Magnitude: " + earthQuake.properties.mag + "</h3>"
//     +"<h3><h3>depth: " + earthQuake.geometry.coordinates[2] + "</h3>").addTo(myMap)
//   };

//   // Here we create a legend control object.
//   var legend = L.control({
//     position: "bottomright"
//   });

//   // Then add all the details for the legend
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");

//     var grades = [-10, 10, 30, 50, 70, 90];
//     var colors = [
//       "#98ee00",
//       "#d4ee00",
//       "#eecc00",
//       "#ee9c00",
//       "#ea822c",
//       "#ea2c2c"
//     ];

//     // Looping through our intervals to generate a label with a colored square for each interval.
//     for (var i = 0; i < grades.length; i++) {
//       div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
//       + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
//     }
//     return div;
//   };

//   // Finally, we our legend to the map.
//   legend.addTo(myMap);
 
// });








//var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
//var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
var earthQuakeMarkers = [];
var earthQuakeLayer = [];
d3.json(url, function(response) {
  for (var i = 0; i < response.features.length; i++) {
    var earthQuake = response.features[i];
    
    var color = "";
    if (response.features[i].properties.mag > 7 ){
      newradius = response.features[i].properties.mag * 120000;
    }
    else if (response.features[i].properties.mag > 6) { 
      newradius = response.features[i].properties.mag * 100000;
    }
    else if (response.features[i].properties.mag > 5) {
     newradius = response.features[i].properties.mag * 80000;
    }
    else if (response.features[i].properties.mag > 4) {
      newradius = response.features[i].properties.mag * 50000;
    } else {
      newradius = response.features[i].properties.mag * 20000;
    }

    if (earthQuake.geometry.coordinates[2] > 90 ){
      color = "#98ee00";
    } else if (earthQuake.geometry.coordinates[2] > 70){
      color = "#d4ee00";
    } else if (earthQuake.geometry.coordinates[2] > 50){
      color = "#eecc00";
    } else if(earthQuake.geometry.coordinates[2] > 30){
      color = "#ee9c00";
    } else if ((earthQuake.geometry.coordinates[2] > 10)){
      color = "#d4ee00";
    }else{
      color = "#98ee00";
    }

   var mCircle =  L.circle([earthQuake.geometry.coordinates[1], earthQuake.geometry.coordinates[0]], {
      opacity:1,
      fillOpacity: 1,
      fillColor: color,
      radius: newradius ,
      stroke: true,
      weight: 0.2
    })
   // earthQuakeMarkers.push(mCircle).bindPopup("<h1>" + earthQuake.properties.place + "</h1> <hr> <h3>Magnitude: " +
   //  earthQuake.properties.mag + "</h3> <hr> <h3> depth:" + earthQuake.geometry.coordinates[2] + "</h3>")
   
     earthQuakeMarkers.push(mCircle.bindPopup("<h1>" + earthQuake.properties.place + "</h1> <hr> <h3>Magnitude: " +
     earthQuake.properties.mag + "</h3> <hr> <h3> depth:" + earthQuake.geometry.coordinates[2] + "</h3>"))

   //  earthQuakeMarkers.push(mCircle.bindPopup(all the code you put inside your pop function))
    //.bindPopup("<h3>" + earthQuake.properties.place + "<h3><h3>Magnitude: " + earthQuake.properties.mag + "</h3>"
     //    +"<h3><h3>depth: " + earthQuake.geometry.coordinates[2] + "</h3>")
   
    };    
   
});
  
earthQuakeLayer = L.layerGroup(earthQuakeMarkers);

//console.log(earthQuakeLayer)
console.log(earthQuakeMarkers)


var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

var street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Light: light,
  Dark: dark,
  Street : street,
};

// Overlays that may be toggled on or off
var overlayMaps = {
  EarthQuake: earthQuakeLayer,
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [13.0827, 80.2707],
  zoom: 2,
  layers: [street, earthQuakeLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

  var legend = L.control({
    position: "bottomright"
  });

  // Then add all the details for the legend
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");

    var grades = [-10, 10, 30, 50, 70, 90];
    var colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"
    ];

    // Looping through our intervals to generate a label with a colored square for each interval.
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
      + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // Finally, we our legend to the map.
  legend.addTo(myMap);

