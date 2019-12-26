class User {
  constructor() {
    this.users = []
    // this.username = username
    // this.initAddEventListener()
    this.adapter = new UsersAdapter()
    this.fetchAndLoadUser()
  }

  // does this need function in front of it

  initAddEventListener() {
    newUserForm = document.getElementById("new_user_form")
    newUserForm.addEventListener("submit", this.createUser())
  }

  // fetches all users

  fetchAndLoadUser() {
    this.adapter.getUsers().then(users => {
      console.log(users)
    })
  }


  createUser(username) {
    console.log("user is being created")
  //   const h1 = document.createElement("h1")
  //
  //   new User{
  //     username: username
  //   }
  //   return fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(json =>
  //     h1.innerHTML = `Hello ${json.user.username}`
  //     // const h1 = renderUser(json.user)
  //     document.querySelector("body").appendChild(h1))
  // }
  }


// fetch(USERS_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     // username: username
//   })
// })
// .then(response => response.json())
// .then(json => {
//   h1.innerHTML = `Hello ${json.user.username}`
//   // const h1 = renderUser(json.user)
//   document.querySelector("body").appendChild(h1)
// })
}
