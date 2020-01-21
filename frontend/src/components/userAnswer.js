class UserAnswer {
  // constructor(user_id, round_id, question_id, user_input, correct_answer) {
  constructor(user, round, question, user_input) {

    this.user_id = user.id
    this.round_id = round.id
    this.question_id = question.id
    this.correct_answer = question.correct_answer
    this.user_input = user_input.input
    // console.log(this)
    this.adapter = new UserAnswersAdapter()

    this.userAnswerBindingsAndEventListeners()

  }


  userAnswerBindingsAndEventListeners() {
    // this.submit_round = document.getElementById("submit_round")

    // this.submit_round.addEventListener("click", this.createUserAnswer.bind(this))

    // when I was binding this in round.js, this was the round. Now this will be the user_answer...

    // this.submit_round.addEventListener("click", this.submitAnswers.bind(this));

    this.form = document.getElementById("quiz_form")

    this.start_button = document.getElementById("start_button")

    this.body = document.querySelector("body");


  }

  fetchAndLoadUserAnswer(userAnswer) {
    this.adapter.getUserAnswer()
      .then(userAnswer => {
        this.renderUserAnswer(userAnswer)
      })

  }


  renderUserAnswer(userAnswer) {
    console.log("I'm rendering the userAnswer here!!!!!!!")
    // const li = document.createElement("li")
    // li.innerhTML = userAnswer.user_input
    //
    // this.body.appendChild(li)


  }






}
