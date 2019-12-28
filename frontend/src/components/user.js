class User {
  constructor(userJSON){
    this.id = userJSON.id;
    this.username = userJSON.username
    this.initBindingsAndEventListeners()
    this.adapter = new UsersAdapter()
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
    this.house = document.querySelector("#house");
  }

  createUser(event) {
    event.preventDefault()
    const value = this.username.value

    // take the above value and make a post request using the adapter

    this.adapter.createUser(value)
    // gets parsed JSON from UsersAdapter createUser()
      .then(user => {
        // creates the new user and pushes the user into the users array that exists. not sure this is actually needed
        this.renderUserStartPage()
    })
  }

  renderUserStartPage() {
    this.newUserForm.style.display = "none"
    this.changeBackground()
    this.instructions()
  }

  changeBackground() {
    // use case statement?
    if (this.house.value == "gryffindor") {
      this.body.className = "house"
      this.body.id = "gryffindor"
    } else if (this.house.value == "slytherin") {
      this.body.className = "house"
      this.body.id = "slytherin"
    } else if (this.house.value == "hufflepuff") {
      this.body.className = "house"
      this.body.id = "hufflepuff"
    } else if (this.house.value == "ravenclaw") {
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

  renderUser() {
    return `<li>${this.username}</li>`
  }
}
