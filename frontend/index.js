const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const HOUSES_URL = `${BASE_URL}/houses`

// document.addEventListener("DOMContentLoaded", function(event) {
//   fetchHouses();
// })
//
// function fetchHouses() {
//   return fetch(HOUSES_URL)
//     .then(response => response.json())
//     .then(json => renderHouses(json));
// }
//
// function renderHouses(houses) {
//
// }

document.getElementById("username_form").addEventListener("submit", function(event) {
  event.preventDefault()
  addUser()
})

function addUser() {
  const h1 = document.createElement("h1")

  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      :username => username
    })
  })
  .then(response => response.json())
  .then(json => {
    h1.innerHTML = `Hello Joe`
    // const h1 = renderUser(json.user)
    document.querySelector("body").appendChild(h1)
  })
  username_form.style.display = "none"
}

// function renderUser(user) {
//   const h1 = document.createElement("h1")
//   h1.innerHTML = `Hello ${user.username}`
//   return h1
// }


// function addPokemon(trainer_id) {
//   const ul = document.querySelector(`[data-id="${trainer_id}"] ul`)
//
//   if (ul.childElementCount < 6) {
//     fetch(POKEMONS_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         trainer_id
//       })
//     })
//     .then(response => response.json())
//     .then(json => {
//       const li = renderPokemon(json.pokemon)
//       ul.appendChild(li)
//     })
//   }
// }

// function renderPokemon(pokemon) {
//   const li = document.createElement("li");
//
//   const releaseBtn = document.createElement("button");
//   releaseBtn.className = "release";
//   releaseBtn.innerHTML = "Release";
//   releaseBtn.setAttribute("data-pokemon-id", `${pokemon.id}`);
//   releaseBtn.addEventListener("click", function(event) {
//     releasePokemon(pokemon)
//   })
//
//   li.innerHTML = `${pokemon.nickname} (${pokemon.species})`;
//   li.append(releaseBtn);
//   return li;
// }

//
// addBtn.addEventListener('click', () => {
//   // hide & seek with the form
//   addToy = !addToy
//   if (addToy) {
//     toyForm.style.display = 'block'
//     toyForm.addEventListener("submit", function(event) {
//       event.preventDefault();
//       fillForm();
//     })
//   } else {
//     toyForm.style.display = 'none'
//   }
// })
//
// function fillForm() {
//   let toyName = document.getElementsByClassName("input-text")[0];
//   let imageUrl = document.getElementsByClassName("input-text")[1];
//   newToy(toyName.value, imageUrl.value);
//   toyName.value = "";
//   imageUrl.value = "";
//   toyForm.style.display = "none";
// }
//
// function newToy(toyName, imageUrl) {
//   return fetch(toysUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       name: toyName,
//       image: imageUrl,
//       likes: 0
//     })
//   })
//   .then(response => response.json())
//   .then(json => renderToy(json));
// }


// document.getElementById("test").addEventListener("click", function(event){
//   event.preventDefault()
//   const h1 = document.createElement("h1")
//   h1.innerHTML = "Adding this header to the page"
//   document.querySelector("body").appendChild(h1)
// });
