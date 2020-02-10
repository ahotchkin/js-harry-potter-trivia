class UserAnswer {
  constructor(user, round, question, user_input) {
    this.user_id = user.id
    this.round_id = round.id
    this.question_id = question.id
    this.correct_answer = question.correct_answer
    this.user_input = user_input.input
    this.round = round
    // is this needed here????
    this.adapter = new UserAnswersAdapter()
  }

}
