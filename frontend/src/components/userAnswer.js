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
    this.submit_round = document.getElementById("submit_round")
    // this.submit_round.addEventListener("click", this.createUserAnswer.bind(this))
  }



}
