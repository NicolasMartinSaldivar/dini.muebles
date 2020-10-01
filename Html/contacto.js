function iniciarMap() {
  var coord = { lat: -34.6167844, lng: -58.5478812 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}
