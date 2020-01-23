class UserAnswers {

  constructor() {
    this.adapter = new UserAnswersAdapter()
    this.fetchAndLoadUserAnswers()
    this.userAnswersBindingsAndEventListeners()

  }

  userAnswersBindingsAndEventListeners() {
    this.r1 = document.getElementById("r1")
    this.r2 = document.getElementById("r2")
    this.r3 = document.getElementById("r3")
    this.r4 = document.getElementById("r4")
    this.r5 = document.getElementById("r5")
    this.r6 = document.getElementById("r6")
    this.r7 = document.getElementById("r7")

  }

  fetchAndLoadUserAnswers(userAnswer) {
    this.adapter.getUserAnswers()
      .then(userAnswers => {
        return userAnswers
      })

  }


  renderUserAnswers(userAnswers) {

    console.log("I'm rendering the userAnswer here!!!!!!!")
    console.log(userAnswers)
    // const r1 = document.createElement("h3")
    // r1.innerHTML = `Round 1: ${this.user.username} and the Sorcerer's Stone`
    //
    // const r2 = document.createElement("h3")
    // r2.innerHTML = `Round 2: ${this.user.username} and the Chamber of Secrets`
    //
    // const r3 = document.createElement("h3")
    // r3.innerHTML = `Round 3: ${this.user.username} and the Prizoner of Azkaban`
    //
    // const r4 = document.createElement("h3")
    // r4.innerHTML = `Round 4: ${this.user.username} and the Goblet of Fire`
    //
    // const r5 = document.createElement("h3")
    // r5.innerHTML = `Round 5: ${this.user.username} and the Order of the Phoenix`
    //
    // const r6 = document.createElement("h3")
    // r6.innerHTML = `Round 6: ${this.user.username} and the Half-Blood Prince`
    //
    // const r7 = document.createElement("h3")
    // r7.innerHTML = `Round 7: ${this.user.username} and the Deathly Hallows`
    //
    // r1.id = "r1"
    // r2.id = "r2"
    // r3.id = "r3"
    // r4.id = "r4"
    // r5.id = "r5"
    // r6.id = "r6"
    // r7.id = "r7"
    //
    // this.body.appendChild(r1)
    // this.body.appendChild(r2)
    // this.body.appendChild(r3)
    // this.body.appendChild(r4)
    // this.body.appendChild(r5)
    // this.body.appendChild(r6)
    // this.body.appendChild(r7)

    // ******************************************************************************

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


    console.log(this.round_id)

    for (const userAnswer of userAnswers) {
      // need to get the round to compare the round.user.id to the userAnswer.user_id
      console.log(userAnswer)
      if (this.user.id == userAnswer.user_id) {

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
