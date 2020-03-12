class Round {

  constructor(user, id = 1) {
    this.user = user;
    this.id = id;
    this.adapter = new RoundsAdapter(this);
    this.roundBindingsAndEventListeners();
  }

  roundBindingsAndEventListeners() {
    // hard bind this to the round when certain functions are executed, so when we access this from those functions it is the Round class

    DOMElements.startButton.addEventListener("click", this.createUserRound.bind(this));
    DOMElements.startButton.addEventListener("click", this.fetchAndLoadRound.bind(this));

    DOMElements.tryAgain.addEventListener("click", this.updateUserRound.bind(this));
    DOMElements.tryAgain.addEventListener("click", this.fetchAndLoadRound.bind(this));

    this.submitRound = document.createElement("button");
    this.submitRound.id = "submit_round";
    this.submitRound.addEventListener("click", this.submitAnswers.bind(this));

    this.seeStats = document.createElement("button");
    this.seeStats.className = "btn btn-light";
    this.seeStats.id = "see_stats";
    this.seeStats.addEventListener("click", this.renderStats.bind(this));

    this.playAgain = document.createElement("button");
    this.playAgain.className = "btn btn-light";
    this.playAgain.id = "play_again";
    this.playAgain.addEventListener("click", this.restartGame.bind(this));

    this.div = document.createElement("div");
    this.div.id = "submit_round";
  }

  createUserRound(event) {
    event.preventDefault();
    const userRound = new UserRound(this.user.id, this.id);
    userRound.createUserRound();
  }

  updateUserRound(event) {
    event.preventDefault();
    const userRound = new UserRound(parseInt(DOMElements.tryAgain.dataset.userId), parseInt(DOMElements.tryAgain.dataset.roundId), (parseInt(DOMElements.tryAgain.dataset.attempts) + 1));
    userRound.updateUserRound();
  }

  fetchAndLoadRound(event) {
    event.preventDefault();
    this.adapter.getRound()
      .then(round => {
        this.renderRound(round);
      });
  }

  renderRound(round) {
    DOMElements.startButton.style.display = "none";
    DOMElements.tryAgain.style.display = "none";
    DOMElements.note.style.display = "none";
    DOMElements.p.innerHTML = "";
    DOMElements.container.className = "container quiz";

    switch(round.id) {
      case 1:
        DOMElements.title.innerHTML = `${this.user.username} and the<br>Sorcerer's Stone`;
        break;
      case 2:
        DOMElements.title.innerHTML = `${this.user.username} and the<br>Chamber of Secrets`;
        break;
      case 3:
        DOMElements.title.innerHTML = `${this.user.username} and the<br>Prisoner of Azkaban`;
        break;
      case 4:
        DOMElements.title.innerHTML = `${this.user.username} and the<br>Goblet of Fire`;
        break;
      case 5:
        DOMElements.title.innerHTML = `${this.user.username} and the<br>Order of the Phoenix`;
        break;
      case 6:
        DOMElements.title.innerHTML = `${this.user.username} and the<br>Half-Blood Prince`;
        break;
      case 7:
        DOMElements.title.innerHTML = `${this.user.username} and the<br>Deathly Hallows`;
    };

    for (const question of round.questions) {
      const q = new Question(question.id, question.question_number, question.content, question.answer_a, question.answer_b, question.answer_c, question.answer_d, question.correct_answer, question.round_id);

      q.renderQuestion(q);
    };

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
      DOMElements.quiz_container.style.display = "none";
    } else {
      alert("Dumbledore would not approve if he heard you were trying to take a shortcut. Please answer all questions.");
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
          const user_input = answers.find(answer => answer.question === question.id.toString());
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
      DOMElements.container.className = "container";

      for (const userAnswer of userAnswers) {
        userAnswer.adapter.createUserAnswer(userAnswer);
      };

      this.id += 1;
      this.adapter = new RoundsAdapter(this);

      switch (this.id) {
        case 2:
          DOMElements.p.innerHTML = "<br>Congratulations! You saved the Sorcerer's Stone from Quirrell/Voldemort.<br><br>Can you believe Voldemort was melded into the back of Quirrell's head the whole time? Merlin’s beard, I did not see that coming.";
          break;
        case 3:
          DOMElements.p.innerHTML = "<br>Congratulations! You rescued Ginny from an evil, yet charming, Tom Riddle.<br><br>Honestly though, so charming. And handsome. Can you really blame sweet little Ginny? As if you wouldn't have fallen for it.";
          break;
        case 4:
          DOMElements.p.innerHTML = "<br>Congratulations! You helped Sirius and Buckbeak Escape.<br><br>Ummm Scabbers was Peter Pettigrew the whole time? And he just escaped and is on his way back to Voldemort? Troll bogies!";
          break;
        case 5:
          DOMElements.p.innerHTML = "<br>Congratulations! You avoided the Killing Curse and escaped from the graveyard. That was intense.<br><br>Wait, hold up. Cedric died? That's some dragon dung.";
          break;
        case 6:
          DOMElements.p.innerHTML = "<br>Congratulations! You lived to tell the tale of the Battle of the Department of Mysteries.<br><br>This must be a joke. Sirius did NOT die. Sirius died?! And the whole thing was a trap, so he shouldn't have died at all? Son of a bludger.";
          break;
        case 7:
          DOMElements.p.innerHTML = "<br>Congratulations! You got your hands on a (fake) horcrux.<br><br>Okay, this isn't funny anymore. I refuse to believe that Dumbledore just fell off the Astronomy Tower. IT WAS SNAPE?! Merlin's saggy left –";
          break;
        case 8:
          DOMElements.p.innerHTML = "<br>Congratulations! You defeated Voldemort at the Battle of Hogwarts!<br><br>Galloping gargoyles, a lot of people died. That was rough.";
      }

      if (this.id < 8) {
        DOMElements.startButton.innerHTML = `Board the Hogwarts Express for Round ${this.id}`;
        DOMElements.startButton.style.display = "initial";
      } else if (this.id === 8) {
        DOMElements.startButton.style.display = "none";
        this.seeStats.innerHTML = "See Your Stats";
        DOMElements.textContainer.appendChild(this.seeStats);
      };

    } else if (DOMElements.tryAgain.dataset.attempts < 3) {
      if (DOMElements.tryAgain.dataset.attempts == 1) {
        DOMElements.p.innerHTML = "<br>Uh oh. Looks like Voldemort got you. That little rascal. Care to give it another go?";
      } else if (DOMElements.tryAgain.dataset.attempts == 2) {
        DOMElements.p.innerHTML = "<br>Oh no! Voldy got you again! Did you fall asleep during Defense Against the Dark Arts? You can have one more shot...";
      };

      DOMElements.container.className = "container";
      DOMElements.tryAgain.innerHTML = "Try Again";
      DOMElements.tryAgain.style.display = "initial";
      DOMElements.textContainer.appendChild(DOMElements.tryAgain);

    } else if (DOMElements.tryAgain.dataset.attempts >= 3) {
      DOMElements.container.className = "container";
      DOMElements.p.innerHTML = "<br>Well, that's it for the Wizarding World. Better luck next time.";
      this.playAgain.innerHTML = "Game Over";
      DOMElements.textContainer.appendChild(this.playAgain);
    };
  }

  renderStats() {
    DOMElements.quiz_form.style.display = "none";
    DOMElements.startButton.style.display = "none";
    DOMElements.submitRound.style.display = "none";
    this.seeStats.style.display = "none";

    DOMElements.quiz_container.style.display = "table";

    DOMElements.container.className = "container quiz";

    DOMElements.title.innerHTML = `${this.user.username}'s Battle of Hogwarts`;
    DOMElements.p.innerHTML = "Congratulations on defeating Voldemort and his Buttheads. Oops, sorry, I mean Death Eaters. Actually, no, Buttheads is fitting. Let's see how you did...";
    this.playAgain.innerHTML = "Mischief Managed";

    const userRounds = new UserRounds(this);
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
          round_header.innerHTML = `Round 3: ${this.user.username} and the Prisoner of Azkaban`;
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
      DOMElements.quiz_container.appendChild(this.div);
      this.div.style.display = "block";
      this.submitRound.style.display = "none";
      this.div.appendChild(this.playAgain);
    };
  }

  restartGame(event) {
    event.preventDefault();
    location.reload();
  }

}
