class Question {

  constructor(id, content, answer_a, answer_b, answer_c, answer_d, correct_answer, round_id) {
    this.id = id;
    this.content = content;
    this.answer_a = answer_a;
    this.answer_b = answer_b;
    this.answer_c = answer_c;
    this.answer_d = answer_d;
    this.correct_answer = correct_answer;
    this.round_id = round_id;

    this.adapter = new QuestionsAdapter(this)
    this.questionBindingsAndEventListeners()


  }


  questionBindingsAndEventListeners() {
    this.form = document.getElementById("quiz_form")
    // this.quiz_container = document.getElementById("quiz_container")
    // should I be creating these here instead?
    this.r1 = document.getElementById("r1")
    this.r2 = document.getElementById("r2")
    this.r3 = document.getElementById("r3")
    this.r4 = document.getElementById("r4")
    this.r5 = document.getElementById("r5")
    this.r6 = document.getElementById("r6")
    this.r7 = document.getElementById("r7")


  }


  renderQuestion(question) {
    DOMElements.quiz_container.style.display = "table"
    const div_a = document.createElement("div")
    const div_b = document.createElement("div")
    const div_c = document.createElement("div")
    const div_d = document.createElement("div")

    // this.div.className = "custom-control custom-radio"
    // div.className = "form-check"
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

    answer_a.setAttribute("type", "radio");
    answer_a.setAttribute("value", "A")
    answer_a.setAttribute("name", question.id)
    answer_a.setAttribute("class", "form-check-input")
    answer_a.setAttribute("id", "user_input")
    answer_a_text.className = "form-check-label"
    // answer_a_text.htmlFor = "user_input"

    answer_a_text.innerText = ` ${question.answer_a}`

    answer_b.setAttribute("type", "radio");
    answer_b.setAttribute("value", "B")
    answer_b.setAttribute("name", question.id)
    answer_b.setAttribute("class", "form-check-input")
    answer_b.setAttribute("id", "user_input")
    answer_b_text.className = "form-check-label"
    // answer_b_text.htmlFor = "user_input"

    answer_b_text.innerText = ` ${question.answer_b}`

    answer_c.setAttribute("type", "radio");
    answer_c.setAttribute("value", "C")
    answer_c.setAttribute("name", question.id)
    answer_c.setAttribute("class", "form-check-input")
    answer_c.setAttribute("id", "user_input")
    answer_c_text.className = "form-check-label"
    // answer_c_text.htmlFor = "user_input"

    answer_c_text.innerText = ` ${question.answer_c}`

    answer_d.setAttribute("type", "radio");
    answer_d.setAttribute("value", "D")
    answer_d.setAttribute("name", question.id)
    answer_d.setAttribute("class", "form-check-input")
    answer_d.setAttribute("id", "user_input")
    answer_d_text.className = "form-check-label"
    // answer_d_text.htmlFor = "user_input"

    answer_d_text.innerText = ` ${question.answer_d} \n\n`

    this.form.appendChild(q)

    this.form.appendChild(div_a)
    this.form.appendChild(div_b)
    this.form.appendChild(div_c)
    this.form.appendChild(div_d)

    div_a.appendChild(answer_a)
    div_a.appendChild(answer_a_text)

    div_b.appendChild(answer_b)
    div_b.appendChild(answer_b_text)

    div_c.appendChild(answer_c)
    div_c.appendChild(answer_c_text)

    div_d.appendChild(answer_d)
    div_d.appendChild(answer_d_text)

  }

  fetchQuestion(userAnswer) {
    this.adapter.getQuestion()
      .then(question => {
        this.renderQuestionInfo(question, userAnswer)
      })
  }

  renderQuestionInfo(question, userAnswer) {
    const q = document.createElement("p")
    const userInput = document.createElement("p")
    const correctAnswer = document.createElement("p")

    q.className = "question"
    userInput.className = "user_input"
    correctAnswer.className = "correct_answer"

    q.innerHTML = `Question: ${question.content}`

    if (userAnswer.user_input == "A") {
      userInput.innerHTML = `Your Answer: ${question.answer_a}`
    } else if (userAnswer.user_input == "B") {
      userInput.innerHTML = `Your Answer: ${question.answer_b}`
    } else if (userAnswer.user_input == "C") {
      userInput.innerHTML = `Your Answer: ${question.answer_c}`
    } else if (userAnswer.user_input == "D") {
      userInput.innerHTML = `Your Answer: ${question.answer_d}`
    }

    if (question.correct_answer == "A") {
      correctAnswer.innerHTML = `Correct Answer: ${question.answer_a}\n`
    } else if (question.correct_answer == "B") {
      correctAnswer.innerHTML = `Correct Answer: ${question.answer_b}\n`
    } else if (question.correct_answer == "C") {
      correctAnswer.innerHTML = `Correct Answer: ${question.answer_c}\n`
    } else if (question.correct_answer == "D") {
      correctAnswer.innerHTML = `Correct Answer: ${question.answer_d}\n`
    }

    if (userAnswer.round_id == 1) {
      this.r1.appendChild(q)
      this.r1.appendChild(userInput)
      this.r1.appendChild(correctAnswer)
    } else if (userAnswer.round_id == 2) {
      this.r2.appendChild(q)
      this.r2.appendChild(userInput)
      this.r2.appendChild(correctAnswer)
    } else if (userAnswer.round_id == 3) {
      this.r3.appendChild(q)
      this.r3.appendChild(userInput)
      this.r3.appendChild(correctAnswer)
    } else if (userAnswer.round_id == 4) {
      this.r4.appendChild(q)
      this.r4.appendChild(userInput)
      this.r4.appendChild(correctAnswer)
    } else if (userAnswer.round_id == 5) {
      this.r5.appendChild(q)
      this.r5.appendChild(userInput)
      this.r5.appendChild(correctAnswer)
    } else if (userAnswer.round_id == 6) {
      this.r6.appendChild(q)
      this.r6.appendChild(userInput)
      this.r6.appendChild(correctAnswer)
    } else if (userAnswer.round_id == 7) {
      this.r7.appendChild(q)
      this.r7.appendChild(userInput)
      this.r7.appendChild(correctAnswer)
    }

  }

}
