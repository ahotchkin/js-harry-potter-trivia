class UserRoundsAdapter {

  constructor() {
    this.baseUrl = `http://localhost:3000/api/v1/user_rounds`;
  }

  async getUserRounds() {
    // return fetch(this.baseUrl).then(response => response.json());
    const response = await fetch(this.baseUrl);
    return await response.json();
  }

  async createUserRound(userRound) {
    const user_round = {
      user_id: userRound.user_id,
      round_id: userRound.round_id,
      attempts: userRound.attempts
    };

    // return fetch(this.baseUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //       user_round
    //     })
    //   })
    // .then(response => response.json())

    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          user_round
        })
      });
    return await response.json();
  }

  async updateUserRound(userRound, id) {
    let attempts = userRound.attempts;

    // return fetch(this.baseUrl + `/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     attempts: userRound.attempts
    //   })
    // })
    // .then(response => response.json())

    const response = await fetch(this.baseUrl + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        attempts: userRound.attempts
      })
    });
    return await response.json();
  }

}
