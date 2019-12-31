class Round {

  constructor(){
    this.adapter = new RoundsAdapter()
    this.questions = []
    this.roundBindingsAndEventListeners()
    // this.fetchAndLoadQuestions()
  }

  roundBindingsAndEventListeners() {
    this.round_1_button = document.getElementById("round_1")
    // why is it not this.createUser() - with parenthesis
    // hard bind this to the users when we execute createUser(), so when we access this it is the Users class
    this.round_1_button.addEventListener("click", this.createRound.bind(this));
  }

  fetchAndLoadQuestions() {
    this.adapter.getQuestions()
      .then(round => {
        console.log(round.questions)
      })
  }


  createRound(event) {
    event.preventDefault()
    this.fetchAndLoadQuestions()
  //   this.adapter.createRound(value)
  //   // gets parsed JSON from UsersAdapter createUser()
  //     .then(round => {
  //       // creates the new user and pushes the user into the users array that exists. not sure this is actually needed
  //       this.renderRound()
  //   })
  //
  }


}
