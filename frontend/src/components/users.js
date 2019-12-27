class Users {
  constructor() {
    this.users = []
    // this.username = username
    this.initBindingsAndEventListeners()
    this.adapter = new UsersAdapter()
    // this.fetchAndLoadUsers()
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
    const value = this.username.value

    // take the above value and make a post request using the adapter

    this.adapter.createUser(value)
    // gets parsed JSON from UsersAdapter createUser()
    .then(user => {
      // creates the new users and pushes the user into the users array that exists. not sure this is actually needed
      this.users.push(new User(user))
      this.renderUserStartPage()
    })


  //   const h1 = document.createElement("h1")
  //


  }

  // fetches all users

  // fetchAndLoadUsers() {
  //   this.adapter.getUsers()
  //     .then(users => {
  //       users.forEach(user => this.users.push(new User(user)))
  //       // console.log(this.users)
  //     })
  //     .then(() => {
  //       this.renderUsers()
  //     })
  // }

  // renderUsers() {
  //   const h1 = document.createElement("h1");
  //   h1.innerHTML = "Hello Jack!"
  //   document.querySelector("body").appendChild(h1)
  //
  // }

  renderUserStartPage() {
    new_user_form.style.display = "none"
    this.changeBackground()
  }

  changeBackground() {
    const house = document.querySelector("#house")
    if (house.value == "gryffindor") {
      document.querySelector("body").style.background = "#7F0909"
    } else if (house.value == "slytherin") {
      document.querySelector("body").style.background = "#0D6217"
    } else if (house.value == "hufflepuff") {
      document.querySelector("body").style.background = "#EEE117"
    } else if (house.value == "ravenclaw") {
      document.querySelector("body").style.background = "#000A90"
    }
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
