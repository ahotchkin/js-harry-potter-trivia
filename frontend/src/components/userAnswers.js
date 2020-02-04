class UserAnswers {

  constructor(round) {
    this.adapter = new UserAnswersAdapter()
    this.fetchAndLoadUserAnswers()
    this.userAnswersBindingsAndEventListeners()
    // is this the only way to get access to the round and then to the round's user to make sure you're printing out the right user's answers?
    this.round = round
  }

  userAnswersBindingsAndEventListeners() {
    this.r1 = document.getElementById("r1")
    this.r2 = document.getElementById("r2")
    this.r3 = document.getElementById("r3")
    this.r4 = document.getElementById("r4")
    this.r5 = document.getElementById("r5")
    this.r6 = document.getElementById("r6")
    this.r7 = document.getElementById("r7")
    this.quiz_container = document.getElementById("quiz_container")


  }

  fetchAndLoadUserAnswers(userAnswer) {
    this.adapter.getUserAnswers()
      .then(userAnswers => {
        this.renderUserAnswers(userAnswers)
      })

  }


  renderUserAnswers(userAnswers) {

    this.quiz_container.style.display = "table"

    let r1CorrectAnswers = 0
    let r2CorrectAnswers = 0
    let r3CorrectAnswers = 0
    let r4CorrectAnswers = 0
    let r5CorrectAnswers = 0
    let r6CorrectAnswers = 0
    let r7CorrectAnswers = 0

    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    const p4 = document.createElement("p")
    const p5 = document.createElement("p")
    const p6 = document.createElement("p")
    const p7 = document.createElement("p")

    p1.innerHTML = ""
    p2.innerHTML = ""
    p3.innerHTML = ""
    p4.innerHTML = ""
    p5.innerHTML = ""
    p6.innerHTML = ""
    p7.innerHTML = ""

    r1.appendChild(p1)
    r2.appendChild(p2)
    r3.appendChild(p3)
    r4.appendChild(p4)
    r5.appendChild(p5)
    r6.appendChild(p6)
    r7.appendChild(p7)

    for (const userAnswer of userAnswers) {
      if (this.round.user.id == userAnswer.user_id) {

        // how can I print out the questions in numerical order? They don't always save as userAnswers that way
        const li = document.createElement("li")


        if (userAnswer.round_id == 1) {
          if (userAnswer.user_input == userAnswer.correct_answer) {
            r1CorrectAnswers ++
          } else {
            let q = new Question(userAnswer.question_id)

            q.fetchQuestion(userAnswer)
          }

        } else if (userAnswer.round_id == 2) {

          if (userAnswer.user_input == userAnswer.correct_answer) {
            r2CorrectAnswers ++
          } else {
            let q = new Question(userAnswer.question_id)

            q.fetchQuestion(userAnswer)
          }
        } else if (userAnswer.round_id == 3) {

          if (userAnswer.user_input == userAnswer.correct_answer) {
            r3CorrectAnswers ++
          } else {
            let q = new Question(userAnswer.question_id)

            q.fetchQuestion(userAnswer)

          }
        } else if (userAnswer.round_id == 4) {

          if (userAnswer.user_input == userAnswer.correct_answer) {
            r4CorrectAnswers ++
          } else {
            let q = new Question(userAnswer.question_id)

            q.fetchQuestion(userAnswer)

          }
        } else if (userAnswer.round_id == 5) {

          if (userAnswer.user_input == userAnswer.correct_answer) {
            r5CorrectAnswers ++
          } else {
            let q = new Question(userAnswer.question_id)

            q.fetchQuestion(userAnswer)

          }
        } else if (userAnswer.round_id == 6) {

          if (userAnswer.user_input == userAnswer.correct_answer) {
            r6CorrectAnswers ++
          } else {
            let q = new Question(userAnswer.question_id)

            q.fetchQuestion(userAnswer)

          }
        } else if (userAnswer.round_id == 7) {

          if (userAnswer.user_input == userAnswer.correct_answer) {
            r7CorrectAnswers ++
          } else {
            let q = new Question(userAnswer.question_id)

            q.fetchQuestion(userAnswer)

          }
        }



      }
      p1.innerHTML = `${r1CorrectAnswers} of 7 questions correct`
      p2.innerHTML = `${r2CorrectAnswers} of 7 questions correct`
      p3.innerHTML = `${r3CorrectAnswers} of 7 questions correct`
      p4.innerHTML = `${r4CorrectAnswers} of 7 questions correct`
      p5.innerHTML = `${r5CorrectAnswers} of 7 questions correct`
      p6.innerHTML = `${r6CorrectAnswers} of 7 questions correct`
      p7.innerHTML = `${r7CorrectAnswers} of 7 questions correct`
    }

  }


}
