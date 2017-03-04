L.mapbox.accessToken = 'pk.eyJ1IjoibGFycnlzY2hpcm1lciIsImEiOiJjaXp2cnRtZzMwMWRzMzNtbXIwNzhoM3hvIn0.naKjJ_zeLB74jpMKbIBLSQ';

var map = L.mapbox.map('map', 'mapbox.streets').setView([42.346611,-83.040639], 16);


    L.mapbox.featureLayer({
        // this feature is in the GeoJSON format: see geojson.org
        // for the full specification
        type: 'Feature',
        geometry: {
            type: 'Point',
            // coordinates here are in longitude, latitude order because
            // x, y is the standard for GeoJSON and many formats
            coordinates: [
              -83.040639,
              42.346611
            ]
        },
        properties: {
            title: 'Peregrine Espresso',
            description: '1718 14th St NW, Washington, DC',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'cafe'
        }
    }).addTo(map);
