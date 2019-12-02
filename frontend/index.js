const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const HOUSES_URL = `${BASE_URL}/houses`

document.addEventListener("DOMContentLoaded", function(event) {
  fetchHouses();
})

function fetchHouses() {
  return fetch(HOUSES_URL)
    .then(response => response.json())
    .then(json => renderHouses(json));
}

function renderHouses(houses) {
  
}
