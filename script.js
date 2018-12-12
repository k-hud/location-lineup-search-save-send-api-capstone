
var map;
var service;
var infowindow;

function loadPage() {
  eventListner();
  initMap();
}

function eventListner() {

  $("#js-search-submit").on('click', function(event)  {
  console.log('Clicked!');
  event.preventDefault();
  console.log('Event prevented!');
  let userSearchTerm = $('#js-search-input').val();
  initMap(userSearchTerm);
  // getUserInput(userSearchTerm);
  });
}

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
      });

}

$(loadPage);
