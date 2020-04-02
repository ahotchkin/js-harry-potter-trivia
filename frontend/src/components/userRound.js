class UserRound {
  constructor(user_id, round_id, attempts = 1) {
    this.user_id = user_id;
    this.round_id = round_id;
    this.attempts = attempts;
    this.adapter = new UserRoundsAdapter(this);
  }

  async createUserRound() {
    const userRound = await this.adapter.createUserRound(this);
    DOMElements.tryAgain.dataset.userRoundId = userRound.id;
    DOMElements.tryAgain.dataset.userId = userRound.user_id;
    DOMElements.tryAgain.dataset.roundId = userRound.round_id;
    DOMElements.tryAgain.dataset.attempts = userRound.attempts;
  }

  async updateUserRound() {
    const userRound = await this.adapter.updateUserRound(this, parseInt(DOMElements.tryAgain.dataset.userRoundId));
    DOMElements.tryAgain.dataset.attempts = userRound.attempts;
  }

}
