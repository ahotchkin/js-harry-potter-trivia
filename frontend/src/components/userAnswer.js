class UserAnswer {
  // constructor(user_id, round_id, question_id, user_input, correct_answer) {
  constructor(user, round, question, user_input) {

    this.user_id = user.id
    this.round_id = round.id
    this.question_id = question.id
    this.correct_answer = question.correct_answer
    this.user_input = user_input.input
    // console.log(this)
    this.adapter = new UserAnswersAdapter(this)

    this.userAnswerBindingsAndEventListeners()

  }


  userAnswerBindingsAndEventListeners() {
    // this.submit_round = document.getElementById("submit_round")

    // this.submit_round.addEventListener("click", this.createUserAnswer.bind(this))

    // when I was binding this in round.js, this was the round. Now this will be the user_answer...

    // this.submit_round.addEventListener("click", this.submitAnswers.bind(this));

    this.form = document.getElementById("quiz_form")

    this.start_button = document.getElementById("start_button")



  }



  // submitAnswers(event) {
  //   event.preventDefault()
  //   console.log("I made it to  here!!!!!")
  //   this.getUserAnswers()
  //   // this.p.innerHTML = "Congratulations! You're smart enough to move on to the next round."
  //
  //   this.form.innerHTML = "";
  //
  //   this.start_button.style.display = "initial"
  //
  //   // if (this.id == 1) {
  //   //   this.start_button.innerHTML = "Start Round 2"
  //   // } else if (this.id == 2) {
  //   //   this.start_button.innerHTML = "Start Round 3"
  //   // } else if (this.id == 3) {
  //   //   this.start_button.innerHTML = "Start Round 4"
  //   // } else if (this.id == 4) {
  //   //   this.start_button.innerHTML = "Start Round 5"
  //   // } else if (this.id == 5) {
  //   //   this.start_button.innerHTML = "Start Round 6"
  //   // } else if (this.id == 6) {
  //   //   this.start_button.innerHTML = "Start Round 7"
  //   // } else if (this.id == 7) {
  //   //   this.start_button.innerHTML = "See Your Stats"
  //   // }
  //
  //
  //
  //
  // }
  //
  //
  // getUserAnswers() {
  //   const possible_answers = Array.from(document.querySelectorAll(".answer"))
  //
  //   const answers = []
  //
  //   console.log("I made it to here")
  //
  //   possible_answers.map(possible_answer => {
  //     if (possible_answer.checked) {
  //       answers.push({question: possible_answer.name, input: possible_answer.value})
  //
  //     }
  //   })
  //
  //   console.log(answers)
  //
  //   // need access to the round. Can I separate this into a different method?
  //   this.adapter.getRound()
  //     .then(round => {
  //       const userAnswers = []
  //       round.questions.forEach(question => {
  //
  //         let user_input = answers.find(answer => answer.question === question.id.toString())
  //         const userAnswer = new UserAnswer(this.user, round, question, user_input)
  //
  //         userAnswers.push(userAnswer)
  //         // this.createUserAnswer(userAnswer)
  //         // as of right now, not doing anything with this json info so there isn't a separate createUserAnswer() function in this file
  //         userAnswer.adapter.createUserAnswer(userAnswer)
  //       })
  //
  //       this.numberOfCorrectAnswers(userAnswers)
  //
  //     })
  // }
  //
  // numberOfCorrectAnswers(userAnswers) {
  //   let correctAnswers = []
  //
  //   userAnswers.forEach(userAnswer => {
  //     if (userAnswer.correct_answer === userAnswer.user_input) {
  //       correctAnswers.push(userAnswer.user_input)
  //     }
  //
  //   })
  //
  //   if (correctAnswers.length >= 5) {
  //     this.id += 1
  //     this.adapter = new RoundsAdapter(this)
  //
  //     this.p.innerHTML = "Congratulations! You're smart enough to move on to the next round."
  //
  //     // const round = new Round(this.user, this.id + 1)
  //     // console.log(round)
  //     console.log("Congratulations! You're smart enough to move on to the next round.")
  //
  //     if (this.id == 2) {
  //       this.start_button.innerHTML = "Start Round 2"
  //     } else if (this.id == 3) {
  //       this.start_button.innerHTML = "Start Round 3"
  //     } else if (this.id == 4) {
  //       this.start_button.innerHTML = "Start Round 4"
  //     } else if (this.id == 5) {
  //       this.start_button.innerHTML = "Start Round 5"
  //     } else if (this.id == 6) {
  //       this.start_button.innerHTML = "Start Round 6"
  //     } else if (this.id == 7) {
  //       this.start_button.innerHTML = "Start Round 7"
  //     } else if (this.id == 8) {
  //       this.start_button.innerHTML = "See Your Stats"
  //     }
  //
  //     // this.fetchAndLoadRound(event)
  //   } else {
  //     this.p.innerHTML = "Sorry, Voldemort wins."
  //     this.start_button.innerHTML = "Try Again"
  //
  //     console.log("Sorry, Voldemort wins.")
  //   }
  //
  // }
  //

}
