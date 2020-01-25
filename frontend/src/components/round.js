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
    // this.form = document.createElement("form")
    // this.form.id = "quiz_form"

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

  // this.start_button.addEventListener("click", function(event) {
  //   event.preventDefault();
  //
  //
  //   return fetch(`http://localhost:3000/api/v1/rounds/${round.id}`)
  //     .then(response => response.json())
  //     .then(round => console.log(round.questions))
  //
  // })


  renderRound(round) {
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

      // this code was moved to question.js
      // const q = document.createElement("p")
      //
      // // is there not a way to add text to the radio button itself? Tried updating the innerHTML of answer_a, and it looked correct in the elements but text wasn't showing up in the browser.
      // const answer_a = document.createElement("input")
      // const answer_a_text = document.createElement("label")
      //
      // const answer_b = document.createElement("input")
      // const answer_b_text = document.createElement("label")
      //
      // const answer_c = document.createElement("input")
      // const answer_c_text = document.createElement("label")
      //
      // const answer_d = document.createElement("input")
      // const answer_d_text = document.createElement("label")
      //
      //
      // q.innerHTML = question.content
      // q.id = "question"
      //
      // answer_a.setAttribute("type", "radio");
      // answer_a.setAttribute("value", "A")
      // answer_a.setAttribute("name", question.id)
      // answer_a.setAttribute("class", "answer")
      // answer_a.setAttribute("id", "user_input")
      // answer_a_text.innerText = ` ${question.answer_a} \n`
      //
      // answer_b.setAttribute("type", "radio");
      // answer_b.setAttribute("value", "B")
      // answer_b.setAttribute("name", question.id)
      // answer_b.setAttribute("class", "answer")
      // answer_b.setAttribute("id", "user_input")
      // answer_b_text.innerText = ` ${question.answer_b} \n`
      //
      // answer_c.setAttribute("type", "radio");
      // answer_c.setAttribute("value", "C")
      // answer_c.setAttribute("name", question.id)
      // answer_c.setAttribute("class", "answer")
      // answer_c.setAttribute("id", "user_input")
      // answer_c_text.innerText = ` ${question.answer_c} \n`
      //
      // answer_d.setAttribute("type", "radio");
      // answer_d.setAttribute("value", "D")
      // answer_d.setAttribute("name", question.id)
      // answer_d.setAttribute("class", "answer")
      // answer_d.setAttribute("id", "user_input")
      // answer_d_text.innerText = ` ${question.answer_d} \n\n`
      //
      //
      // this.form.appendChild(q)
      //
      // this.form.appendChild(answer_a)
      // this.form.appendChild(answer_a_text)
      //
      // this.form.appendChild(answer_b)
      // this.form.appendChild(answer_b_text)
      //
      // this.form.appendChild(answer_c)
      // this.form.appendChild(answer_c_text)
      //
      // this.form.appendChild(answer_d)
      // this.form.appendChild(answer_d_text)
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
    this.header.innerHTML = `${this.user.username}'s Battle of Hogwarts`
    this.start_button.style.display = "none"
    this.p.innerHTML = "Congratulations on defeating Voldemort and his buttheads. Check out your stats below:"

    const userAnswers = new UserAnswers(this)
    // console.log(userAnswers)

    const r1 = document.createElement("h3")
    r1.innerHTML = `Round 1: ${this.user.username} and the Sorcerer's Stone`

    const r2 = document.createElement("h3")
    r2.innerHTML = `Round 2: ${this.user.username} and the Chamber of Secrets`

    const r3 = document.createElement("h3")
    r3.innerHTML = `Round 3: ${this.user.username} and the Prizoner of Azkaban`

    const r4 = document.createElement("h3")
    r4.innerHTML = `Round 4: ${this.user.username} and the Goblet of Fire`

    const r5 = document.createElement("h3")
    r5.innerHTML = `Round 5: ${this.user.username} and the Order of the Phoenix`

    const r6 = document.createElement("h3")
    r6.innerHTML = `Round 6: ${this.user.username} and the Half-Blood Prince`

    const r7 = document.createElement("h3")
    r7.innerHTML = `Round 7: ${this.user.username} and the Deathly Hallows`

    r1.id = "r1"
    r2.id = "r2"
    r3.id = "r3"
    r4.id = "r4"
    r5.id = "r5"
    r6.id = "r6"
    r7.id = "r7"

    this.body.appendChild(r1)
    this.body.appendChild(r2)
    this.body.appendChild(r3)
    this.body.appendChild(r4)
    this.body.appendChild(r5)
    this.body.appendChild(r6)
    this.body.appendChild(r7)
    //
    // let r1CorrectAnswers = 0
    // let r2CorrectAnswers = 0
    // let r3CorrectAnswers = 0
    // let r4CorrectAnswers = 0
    // let r5CorrectAnswers = 0
    // let r6CorrectAnswers = 0
    // let r7CorrectAnswers = 0
    //
    // const p1 = document.createElement("p")
    // const p2 = document.createElement("p")
    // const p3 = document.createElement("p")
    // const p4 = document.createElement("p")
    // const p5 = document.createElement("p")
    // const p6 = document.createElement("p")
    // const p7 = document.createElement("p")
    //
    // p1.innerHTML = ""
    // p2.innerHTML = ""
    // p3.innerHTML = ""
    // p4.innerHTML = ""
    // p5.innerHTML = ""
    // p6.innerHTML = ""
    // p7.innerHTML = ""
    //
    // r1.appendChild(p1)
    // r2.appendChild(p2)
    // r3.appendChild(p3)
    // r4.appendChild(p4)
    // r5.appendChild(p5)
    // r6.appendChild(p6)
    // r7.appendChild(p7)

    // // should I create a userAnswers.rb file to create a userAnswers array????
    // return fetch(`http://localhost:3000/api/v1/user_answers`)
    //   .then(response => response.json())
    //   .then(userAnswers => {
    //
    //     for (const userAnswer of userAnswers) {
    //
    //
    //
    //       if (this.user.id == userAnswer.user_id) {
    //
    //         const li = document.createElement("li")
    //
    //
    //         if (userAnswer.round_id == 1) {
    //           if (userAnswer.user_input == userAnswer.correct_answer) {
    //             r1CorrectAnswers ++
    //           } else {
    //             let q = new Question(userAnswer.question_id)
    //
    //             q.fetchQuestion(userAnswer)
    //           }
    //
    //         } else if (userAnswer.round_id == 2) {
    //
    //           if (userAnswer.user_input == userAnswer.correct_answer) {
    //             r2CorrectAnswers ++
    //           } else {
    //             let q = new Question(userAnswer.question_id)
    //
    //             q.fetchQuestion(userAnswer)
    //           }
    //         } else if (userAnswer.round_id == 3) {
    //
    //           if (userAnswer.user_input == userAnswer.correct_answer) {
    //             r3CorrectAnswers ++
    //           } else {
    //             let q = new Question(userAnswer.question_id)
    //
    //             q.fetchQuestion(userAnswer)
    //
    //           }
    //         } else if (userAnswer.round_id == 4) {
    //
    //           if (userAnswer.user_input == userAnswer.correct_answer) {
    //             r4CorrectAnswers ++
    //           } else {
    //             let q = new Question(userAnswer.question_id)
    //
    //             q.fetchQuestion(userAnswer)
    //
    //           }
    //         } else if (userAnswer.round_id == 5) {
    //
    //           if (userAnswer.user_input == userAnswer.correct_answer) {
    //             r5CorrectAnswers ++
    //           } else {
    //             let q = new Question(userAnswer.question_id)
    //
    //             q.fetchQuestion(userAnswer)
    //
    //           }
    //         } else if (userAnswer.round_id == 6) {
    //
    //           if (userAnswer.user_input == userAnswer.correct_answer) {
    //             r6CorrectAnswers ++
    //           } else {
    //             let q = new Question(userAnswer.question_id)
    //
    //             q.fetchQuestion(userAnswer)
    //
    //           }
    //         } else if (userAnswer.round_id == 7) {
    //
    //           if (userAnswer.user_input == userAnswer.correct_answer) {
    //             r7CorrectAnswers ++
    //           } else {
    //             let q = new Question(userAnswer.question_id)
    //
    //             q.fetchQuestion(userAnswer)
    //
    //           }
    //         }
    //
    //
    //
    //       }
    //     }
    //
        // p1.innerHTML = `${r1CorrectAnswers} of 7 questions correct`
        // p2.innerHTML = `${r2CorrectAnswers} of 7 questions correct`
        // p3.innerHTML = `${r3CorrectAnswers} of 7 questions correct`
        // p4.innerHTML = `${r4CorrectAnswers} of 7 questions correct`
        // p5.innerHTML = `${r5CorrectAnswers} of 7 questions correct`
        // p6.innerHTML = `${r6CorrectAnswers} of 7 questions correct`
        // p7.innerHTML = `${r7CorrectAnswers} of 7 questions correct`
    //
    //   })




  }




}
