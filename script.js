
var map;
var service;
var infowindow;

function loadPage() {
  eventListner();
  initAutocomplete();
  initMap();
}

function initAutocomplete () {
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(40.712775,-74.005973),
    new google.maps.LatLng(41, 75));

  var input = document.getElementById('searchTextField');
  var options = {
    bounds: defaultBounds,
    types: ['establishment']
  };

  autocomplete = new google.maps.places.Autocomplete(input, options);

}

function initMap(searchTerm) {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712, lng: -74.005},
    zoom: 8
    });
}

function eventListner() {

  $("#js-search-submit").on('click', function(event)  {
  console.log('Clicked!');
  event.preventDefault();
  console.log('Event prevented!');
  let userSearchTerm = $('#searchTextField').val();
  updateMap(userSearchTerm);
  });
}

function updateMap(searchTerm) {
  console.log(`I passed(${searchTerm}) to updateMap`);
  console.log(searchTerm);
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712, lng: -74.005},
    zoom: 8
    });

  var marker = new google.maps.Marker({
   position: searchTerm,
   map: map,
   title: 'Hello World!'
});
}

$(loadPage);
