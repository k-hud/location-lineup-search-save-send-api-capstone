var map;
var service;
var infowindow;
var markers = [];
var place;

<<<<<<< HEAD
const savedPlaces = [];
=======
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
>>>>>>> parent of 17fe506... Enabled auto complete, passing selected location, and adding a marker

function loadPage() {
  loadList();
  initMap();
  console.log(`Function loadPage() was loaded.`);
}

function loadList() {
  console.log(`Function loadList() was loaded.`);
  $("#js-clear-list").on("click", event => {
    $(".js-saved-list").empty();
    console.log(`Clear list ran.`);
  });
}


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.712, lng: -74.005 },
    zoom: 8
  });

  // Set listener to the map for if the bounds change.

  var input = document.getElementById("searchTextField");
  var options = {
    bounds: defaultBounds,
    types: ["establishment"]
  };

  var searchBox = new google.maps.places.SearchBox(input, options);

  searchBox.addListener("place_changed", function() {
    console.log(`Listener fired`);
  });

  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];

  var icon = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };

  var places = searchBox.getPlaces();
  console.log(`Did we get anything? :: ${places}`);
  marker.push(
    new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      icon: icon,
      title: place.name
    })
  );

  var locationContent = `
      <h1 class='js-place-headline'>${place.name}</h1>
      <div class="js-place-address"><strong>Address:</strong>
      ${place.formatted_address}</div>

      <form>Save location: <input id="save-trigger" type="button" name="save" value="save"></form>
      `;


  marker.addListener("click", function() {
    var infowindow = new google.maps.InfoWindow({
      content: locationContent
    });
<<<<<<< HEAD
    $("body").on("click", "#save-trigger", event => {
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
}

function saveLocation(location) {
  console.log(`I passed to Saving and brought with me ${location}.`);
  $(".js-saved-list").append(location);
  console.log(`Did we do the thing?.`);
}
      marker.addListener('click', function() {
        var infowindow = new google.maps.InfoWindow({
          content: locationContent
          });

        infowindow.open(map, marker);

        $('#save-trigger').click(function () {
          console.log("I DID run the listner.");
          alert("I was clicked!");
        });
      });


      map.setCenter(place.geometry.location);
      map.setZoom(17);
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      return;
    });

};

$(initMap);
=======
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
>>>>>>> parent of 17fe506... Enabled auto complete, passing selected location, and adding a marker
