const myMap = L.map("map").setView([22.9074872, 79.07306671], 5);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by jewells❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);

// const CLayer = L.circle([22.9074872, 79.07306671], {
//   radius: 200000,
//   color: "coral",
//   fillColor: "green",
//   fillOpacity: 0.5,
// });

const CLayer = L.circle([22.9074872, 79.07306671], {
  radius: 20000,
  color: "coral",
});

CLayer.addTo(myMap);

const bounds = [
  [54.559322, -5.767822],
  [56.1210604, -3.02124],
];
const rectangle = L.rectangle(bounds);
rectangle.addTo(myMap);

var bTriangleCoors = [
  [25.774, -80.19],
  [18.466, -66.118],
  [32.321, -64.757],
];
const polygon = L.polygon(bTriangleCoors);
polygon.addTo(myMap);

const latlngs = [
  [45.51, -122.68],
  [37.77, -122.43],
  [34.04, -118.2],
];
const polyline = L.polyline(latlngs, { color: "red" });
polyline.addTo(myMap);

// const cMarker = L.circleMarker([18.920675417289807, 72.82952788802635], {
//   radius: 40,
//   color: "coral",
// });
// cMarker.addTo(myMap);

const icon = L.icon({
  iconUrl: "./marker.png",
  iconSize: [60, 80],
});
const marker = L.marker([18.920675417289807, 72.82952788802635], { icon });
marker.bindPopup("<h2>Marker Outlet</h2>");
marker.addTo(myMap);

const marker2 = L.marker([28.539914829877652, 77.27116736919079], { icon });
marker2.bindPopup("<h2>Marker2 Outlet</h2>");
marker2.addTo(myMap);
