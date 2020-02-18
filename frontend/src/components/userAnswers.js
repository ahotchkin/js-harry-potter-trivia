class UserAnswers {

  constructor(round) {
    this.adapter = new UserAnswersAdapter();
    // is this the only way to get access to the round and then to the round's user to make sure you're printing out the right user's answers?
    this.round = round;
    this.fetchAndLoadUserAnswers();
  }

  fetchAndLoadUserAnswers(userAnswer) {
    this.adapter.getUserAnswers()
      .then(userAnswers => {
        this.renderUserAnswers(userAnswers);
      });
  }

  renderUserAnswers(userAnswers) {
    DOMElements.quiz_container.style.display = "table";

    for (let i = 1; i < 8; i++) {
      let correctAnswers = 0;
      const p = document.createElement("p");
      p.className = "number_correct";
      p.innerHTML = "";

      switch (i) {
        case 1:
          // this works whether I call it with DOMElements or not. Can also just be r1.appendChild(p). Make sure there are no issues.
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

      for (const userAnswer of userAnswers) {
        if (this.round.user.id == userAnswer.user_id) {

          const li = document.createElement("li");

          if (userAnswer.round_id === i) {
            if (userAnswer.user_input === userAnswer.correct_answer) {
              correctAnswers++;
            } else {
              let q = new Question(userAnswer.question_id);
              q.fetchQuestion(userAnswer);
            };
          };
        };

        // during QA showed 3 of 7 instead of 5 of 7. Make sure there are no issues.
        p.innerHTML = `${correctAnswers} of 7 questions correct`;

      };
    };
  }
}
