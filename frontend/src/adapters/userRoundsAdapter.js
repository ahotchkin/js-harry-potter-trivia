class UserRoundsAdapter {

  constructor() {
    this.baseUrl = `http://localhost:3000/api/v1/user_rounds`;
  }
  //
  // getUserAnswers() {
  //   return fetch(this.baseUrl).then(response => response.json());
  // }
  //
  createUserRound(userRound) {
    const user_round = {
      user_id: userRound.user_id,
      round_id: userRound.round_id,
      attempts: userRound.attempts
    };

    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          user_round
        })
      })
    .then(response => response.json())
  }

}
