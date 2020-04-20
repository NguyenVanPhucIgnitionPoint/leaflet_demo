var mymap = L.map('mapid').setView([21.006949, 105.802515], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options: {
        //shadowUrl: '/images/leaf-shadow.png',
        iconSize: [48, 55],
        //shadowSize: [50, 64],
        iconAnchor: [22, 74],
        //shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

var greenIcon = new LeafIcon({ iconUrl: '/images/building_green.png' }),
    redIcon = new LeafIcon({ iconUrl: '/images/building_green.png' }),
    orangeIcon = new LeafIcon({ iconUrl: '/images/building_green.png' });

L.marker([21.006949, 105.802515], {icon: greenIcon}).addTo(mymap).bindPopup('IGP Viet Nam - 29T2').openPopup();
L.marker([21.007044, 105.800922], { icon: redIcon }).addTo(mymap).bindPopup('Toa nha 25T1');
L.marker([21.00707, 105.804309], { icon: orangeIcon }).addTo(mymap).bindPopup('Toa nha 17T8');

L.Control.geocoder({ placeholder: "Search..." }).addTo(mymap);

//var popup = L.popup();

//function onMapClick(e) {
//    popup.setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
//}

//mymap.on('click', onMapClick);
