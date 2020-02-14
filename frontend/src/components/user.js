class User {
  constructor(userJSON){
    this.id = userJSON.id;
    this.username = userJSON.username
    this.adapter = new UsersAdapter()
    this.userBindingsAndEventListeners()
  }

  userBindingsAndEventListeners() {
    // hard bind this to the user when createUser() is executed, so when we access this it is the User class
    DOMElements.newUserForm.addEventListener("submit", this.createUser.bind(this));
  }

  createUser(event) {
    event.preventDefault()
    const value = DOMElements.username.value
    // take the above value and make a post request using the adapter

    this.adapter.createUser(value)
    // gets parsed JSON from UsersAdapter createUser()
      .then(user => {
        this.renderUserStartPage(user)
    })
  }

  renderUserStartPage(user) {
    DOMElements.speaker.style.display = "block";
    DOMElements.newUserForm.style.display = "none"
    this.changeBackground()
    this.instructions(user)
  }

  changeBackground() {
    // use case statement?
    if (DOMElements.house.value == "gryffindor") {
      DOMElements.body.id = "gryffindor"
    } else if (DOMElements.house.value == "slytherin") {
      DOMElements.body.id = "slytherin"
    } else if (DOMElements.house.value == "hufflepuff") {
      DOMElements.body.id = "hufflepuff"
    } else if (DOMElements.house.value == "ravenclaw") {
      DOMElements.body.id = "ravenclaw"
    }
  }

  instructions(user) {
    // Change the ID of the header to "intro"
    DOMElements.header.id = "intro"
    const p = document.createElement("p")
    const start_button = document.createElement("button");

    // Call DOMElements.intro since that is getting the element by the ID of "intro" in domElements.js
    DOMElements.intro.innerHTML = `*Welcome, ${user.username}!*`
    p.innerHTML = "This game will be played in 7 rounds. You must answer 5 of 7 questions correct in a round to move on to the next round. If you fail to answer enough questions correctly, Voldemort and his followers will prevail. If you are smart enough to get through all 7 rounds, you will vanquish Voldemort and all that he stands for. The Wizarding world is on your shoulders. Good luck."

    start_button.innerHTML = "I solemnly swear that I'm up to no good";
    start_button.id = "start_button"
    start_button.className = "btn btn-light"

    DOMElements.textContainer.appendChild(p)
    DOMElements.textContainer.appendChild(start_button)

    const round = new Round(user, 1)
  }

}
