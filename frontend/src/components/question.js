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
  }


  renderQuestion(question) {
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
    // is this id needed?
    // q.id = "question"


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

  }

  fetchQuestion() {
    this.adapter.getQuestion()
      .then(question => {
        console.log(question)
      })
  }


  // fetchAndLoadRound(event) {
  //   event.preventDefault();
  //   // console.log(this)
  //   if (this.id < 2) {
  //     this.adapter.getRound()
  //       .then(round => {
  //         this.renderRound(round)
  //       })
  //   } else {
  //     this.renderStats()
  //   }
  //
  // }

}
