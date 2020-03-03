class UserRound {
  constructor(user_id, round_id, attempts = 1) {
    this.user_id = user_id;
    this.round_id = round_id;
    this.attempts = attempts;
    this.adapter = new UserRoundsAdapter(this);
  }
}
