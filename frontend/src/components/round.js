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
    // hard bind this to the round when we execute fetchAndLoadQuestions, so when we access this it is the Round class
    this.round_1_button.addEventListener("click", this.fetchAndLoadQuestions.bind(this));
    this.round_header = document.getElementById("round_header");
    this.body = document.querySelector("body");
    this.p = document.querySelector("p");

  }

  fetchAndLoadQuestions(event) {
    event.preventDefault();
    this.adapter.getQuestions()
      .then(round => {
        // console.log(round.questions[0].answer_a)
        this.renderQuestions(round)
        // console.log(round)
      })
  }



  renderQuestions(round) {
    // how can I access the user's username from round.js???
    // console.log(round)
    this.round_header.innerHTML = `Harry Potter and the Sorcerer's Stone`
    this.p.innerHTML = ""

    // for each question in the round:
    console.log(round.questions[0].content)
    const form = document.createElement("form")
    const question_1 = document.createElement("p")
    const answer_a = document.createElement("input")
    const answer_b = document.createElement("input")
    const answer_c = document.createElement("input")
    const answer_d = document.createElement("input")

    question_1.innerHTML = round.questions[0].content
    answer_a.setAttribute("type", "radio");
    // answer_a.setAttribute("value", round.questions[0].answer_a)
    answer_a.setAttribute("value", "Hello")

    this.body.appendChild(form)
    form.appendChild(question_1)
    question_1.appendChild(answer_a)
  }


  // createRound(event) {
  //   event.preventDefault()
  //   this.fetchAndLoadQuestions()
  // //   this.adapter.createRound(value)
  // //   // gets parsed JSON from UsersAdapter createUser()
  // //     .then(round => {
  // //       // creates the new user and pushes the user into the users array that exists. not sure this is actually needed
  // //       this.renderRound()
  // //   })
  // //
  // }


}
