class Round {

  constructor(user, id){
    // is this needed? should I be pushing the questions from the database into the array?
    this.questions = []
    this.roundBindingsAndEventListeners()
    // this.formElements()
    // is this okay to do since my Round model doesn't have a user attribute????
    this.user = user
    // need to figure out how to change the ID for the next round
    this.id = id
    this.adapter = new RoundsAdapter(this)

    // this.fetchAndLoadRound()
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
    this.form = document.createElement("form")
    this.form.id = "quiz_form"

    this.submit_round = document.createElement("button")
    this.submit_round.id = "submit_round"
    // this.submit_round.innerHTML = "Submit Round 1 Answers"

    // hard bind this to the round when we execute submitAnswers, so when we access this from submitAnswers it is the Round class
    this.submit_round.addEventListener("click", this.submitAnswers.bind(this));
    // this.quiz = document.getElementById("quiz_container")

  }

  // formElements() {
  //   this.answer_a_text =
  // }

  fetchAndLoadRound(event) {
    event.preventDefault();
    console.log(this)
    this.adapter.getRound()
      .then(round => {
        this.renderQuestions(round)
      })
  }

  // this.start_button.addEventListener("click", function(event) {
  //   event.preventDefault();
  //
  //
  //   return fetch(`http://localhost:3000/api/v1/rounds/${round.id}`)
  //     .then(response => response.json())
  //     .then(round => console.log(round.questions))
  //
  // })


  renderQuestions(round) {
    this.start_button.style.display = "none"
    this.p.innerHTML = ""

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
      this.header.innerHTML = `${this.user.username} and the Half Blood Prince`
    } else if (round.id == 7) {
      this.header.innerHTML = `${this.user.username} and the Deathly Hallows`
    }




    // do I want to add all HTML elements here, or add a form to index.html and keep it hidden until this point?
    console.log(round.questions)
    this.body.appendChild(this.form)

    round.questions.forEach(question => {
      const q = document.createElement("p")

      // is there not a way to add text to the radio button itself? Tried updating the innerHTML of answer_a, and it looked correct in the elements but text wasn't showing up in the browser.
      const answer_a = document.createElement("input")
      const answer_a_text = document.createElement("label")

      const answer_b = document.createElement("input")
      const answer_b_text = document.createElement("label")

      const answer_c = document.createElement("input")
      const answer_c_text = document.createElement("label")

      const answer_d = document.createElement("input")
      const answer_d_text = document.createElement("label")


      q.innerHTML = question.content
      q.id = "question"

      answer_a.setAttribute("type", "radio");
      answer_a.setAttribute("value", "A")
      answer_a.setAttribute("name", question.id)
      answer_a.setAttribute("class", "answer")
      answer_a.setAttribute("id", "user_input")
      answer_a_text.innerText = ` ${question.answer_a} \n`

      answer_b.setAttribute("type", "radio");
      answer_b.setAttribute("value", "B")
      answer_b.setAttribute("name", question.id)
      answer_b.setAttribute("class", "answer")
      answer_b.setAttribute("id", "user_input")
      answer_b_text.innerText = ` ${question.answer_b} \n`

      answer_c.setAttribute("type", "radio");
      answer_c.setAttribute("value", "C")
      answer_c.setAttribute("name", question.id)
      answer_c.setAttribute("class", "answer")
      answer_c.setAttribute("id", "user_input")
      answer_c_text.innerText = ` ${question.answer_c} \n`

      answer_d.setAttribute("type", "radio");
      answer_d.setAttribute("value", "D")
      answer_d.setAttribute("name", question.id)
      answer_d.setAttribute("class", "answer")
      answer_d.setAttribute("id", "user_input")
      answer_d_text.innerText = ` ${question.answer_d} \n\n`


      this.form.appendChild(q)

      this.form.appendChild(answer_a)
      this.form.appendChild(answer_a_text)

      this.form.appendChild(answer_b)
      this.form.appendChild(answer_b_text)

      this.form.appendChild(answer_c)
      this.form.appendChild(answer_c_text)

      this.form.appendChild(answer_d)
      this.form.appendChild(answer_d_text)
    })

    // should this be specific book quotes?
    this.submit_round.innerHTML = `Submit Round ${this.id} Answers`


    this.form.appendChild(this.submit_round)

  }

  submitAnswers(event) {
    event.preventDefault()
    this.getUserAnswers()
    // this.p.innerHTML = "Congratulations! You're smart enough to move on to the next round."

    this.form.innerHTML = "";

    this.start_button.style.display = "initial"

    // if (this.id == 1) {
    //   this.start_button.innerHTML = "Start Round 2"
    // } else if (this.id == 2) {
    //   this.start_button.innerHTML = "Start Round 3"
    // } else if (this.id == 3) {
    //   this.start_button.innerHTML = "Start Round 4"
    // } else if (this.id == 4) {
    //   this.start_button.innerHTML = "Start Round 5"
    // } else if (this.id == 5) {
    //   this.start_button.innerHTML = "Start Round 6"
    // } else if (this.id == 6) {
    //   this.start_button.innerHTML = "Start Round 7"
    // } else if (this.id == 7) {
    //   this.start_button.innerHTML = "See Your Stats"
    // }




  }


  getUserAnswers() {
    const possible_answers = Array.from(document.querySelectorAll(".answer"))

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
          // this.createUserAnswer(userAnswer)
          // as of right now, not doing anything with this json info so there isn't a separate createUserAnswer() function in this file
          userAnswer.adapter.createUserAnswer(userAnswer)
        })

        this.numberOfCorrectAnswers(userAnswers)

      })
  }

  numberOfCorrectAnswers(userAnswers) {
    let correctAnswers = []

    userAnswers.forEach(userAnswer => {
      if (userAnswer.correct_answer === userAnswer.user_input) {
        correctAnswers.push(userAnswer.user_input)
      }

    })

    if (correctAnswers.length >= 5) {
      this.id += 1
      this.adapter = new RoundsAdapter(this)

      this.p.innerHTML = "Congratulations! You're smart enough to move on to the next round."

      // const round = new Round(this.user, this.id + 1)
      // console.log(round)
      console.log("Congratulations! You're smart enough to move on to the next round.")

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

      // this.fetchAndLoadRound(event)
    } else {
      this.p.innerHTML = "Sorry, Voldemort wins."
      this.start_button.innerHTML = "Try Again"

      console.log("Sorry, Voldemort wins.")
    }

  }

  // createUserAnswer(userAnswer) {
  //   userAnswer.adapter.createUserAnswer(userAnswer)
  //   // gets parsed JSON from UserAnswerssAdapter createUserAnswer()
  //     .then(user_answer => {
  //       // console.log(user_answer)
  //   })
  // }

  fetchRound() {
    // this.adapter.getRound()
    //   .then(round => {
    //     // need to have access to the answers_array from getUserAnswers to complete the data needed in the UserAnswer instance
    //     round.questions.forEach(question => {
    //       console.log(round)
    //       const userAnswer = new UserAnswer(this.user, round, question)
    //       console.log(userAnswer)
    //     })
    //   })
  }


}
