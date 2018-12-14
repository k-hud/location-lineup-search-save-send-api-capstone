
var map;
var service;
var infowindow;
var marker;
var place;

const savedPlaces = [];

function loadPage() {
  loadList();
  initMap();
}

function loadList() {
  console.log("I was loaded.");
  $('#js-clear-list').on('click', event => {
    
    $('.js-saved-list').empty();
  });
}

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
      console.log(place);
      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name
      });

      var locationContent = `
      <h1 class='js-place-headline'>${place.name}</h1>
      <div class="js-place-address"><strong>Address:</strong> ${place.formatted_address}</div>

      <form>Save location: <input id="save-trigger" type="button" name="save" value="save"></form>
      `;

      marker.addListener('click', function() {
        var infowindow = new google.maps.InfoWindow({
          content: locationContent
          });
        $('body').on('click', '#save-trigger', event => {
          saveLocation(locationContent);
          locationContent = ``;
        });

        infowindow.open(map, marker);
        });

      map.setCenter(place.geometry.location);
      map.setZoom(17);
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      return;

    });

  };

function saveLocation(location) {
  console.log(`I passed to Saving and brought with me ${location}.`);
  $('.js-saved-list').append(location);
  console.log(`Did we do the thing?.`);
}

$(loadPage);
