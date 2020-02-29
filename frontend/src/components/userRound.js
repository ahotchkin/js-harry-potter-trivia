class UserRound {
  constructor(user, round, attempts) {
    this.user_id = user.id;
    this.round_id = round.id;
    this.attempts = attempts
    // this is necessary to associate with the JS round - DO I NEED IT HERE??????
    this.round = round;
    // this is necessary to create the UserAnswers at the end of each round
    this.adapter = new UserAnswersAdapter();
  }
}
