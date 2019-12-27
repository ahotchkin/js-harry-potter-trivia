class Users {
  constructor() {
    this.users = []
    // this.username = username
    this.initBindingsAndEventListeners()
    this.adapter = new UsersAdapter()
    this.fetchAndLoadUsers()
  }

  // does this need function in front of it

  initBindingsAndEventListeners() {
    this.newUserForm = document.getElementById("new_user_form")
    // why is it not this.createUser() - with parenthesis
    this.newUserForm.addEventListener("submit", this.createUser.bind(this))
    this.username = document.getElementById("username")

  }


  createUser(event) {
    event.preventDefault()
    const username_value = this.username.value

    // take the above value and make a post request using the adapter

    this.adapter.createUser(value)



  //   const h1 = document.createElement("h1")
  //
  //   new User{
  //     username: username
  //   }

  }

  // fetches all users

  fetchAndLoadUsers() {
    this.adapter.getUsers()
      .then(users => {
        users.forEach(user => this.users.push(new User(user)))
        // console.log(this.users)
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
