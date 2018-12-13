
var map;
var service;
var infowindow;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712, lng: -74.005},
    zoom: 8
    });

    var input = document.getElementById('searchTextField');
    var options = {
      // bounds: defaultBounds,
      types: ['establishment']
    };

    var place;
    var autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', function () {

      var place = autocomplete.getPlace();
      console.log('I searched and colleted:');
      console.log(place);
      console.log(`Location is: ${place.geometry.location}`);
      debugger;
      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name
      });
      map.setCenter(place.geometry.location);
      map.setZoom(17);
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      return;
    });



}

// function eventListner() {
//
//   $("#js-search-submit").on('click', function(event)  {
//   console.log('Clicked!');
//   event.preventDefault();
//   console.log('Event prevented!');
//   let userSearchTerm = $('#searchTextField').val();
//   updateMap(userSearchTerm);
//   });
// }

$(initMap);
