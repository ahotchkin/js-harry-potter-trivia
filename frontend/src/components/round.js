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
    // this.quiz = document.getElementById("quiz_container")

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
    // this.quiz.style.display = "visible"

    // do I want to add all HTML elements here, or add a form to index.html and keep it hidden until this point?
    // for each question in the round:
    const form = document.createElement("form")
    const question_1 = document.createElement("p")

    // is there not a way to add text to the radio button itself? Tried updating the innerHTML of answer_a, and it looked correct in the elements but text wasn't showing up in the browser.
    const answer_a = document.createElement("input")
    const answer_a_text = document.createElement("label")

    const answer_b = document.createElement("input")
    const answer_b_text = document.createElement("label")

    const answer_c = document.createElement("input")
    const answer_c_text = document.createElement("label")

    const answer_d = document.createElement("input")
    const answer_d_text = document.createElement("label")


    question_1.innerHTML = round.questions[0].content

    answer_a.setAttribute("type", "radio");
    answer_a.setAttribute("value", "A")
    answer_a.setAttribute("name", "question_1")
    answer_a_text.innerText = ` ${round.questions[0].answer_a} \n`

    answer_b.setAttribute("type", "radio");
    answer_b.setAttribute("value", "B")
    answer_b.setAttribute("name", "question_1")

    answer_b_text.innerText = ` ${round.questions[0].answer_b} \n`

    answer_c.setAttribute("type", "radio");
    answer_c.setAttribute("value", "C")
    answer_c.setAttribute("name", "question_1")

    answer_c_text.innerText = ` ${round.questions[0].answer_c} \n`

    answer_d.setAttribute("type", "radio");
    answer_d.setAttribute("value", "D")
    answer_d.setAttribute("name", "question_1")

    answer_d_text.innerText = ` ${round.questions[0].answer_d} \n`


    this.body.appendChild(form)
    form.appendChild(question_1)
    form.appendChild(answer_a)
    form.appendChild(answer_a_text)

    form.appendChild(answer_b)
    form.appendChild(answer_b_text)

    form.appendChild(answer_c)
    form.appendChild(answer_c_text)

    form.appendChild(answer_d)
    form.appendChild(answer_d_text)

    // user must select an answer and should only be able to check one answer
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
