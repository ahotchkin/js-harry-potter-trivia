class Round {

  constructor(user, id){
    // is this needed? should I be pushing the questions from the database into the array?
    // this.questions = []
    this.roundBindingsAndEventListeners()
    this.user = user
    this.id = id
    this.adapter = new RoundsAdapter(this)
  }

  // should anything regarding questions be moved to question.js????


  roundBindingsAndEventListeners() {
    this.start_button = document.getElementById("start_button")
    // why is it not this.createUser() - with parenthesis
    // hard bind this to the round when we execute fetchAndLoadRound, so when we access this from fetchAndLoadRound it is the Round class
    this.start_button.addEventListener("click", this.fetchAndLoadRound.bind(this));
    this.header = document.getElementById("intro");
    this.body = document.querySelector("body");
    this.p = document.querySelector("p");
    this.form = document.getElementById("quiz_form")
    this.quiz_container = document.getElementById("quiz_container")

    // this.form = document.createElement("form")
    // this.form.id = "quiz_form"

    this.submit_round = document.createElement("button")
    this.submit_round.id = "submit_round"
    // this.submit_round.innerHTML = "Submit Round 1 Answers"

    // hard bind this to the round when we execute submitAnswers, so when we access this from submitAnswers it is the Round class
    this.submit_round.addEventListener("click", this.submitAnswers.bind(this));
    this.container = document.getElementById("container")
    // this.round_title = document.getElementById("round_title")
    // this.quiz_container = document.getElementById("quiz_container")
    // this.quiz = document.getElementById("quiz_container")

  }

  fetchAndLoadRound(event) {
    event.preventDefault();
    // console.log(this)
    if (this.id < 2) {
      this.adapter.getRound()
        .then(round => {
          this.renderRound(round)
        })
    } else {
      this.renderStats()
    }

  }


  renderRound(round) {
    // this.quiz_container.style.display = "block"
    // this.header.style.display = "none"
    // this.container.style.display = "none"
    this.start_button.style.display = "none"
    this.p.innerHTML = ""
    // this.header.id = "title"
    this.container.id = "round_title"
    // const title = document.createElement("h3")
    // this.className = "round_title"


    // should this be saved in the database somewhere instead? Case statement?
    if (round.id == 1) {
      this.header.innerHTML = `${this.user.username} and the Sorcerer's Stone`
    } else if (round.id == 2) {
      this.header.innerHTML = `${this.user.username} and the Chamber of Secrets`
    } else if (round.id == 3) {
      this.header.innerHTML = `${this.user.username} and the Prizoner of Azkaban`
    } else if (round.id == 4) {
      this.header.innerHTML = `${this.user.username} and the Goblet of Fire`
    } else if (round.id == 5) {
      this.header.innerHTML = `${this.user.username} and the Order of the Phoenix`
    } else if (round.id == 6) {
      this.header.innerHTML = `${this.user.username} and the Half-Blood Prince`
    } else if (round.id == 7) {
      this.header.innerHTML = `${this.user.username} and the Deathly Hallows`
    }




    // do I want to add all HTML elements here, or add a form to index.html and keep it hidden until this point?
    // console.log(round.questions)
    // this.body.appendChild(this.form)

    // should I use for...of instead of forEach?
    round.questions.forEach(question => {

      // this code was added because I moved the rest of the code in the loop to question.js, so I need to create an instance of Question for each question in the round
      // do I need to assign all of these attributes since it's pulling from the database?
      let q = new Question(question.id, question.content, question.answer_a, question.answer_b, question.answer_c, question.answer_d, question.correct_answer, question.round_id)

      q.renderQuestion(q)

    })

    // should this be specific book quotes?
    this.submit_round.className = "btn btn-light"
    this.submit_round.innerHTML = `Submit Round ${this.id} Answers`


    this.form.appendChild(this.submit_round)

  }

  submitAnswers(event) {
    event.preventDefault()
    if (this.answersChecked()) {
      this.getUserAnswers()
      this.form.innerHTML = "";
      this.start_button.style.display = "initial"
      this.quiz_container.style.display = "none"
    } else {
      alert("Please answer all questions.")
    }
  }

  answersChecked() {
    let inputs = document.getElementsByTagName("input")
    let inputsArray = Array.from(inputs)

    let checkedAnswers = 0

    for (const input of inputsArray) {
      if (input.checked) {
        checkedAnswers++
      }
    }

    if (checkedAnswers == 7) {
      return true
    }
    // let answers1 = []
    // let answers2 = []
    // let answers3 = []
    // let answers4 = []
    // let answers5 = []
    // let answers6 = []
    // let answers7 = []
    //
    // inputsArray.forEach(function(input) {
    //   if (input.name == 1) {
    //     answers1.push(input)
    //   } else if (input.name == 2) {
    //     answers2.push(input)
    //   } else if (input.name == 3) {
    //     answers3.push(input)
    //   } else if (input.name == 4) {
    //     answers4.push(input)
    //   } else if (input.name == 5) {
    //     answers5.push(input)
    //   } else if (input.name == 6) {
    //     answers6.push(input)
    //   } else if (input.name == 7) {
    //     answers7.push(input)
    //   }
    // })
    //
    // for (let i = 0; i < answers1.length; i++) {
    //   if (answers1[i].checked) {
    //     return true
    //   }
    // }
  }


  getUserAnswers() {
    const possible_answers = Array.from(document.querySelectorAll(".form-check-input"))

    const answers = []

    possible_answers.map(possible_answer => {
      if (possible_answer.checked) {
        answers.push({question: possible_answer.name, input: possible_answer.value})

      }
    })

    // need access to the round. Can I separate this into a different method?
    this.adapter.getRound()
      .then(round => {
        const userAnswers = []
        round.questions.forEach(question => {

          let user_input = answers.find(answer => answer.question === question.id.toString())
          const userAnswer = new UserAnswer(this.user, round, question, user_input)

          userAnswers.push(userAnswer)
        })

        this.numberOfCorrectAnswers(userAnswers)

      })
  }

  numberOfCorrectAnswers(userAnswers) {
    let correctAnswers = []

    userAnswers.forEach(userAnswer => {
      // can this be == ????
      if (userAnswer.correct_answer === userAnswer.user_input) {
        correctAnswers.push(userAnswer.user_input)
      }

    })

    if (correctAnswers.length >= 5) {
      userAnswers.forEach(userAnswer => {
        // as of right now, not doing anything with this json info so there isn't a separate createUserAnswer() function in this file
        userAnswer.adapter.createUserAnswer(userAnswer)
      })

      this.id += 1
      this.adapter = new RoundsAdapter(this)

      this.p.innerHTML = "Congratulations! You're smart enough to move on to the next round."

      if (this.id == 2) {
        this.start_button.innerHTML = "Start Round 2"
      } else if (this.id == 3) {
        this.start_button.innerHTML = "Start Round 3"
      } else if (this.id == 4) {
        this.start_button.innerHTML = "Start Round 4"
      } else if (this.id == 5) {
        this.start_button.innerHTML = "Start Round 5"
      } else if (this.id == 6) {
        this.start_button.innerHTML = "Start Round 6"
      } else if (this.id == 7) {
        this.start_button.innerHTML = "Start Round 7"
      } else if (this.id == 8) {
        this.start_button.innerHTML = "See Your Stats"
      }

    } else {
      this.p.innerHTML = "Sorry, Voldemort wins."
      this.start_button.innerHTML = "Try Again"

    }

  }

  renderStats() {
    this.form.style.display = "none"
    this.header.innerHTML = `${this.user.username}'s Battle of Hogwarts`
    this.start_button.style.display = "none"
    this.p.innerHTML = "Congratulations on defeating Voldemort and his buttheads. Check out your stats below:"

    const userAnswers = new UserAnswers(this)
    // console.log(userAnswers)

    const r1 = document.createElement("p")
    r1.innerHTML = `Round 1: ${this.user.username} and the Sorcerer's Stone`
    r1.className = "round_p"

    const r2 = document.createElement("p")
    r2.innerHTML = `Round 2: ${this.user.username} and the Chamber of Secrets`
    r2.className = "round_p"

    const r3 = document.createElement("p")
    r3.innerHTML = `Round 3: ${this.user.username} and the Prizoner of Azkaban`
    r3.className = "round_p"

    const r4 = document.createElement("p")
    r4.innerHTML = `Round 4: ${this.user.username} and the Goblet of Fire`
    r4.className = "round_p"

    const r5 = document.createElement("p")
    r5.innerHTML = `Round 5: ${this.user.username} and the Order of the Phoenix`
    r5.className = "round_p"

    const r6 = document.createElement("p")
    r6.innerHTML = `Round 6: ${this.user.username} and the Half-Blood Prince`
    r6.className = "round_p"

    const r7 = document.createElement("p")
    r7.innerHTML = `Round 7: ${this.user.username} and the Deathly Hallows`
    r7.className = "round_p"

    r1.id = "r1"
    r2.id = "r2"
    r3.id = "r3"
    r4.id = "r4"
    r5.id = "r5"
    r6.id = "r6"
    r7.id = "r7"

    this.quiz_container.appendChild(r1)
    this.quiz_container.appendChild(r2)
    this.quiz_container.appendChild(r3)
    this.quiz_container.appendChild(r4)
    this.quiz_container.appendChild(r5)
    this.quiz_container.appendChild(r6)
    this.quiz_container.appendChild(r7)
  }




}
