class UserRounds {

  constructor(round) {
    this.adapter = new UserRoundsAdapter();
    // this is necessary to get access to the round, the round's user, and the correct user's answers
    this.round = round;
    console.log(round.user.id)
    this.fetchAndLoadUserRounds();
  }

  fetchAndLoadUserRounds() {
    this.adapter.getUserRounds()
      .then(userRounds => {
        console.log("I'M IN FETCHANDLOADUSERROUNDS()")
        this.renderUserRounds(userRounds);

      });
  }

  renderUserRounds(userRounds) {

    for (let i = 1; i < 8; i++) {
      const p = document.createElement("p");
      p.className = "user_input_info";
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
        if (this.round.user.id == userRound.user_id) {
          if (userRound.round_id === i) {
            p.innerHTML = `Number of Attempts: ${userRound.attempts}`;
          };
        };
      };
    };
  }
}
