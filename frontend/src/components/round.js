class Round {

  constructor(user, id){
    this.user = user;
    this.id = id;
    this.adapter = new RoundsAdapter(this);
    this.roundBindingsAndEventListeners();
  }

  roundBindingsAndEventListeners() {
    // hard bind this to the round when fetchAndLoadRound is executed, so when we access this from fetchAndLoadRound it is the Round class
    DOMElements.startButton.addEventListener("click", this.fetchAndLoadRound.bind(this));

    this.submitRound = document.createElement("button");
    this.submitRound.id = "submit_round";
    // hard bind this to the round when submitAnswers is executed, so when we access this from submitAnswers it is the Round class
    this.submitRound.addEventListener("click", this.submitAnswers.bind(this));

    this.div = document.createElement("div");
    this.div.id = "submit_round";
  }

  fetchAndLoadRound(event) {
    event.preventDefault();
    if (this.id < 8) {
      this.adapter.getRound()
        .then(round => {
          this.renderRound(round);
        });
    } else {
      this.renderStats();
    };
  }


  renderRound(round) {
    DOMElements.startButton.style.display = "none";
    DOMElements.p.innerHTML = "";

    switch(round.id) {
      case 1:
        DOMElements.container.className = "container quiz";
        DOMElements.title.innerHTML = `${this.user.username} and the Sorcerer's Stone`;
        break;
      case 2:
        DOMElements.title.innerHTML = `${this.user.username} and the Chamber of Secrets`;
        break;
      case 3:
        DOMElements.title.innerHTML = `${this.user.username} and the Prizoner of Azkaban`;
        break;
      case 4:
        DOMElements.title.innerHTML = `${this.user.username} and the Goblet of Fire`;
        break;
      case 5:
        DOMElements.title.innerHTML = `${this.user.username} and the Order of the Phoenix`;
        break;
      case 6:
        DOMElements.title.innerHTML = `${this.user.username} and the Half-Blood Prince`;
        break;
      case 7:
        DOMElements.title.innerHTML = `${this.user.username} and the Deathly Hallows`;
    };

    for (const question of round.questions) {
      // need to create an instance of Question for each question in the round
      let q = new Question(question.id, question.content, question.answer_a, question.answer_b, question.answer_c, question.answer_d, question.correct_answer, question.round_id);

      q.renderQuestion(q);
    }

    // should this be specific book quotes?
    DOMElements.quiz_container.appendChild(this.div);

    this.submitRound.className = "btn btn-light";
    this.submitRound.innerHTML = `Submit Round ${this.id} Answers`;

    this.div.appendChild(this.submitRound);
  }

  submitAnswers(event) {
    event.preventDefault();
    if (this.questionsAnswered()) {
      this.getUserAnswers();
      DOMElements.quiz_form.innerHTML = "";
      DOMElements.startButton.style.display = "initial";
      DOMElements.quiz_container.style.display = "none";
    } else {
      alert("Please answer all questions.");
    };
  }

  questionsAnswered() {
    const userInputs = Array.from(document.getElementsByTagName("input"));

    let selectedAnswers = 0;

    for (const input of userInputs) {
      if (input.checked) {
        selectedAnswers++;
      };
    };

    if (selectedAnswers === 7) {
      return true;
    };
  }


  getUserAnswers() {
    const possible_answers = Array.from(document.querySelectorAll(".form-check-input"));

    const answers = [];

    possible_answers.map(possible_answer => {
      if (possible_answer.checked) {
        answers.push({question: possible_answer.name, input: possible_answer.value});
      };
    });

    this.createUserAnswers(answers);
  }

  createUserAnswers(answers) {
    this.adapter.getRound()
      .then(round => {
        const userAnswers = [];

        for (const question of round.questions) {
          let user_input = answers.find(answer => answer.question === question.id.toString());
          const userAnswer = new UserAnswer(this.user, round, question, user_input);

          userAnswers.push(userAnswer);
        }

        this.numberOfCorrectAnswers(userAnswers);

      });
  }

  numberOfCorrectAnswers(userAnswers) {
    const correctAnswers = [];

    for (const userAnswer of userAnswers) {
      if (userAnswer.correct_answer === userAnswer.user_input) {
        correctAnswers.push(userAnswer.user_input);
      };
    };

    if (correctAnswers.length >= 5) {

      for (const userAnswer of userAnswers) {
        // as of right now, not doing anything with this json info so there isn't a separate createUserAnswer() function in this file
        userAnswer.adapter.createUserAnswer(userAnswer);
      };

      this.id += 1;
      this.adapter = new RoundsAdapter(this);

      DOMElements.p.innerHTML = "Congratulations! You're smart enough to move on to the next round.";

      if (this.id < 8) {
        DOMElements.startButton.innerHTML = `Board the Hogwarts Express for Round ${this.id}`;
      } else if (this.id === 8) {
        DOMElements.p.innerHTML = "Wooooooo you did it!!!!!!";
        DOMElements.startButton.innerHTML = "See Your Stats";
      };

    } else {
      DOMElements.p.innerHTML = "Sorry, Voldemort wins.";
      DOMElements.startButton.innerHTML = "Try Again";
    };
  }

  renderStats() {
    DOMElements.quiz_form.style.display = "none";
    DOMElements.title.innerHTML = `${this.user.username}'s Battle of Hogwarts`;
    DOMElements.submitRound.style.display = "none";
    DOMElements.startButton.style.display = "none";
    DOMElements.p.innerHTML = "Congratulations on defeating Voldemort and his buttheads. Check out your stats below:";

    const userAnswers = new UserAnswers(this);

    for (let i = 1; i < 8; i++) {
      const round_header = document.createElement("p");
      round_header.className = "round_stats";
      round_header.id = `r${i}`;

      switch (i) {
        case 1:
          round_header.innerHTML = `Round 1: ${this.user.username} and the Sorcerer's Stone`;
          break;
        case 2:
          round_header.innerHTML = `Round 2: ${this.user.username} and the Chamber of Secrets`;
          break;
        case 3:
          round_header.innerHTML = `Round 3: ${this.user.username} and the Prizoner of Azkaban`;
          break;
        case 4:
          round_header.innerHTML = `Round 4: ${this.user.username} and the Goblet of Fire`;
          break;
        case 5:
          round_header.innerHTML = `Round 5: ${this.user.username} and the Order of the Phoenix`;
          break;
        case 6:
          round_header.innerHTML = `Round 6: ${this.user.username} and the Half-Blood Prince`;
          break;
        case 7:
          round_header.innerHTML = `Round 7: ${this.user.username} and the Deathly Hallows`;
      };

      DOMElements.quiz_container.appendChild(round_header);
    }
  };

}
