class UserAnswer {
  constructor(user, round, question, user_input) {
    this.user_id = user.id
    this.round_id = round.id
    this.question_id = question.id
    this.correct_answer = question.correct_answer
    this.user_input = user_input.input
    // need this to associate with the JS round
    this.round = round
    // this is necessary to create the UserAnswers at the end of each round
    this.adapter = new UserAnswersAdapter()
  }

}
