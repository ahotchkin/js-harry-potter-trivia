class UserRound {
  constructor(user_id, round_id, attempts = 1) {
    this.user_id = user_id;
    this.round_id = round_id;
    this.attempts = attempts;
    this.adapter = new UserRoundsAdapter(this);
  }

  createUserRound(round) {
    this.adapter.createUserRound(this)
      .then(userRound => {
        DOMElements.tryAgain.dataset.userRoundId = userRound.id;
        DOMElements.tryAgain.dataset.userId = userRound.user_id;
        DOMElements.tryAgain.dataset.roundId = userRound.round_id;
        DOMElements.tryAgain.dataset.attempts = userRound.attempts;
      });
  }

  updateUserRound(round) {
    this.adapter.updateUserRound(this, parseInt(DOMElements.tryAgain.dataset.userRoundId))
      .then(userRound => {
        DOMElements.tryAgain.dataset.attempts = userRound.attempts;
      });
  }

}
