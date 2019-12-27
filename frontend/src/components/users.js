class Users {
  constructor() {
    this.users = []
    // this.username = username
    // this.initAddEventListener()
    this.adapter = new UsersAdapter()
    this.fetchAndLoadUsers()
  }

  // does this need function in front of it

  initAddEventListener() {
    newUserForm = document.getElementById("new_user_form")
    // newUserForm.addEventListener("submit", this.createUser())
    newUserForm.addEventListener("submit", function(event) {
      event.preventDefault
      console.log("user is being created")
    })

  }

  // fetches all users

  fetchAndLoadUsers() {
    this.adapter.getUsers()
      .then(users => {
        users.forEach(user => this.users.push(user))
        console.log(this.users)
      })
      .then(() => {
        this.renderUsers()
      })
  }

  renderUsers() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Hello Jack!"
    document.querySelector("body").appendChild(h1)

  }

  createUser() {

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
