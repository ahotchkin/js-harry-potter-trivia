class UserRound {
  constructor(user_id, round_id, attempts = 1) {
    this.user_id = user_id;
    this.round_id = round_id;
    this.attempts = attempts;
    // this is necessary to associate with the JS round - DO I NEED IT HERE??????
    // this.round = round;
    // this is necessary to create the UserAnswers at the end of each round
    this.adapter = new UserRoundsAdapter(this);
  }
}
