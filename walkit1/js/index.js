mapboxgl.accessToken = 'pk.eyJ1IjoibGFycnlzY2hpcm1lciIsImEiOiJjaXp2cnRtZzMwMWRzMzNtbXIwNzhoM3hvIn0.naKjJ_zeLB74jpMKbIBLSQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-83.040639, 42.346611], // starting position
    zoom: 13 // starting zoom
});

var el = document.createElement('div');
el.className = 'marker';
el.style.width = '10px';
el.style.height = '10px';

var marker = new mapboxgl.Marker(el)
  .setLngLat([-83.040639, 42.346611])
  .addTo(map);