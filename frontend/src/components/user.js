class User {
  constructor(userJSON){
    this.id = userJSON.id;
    this.username = userJSON.username
    this.userBindingsAndEventListeners()
    this.adapter = new UsersAdapter()
  }


  // does this need function in front of it
  // used to cache any DOM elements we need, so we only have to do it once
  userBindingsAndEventListeners() {
    this.newUserForm = document.getElementById("new_user_form");
    // why is it not this.createUser() - with parenthesis
    // hard bind this to the users when we execute createUser(), so when we access this it is the Users class
    this.newUserForm.addEventListener("submit", this.createUser.bind(this));
    this.username = document.getElementById("username");
    this.header = document.getElementById("header");
    this.body = document.querySelector("body");
    this.house = document.querySelector("#house");
    this.main = document.querySelector("main");
    this.text_container = document.getElementById("text_container")
    this.speaker = document.getElementById("speaker")

    // this.start_button = document.createElement("button");
    // this.start_button.addEventListener("click", this.fetchAndLoadRound.bind(this))
  }

  createUser(event) {
    event.preventDefault()
    const value = this.username.value
    // take the above value and make a post request using the adapter

    this.adapter.createUser(value)
    // gets parsed JSON from UsersAdapter createUser()
      .then(user => {
        this.renderUserStartPage(user)
    })
  }

  renderUserStartPage(user) {
    this.speaker.style.display = "block";
    this.newUserForm.style.display = "none"
    this.changeBackground()
    this.instructions(user)
  }

  changeBackground() {
    // use case statement?
    if (this.house.value == "gryffindor") {
      // this.body.className = "house"
      this.body.id = "gryffindor"
    } else if (this.house.value == "slytherin") {
      // this.body.className = "house"
      this.body.id = "slytherin"
    } else if (this.house.value == "hufflepuff") {
      // this.body.className = "house"
      this.body.id = "hufflepuff"
    } else if (this.house.value == "ravenclaw") {
      // this.body.className = "house"
      this.body.id = "ravenclaw"
    }
  }

  instructions(user) {
    this.header.id = "intro"
    const p = document.createElement("p")
    const start_button = document.createElement("button");

    // Header font issues: Vv is Ww, Ww is Xv, Xx is Vx -- need to find a font that can be loaded and doesn't have problems since user input is involved.

    this.header.innerHTML = `*Welcome, ${user.username}!*`
    p.innerHTML = "This game will be played in 7 rounds. You must answer 5 of 7 questions correct in a round to move on to the next round. If you fail to answer enough questions correctly, Voldemort and his followers will prevail. If you are smart enough to get through all 7 rounds, you will vanquish Voldemort and all that he stands for. The Wizarding world is on your shoulders. Good luck."

    start_button.innerHTML = "I solemnly swear that I'm up to no good";
    start_button.id = "start_button"
    start_button.className = "btn btn-light"

    this.text_container.appendChild(p)
    this.text_container.appendChild(start_button)

    const round = new Round(user, 1)
  }

}
