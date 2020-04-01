class UserAnswers {

  constructor(round) {
    this.adapter = new UserAnswersAdapter();
    // this is necessary to get access to the round, the round's user, and the correct user's answers
    this.round = round;
    this.fetchAndLoadUserAnswers();
  }

  async fetchAndLoadUserAnswers() {
    // this.adapter.getUserAnswers()
    //   .then(userAnswers => {
    //     this.renderUserAnswers(userAnswers);
    //   });

    const userAnswers = await this.adapter.getUserAnswers();
    this.renderUserAnswers(userAnswers);
  }

  renderUserAnswers(userAnswers) {
    for (let i = 1; i < 8; i++) {
      let correctAnswers = 0;
      const span = document.createElement("span");
      span.className = "user_stats";
      span.innerHTML = "";

      switch (i) {
        case 1:
          DOMElements.p1.appendChild(span);
          break;
        case 2:
          DOMElements.p2.appendChild(span);
          break;
        case 3:
          DOMElements.p3.appendChild(span);
          break;
        case 4:
          DOMElements.p4.appendChild(span);
          break;
        case 5:
          DOMElements.p5.appendChild(span);
          break;
        case 6:
          DOMElements.p6.appendChild(span);
          break;
        case 7:
          DOMElements.p7.appendChild(span);
      }

      for (const userAnswer of userAnswers) {
        if (this.round.user.id === userAnswer.user_id && userAnswer.round_id === i) {
          if (userAnswer.user_input === userAnswer.correct_answer) {
             correctAnswers++;
          } else {
            const q = new Question(userAnswer.question_id);
            q.fetchQuestion(userAnswer);
          };
        };

        span.innerHTML = `&nbsp; • &nbsp;${correctAnswers} of 7 questions correct`;
      };
    };
  }
}
