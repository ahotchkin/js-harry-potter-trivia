class UserRound {
  constructor(user_id, round_id, attempts = 1) {
    this.user_id = user_id;
    this.round_id = round_id;
    this.attempts = attempts;
    this.adapter = new UserRoundsAdapter(this);
    // this.fetchAndLoadUserRound();
    // this is necessary to get access to the round, the round's user, and the correct user's answers
    // this.round = round;
    // console.log(this.round.user.id)

  }


  fetchAndLoadUserRound() {
    this.adapter.getUserRound()
      .then(userRound => {
        console.log(userRound);
      });
  }

  renderNumberOfAttempts() {
    for (let i = 1; i < 8; i++) {
      const p = document.createElement("p");
      p.className = "user_input_info";
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
      }
    }
    // need to get the number of attempts for each round for the user
    p.innerHTML = `Number of Attempts: ${userRound.attempts}`;

  }


  // renderUserAnswers(userAnswers) {
  //   DOMElements.quiz_container.style.display = "table";
  //
  //   for (let i = 1; i < 8; i++) {
  //     let correctAnswers = 0;
  //     const p = document.createElement("p");
  //     p.className = "user_input_info";
  //     p.innerHTML = "";
  //
  //     switch (i) {
  //       case 1:
  //         DOMElements.r1.appendChild(p);
  //         break;
  //       case 2:
  //         DOMElements.r2.appendChild(p);
  //         break;
  //       case 3:
  //         DOMElements.r3.appendChild(p);
  //         break;
  //       case 4:
  //         DOMElements.r4.appendChild(p);
  //         break;
  //       case 5:
  //         DOMElements.r5.appendChild(p);
  //         break;
  //       case 6:
  //         DOMElements.r6.appendChild(p);
  //         break;
  //       case 7:
  //         DOMElements.r7.appendChild(p);
  //     }
  //
  //     for (const userAnswer of userAnswers) {
  //       if (this.round.user.id == userAnswer.user_id) {
  //
  //         const li = document.createElement("li");
  //
  //         if (userAnswer.round_id === i) {
  //           if (userAnswer.user_input === userAnswer.correct_answer) {
  //             correctAnswers++;
  //           } else {
  //             let q = new Question(userAnswer.question_id);
  //             q.fetchQuestion(userAnswer);
  //           };
  //         };
  //       };
  //
  //       p.innerHTML = `${correctAnswers} of 7 questions correct`;
  //
  //     };
  //   };
  // }
}
