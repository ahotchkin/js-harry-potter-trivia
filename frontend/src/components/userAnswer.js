class UserAnswer {
  // constructor(user_id, round_id, question_id, user_input, correct_answer) {
  constructor(user, round) {

    this.user_id = user.id
    this.round_id = round.id
  
    // this.question_id = question_id
    // this.user_input = user_input
    // this.correct_answer = correct_answer
    console.log("creating the first UserAnswer ever")
    this.userAnswerBindingsAndEventListeners()

  }


  userAnswerBindingsAndEventListeners() {
    this.submit_round = document.getElementById("submit_round")
    // this.submit_round.addEventListener("click", this.createUserAnswer.bind(this))
  }



}
