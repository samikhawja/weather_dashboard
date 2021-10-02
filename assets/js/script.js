var searchInputEl = document.querySelector('#search');
var maincardContainerEl = document.querySelector('#maincard');
var searchTerm = document.querySelector('#date');
var today = moment();

$("#date").text(today.format("MMM Do, YYYY"));


function myFunction() {
  window.history.back();
}
function myFunction() {
    window.history.go(-2);
}
  function myFunction() {
    window.history.go(-3);
}
  function myFunction() {
    window.history.go(-4);
}
  function myFunction() {
    window.history.go(-5);
}
  function myFunction() {
    window.history.go(-6);
}
  function myFunction() {
    window.history.go(-7);
}

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var location = searchInputEl.value.trim();
  
    if (location) {
      geocodingAPI(location);
  
      maincardContainerEl.textContent = '';
      searchInputEl.value = '';
    } else {
      alert('Please enter a location');
    }
    console.log(location)
};
  
var buttonClickHandler = function (event) {
    var language = event.target.getAttribute('data-language');
  
    if (language) {
      getFeaturedRepos(language);
  
      maincardContainerEl.textContent = '';
    }
};

var geocodingAPI = function() {
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid=01ba57fd295b828746a188dea79c4db5'
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };