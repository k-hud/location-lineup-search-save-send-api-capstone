
const baseGoogleApiUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';

function eventListner() {

  $("#js-search-submit").on('click', function(event)  {
  console.log('Clicked!');
  event.preventDefault();
  console.log('Event prevented!');
  let userSearchTerm = $('#js-search-input').val();
  getUserInput(userSearchTerm);
  });
}

function getUserInput(searchTerm) {
  structureQuery(searchTerm);
}

function structureQuery(searchTerm) {
  const queryData = {
    key: 'AIzaSyDlfYjDFJsOVVlphZZSPkxN0nD50DgqK_k',
    fields: "photos,formatted_address,name,rating,opening_hours,geometry",
    inputtype: 'textquery',
    input: ''
  };
  queryData.input = searchTerm;
  const queryUrl = Object.keys(queryData).map(key =>
    `${encodeURIComponent(key)}=${encodeURIComponent(queryData[key])}`);
    let formattedParams = queryUrl.join('&').replace(/%2C/g,",");
    let url = baseGoogleApiUrl + formattedParams;
    callAPI(url);
}

function callAPI(url) {
  fetch(url)
  .then(response => response.json())
  .then(responseJson => console.log(responseJson))
  .catch(error => alert(`Oops. You got a ${error}`));
}



$(eventListner);
