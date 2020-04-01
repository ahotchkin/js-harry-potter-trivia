class UserRounds {

  constructor(round) {
    this.adapter = new UserRoundsAdapter();
    // this is necessary to get access to the round, the round's user, and the correct user's userRounds
    this.round = round;
    this.fetchAndLoadUserRounds();
  }

  async fetchAndLoadUserRounds() {
    // this.adapter.getUserRounds()
    //   .then(userRounds => {
    //     this.renderUserRounds(userRounds);
    //   });

    const userRounds = await this.adapter.getUserRounds();
    this.renderUserRounds(userRounds);

  }

  renderUserRounds(userRounds) {
    for (let i = 1; i < 8; i++) {
      const p = document.createElement("p");
      p.className = "user_stats";
      p.id = `p${i}`;
      p.innerHTML = "";

      switch (i) {
        case 1:
          DOMElements.r1.appendChild(p);
          break;
        case 2:
          DOMElements.r2.appendChild(p);
          break;
        case 3:
          DOMElements.r3.appendChild(p);
          break;
        case 4:
          DOMElements.r4.appendChild(p);
          break;
        case 5:
          DOMElements.r5.appendChild(p);
          break;
        case 6:
          DOMElements.r6.appendChild(p);
          break;
        case 7:
          DOMElements.r7.appendChild(p);
      };

      for (const userRound of userRounds) {
        if (this.round.user.id === userRound.user_id && userRound.round_id === i) {
          p.innerHTML = `Number of Attempts: ${userRound.attempts}`;
        };
      };
    };
  }
}
