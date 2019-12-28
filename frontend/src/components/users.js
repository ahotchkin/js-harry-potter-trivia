class Users {
  constructor() {
    this.users = []
    // this.username = username
    this.initBindingsAndEventListeners()
    this.adapter = new UsersAdapter()
    // this.fetchAndLoadUsers()
  }

  // does this need function in front of it
  // used to cache any DOM elements we need, so we only have to do it once
  initBindingsAndEventListeners() {
    this.newUserForm = document.getElementById("new_user_form");
    // why is it not this.createUser() - with parenthesis
    // hard bind this to the users when we execute createUser(), so when we access this it is the Users class
    this.newUserForm.addEventListener("submit", this.createUser.bind(this));
    this.username = document.getElementById("username");
    this.welcome = document.getElementById("welcome");
    this.body = document.querySelector("body");
  }


  createUser(event) {
    event.preventDefault()
    const value = this.username.value
    // need to get the value of the newUserForm

    // take the above value and make a post request using the adapter

    this.adapter.createUser(value)
    // gets parsed JSON from UsersAdapter createUser()
      .then(user => {
        // creates the new user and pushes the user into the users array that exists. not sure this is actually needed
        this.users.push(new User(user))
        this.renderUserStartPage()
        // this.renderUsers()
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
  //       // console.log(this.users[this.users.length - 1])
  //     })
  // }

  // renderUsers() {
  //   const usersContainer = document.getElementById("users_container")
  //   // user renderUser method from user.js, renderUser() determines what the user info should look like from the user class
  //   usersContainer.innerHTML = this.users.map(user => user.renderUser()).join("")
  //
  //   // document.querySelector("body").appendChild(usersArray)
  //
  // }

  renderUserStartPage() {
    this.newUserForm.style.display = "none"
    this.changeBackground()
    this.instructions()

  }

  changeBackground() {
    const house = document.querySelector("#house")
    if (house.value == "gryffindor") {
      // document.querySelector("body").style.background = "#7F0909"
      // document.querySelector("body").className = "gryffindor"
      this.body.className = "house"
      this.body.id = "gryffindor"
    } else if (house.value == "slytherin") {
      // document.querySelector("body").className = "slytherin"
      this.body.className = "house"
      this.body.id = "slytherin"
    } else if (house.value == "hufflepuff") {
      // document.querySelector("body").className = "hufflepuff"
      this.body.className = "house"
      this.body.id = "hufflepuff"
    } else if (house.value == "ravenclaw") {
      // document.querySelector("body").className = "ravenclaw"
      this.body.className = "house"
      this.body.id = "ravenclaw"
    }
  }

  instructions() {
    this.welcome.style.display ="none"
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    h2.innerHTML = `Welcome ${this.username.value}`
    document.querySelector("body").appendChild(h2)
  }
}
