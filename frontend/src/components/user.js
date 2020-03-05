class User {
  constructor(userJSON) {
    this.id = userJSON.id;
    this.username = userJSON.username;
    this.adapter = new UsersAdapter();
    this.userEventListeners();
  }

  userEventListeners() {
    // hard bind this to the user when createUser() is executed, so when we access this it is the User class
    DOMElements.newUserForm.addEventListener("submit", this.createUser.bind(this));
  }

  createUser(event) {
    event.preventDefault();

    if (DOMElements.username.value === "") {
      alert("Please enter a username.");
    } else {
      // take the below value and make a post request using the adapter
      const value = DOMElements.username.value;

      this.adapter.createUser(value)
        .then(user => {
          this.renderUserStartPage(user);
        });
    };
  }

  renderUserStartPage(user) {
    DOMElements.newUserForm.style.display = "none";
    DOMElements.speaker.style.display = "block";
    this.changeBackground();
    this.instructions(user);
  }

  changeBackground() {
    switch(DOMElements.house.value) {
      case "gryffindor":
        DOMElements.body.id = "gryffindor";
        break;
      case "slytherin":
        DOMElements.body.id = "slytherin";
        break;
      case "hufflepuff":
        DOMElements.body.id = "hufflepuff";
        break;
      case "ravenclaw":
        DOMElements.body.id = "ravenclaw";
    };
  }

  instructions(user) {
    // Change the ID of the header to "title"
    DOMElements.header.id = "title";
    const p = document.createElement("p");
    const startButton = document.createElement("button");
    const note = document.createElement("p");
    const tryAgain = document.createElement("button");

    // Call DOMElements.title since that is getting the element by the ID of "title" in domElements.js. This is grabbing what was initially DOMElements.header.
    DOMElements.title.innerHTML = `*${user.username}, yer a wizard!*`;

    p.innerHTML = "<br>This game will be played in 7 rounds. For each round, you must answer at least 5 of 7 questions correctly to move on to the next round. If you are smart enough to get through all 7 rounds, you will vanquish Voldemort and all that he stands for. If you fail to do so, Voldemort and his followers will prevail. The Wizarding World is on your shoulders. Good luck.";

    note.innerHTML = "When in doubt, default to the books.";
    note.className = "answer_info";
    note.id = "note";

    startButton.innerHTML = "Board the Hogwarts Express for Round 1";
    startButton.className = "btn btn-light";
    startButton.id = "start_button";

    tryAgain.className = "btn btn-light";
    tryAgain.id = "try_again";
    tryAgain.style.display = "none";

    DOMElements.textContainer.appendChild(p);
    DOMElements.textContainer.appendChild(note);
    DOMElements.textContainer.appendChild(startButton);
    DOMElements.textContainer.appendChild(tryAgain);

    const round = new Round(user, 1);
  }

}
