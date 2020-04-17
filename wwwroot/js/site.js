var mymap = L.map('mapid').setView([21.006966, 105.802499], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.Control.geocoder().addTo(mymap);

L.marker([21.006966, 105.802499]).addTo(mymap).bindPopup('IGP Viet Nam').openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup.setLatLng(e.latlng)
         .setContent("You clicked the map at " + e.latlng.toString())
         .openOn(mymap);
}

mymap.on('click', onMapClick);
