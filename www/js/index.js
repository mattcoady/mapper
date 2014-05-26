FastClick.attach(document.body);
navigator.geolocation.getCurrentPosition(googleMap, displayError);

function googleMap(position) {

  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  $('#lon').html(lon);
  $('#lat').html(lat);
  var mapOptions = {
    center: new google.maps.LatLng(lat,lon),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map: map,
    title: "This is a marker!",
    draggable:true,
    animation: google.maps.Animation.DROP
  });
  google.maps.event.addListener(marker, 'dragend', function() { markerMoved(marker); } );
}

function markerMoved(marker){
  console.log(marker);
  $('#lon').html(marker.position.A);
  $('#lat').html(marker.position.k);
}

function displayError(error) {
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}