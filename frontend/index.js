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

document.getElementsByClassName("submit").addEventListener("click", function(event) {
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({

    })
  })
  .then(response => response.json())
  .then(json => {
    const header = `Hello ${user.username}`
  })
})
