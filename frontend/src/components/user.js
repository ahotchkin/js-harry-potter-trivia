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
    this.welcome = document.getElementById("welcome");
    this.body = document.querySelector("body");
    this.house = document.querySelector("#house");
    this.start_button = document.createElement("button");
    // this.start_button.addEventListener("submit", createRound(event))
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
    h2.innerHTML = `Welcome ${this.username.value}!`
    h2.id = "round_header"
    p.innerHTML = "This game will be played in 7 rounds. You must answer 3 of 5 questions correct in a round to move on to the next round. If you fail to answer enough questions correctly, Voldemort and his followers will prevail. If you are smart enough to get through all 7 rounds, you will vanquish Voldemort and all that he stands for. The Wizarding world is on your shoulders. Good luck."
    // Add a button to start the game

    this.start_button.innerHTML = "I solemnly swear that I'm up to no good";
    this.start_button.id = "round_1"

    this.body.appendChild(h2)
    this.body.appendChild(p)
    this.body.appendChild(this.start_button)
    // am I supposed to be creating a "new" round since the rounds are already seeded?
    this.round = new Round()
    this.round.id = 1
  }
}
