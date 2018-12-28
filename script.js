var map;
var service;
var infowindow;
var markers = [];
var place;

const savedPlaces = [];

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

$(loadPage);
