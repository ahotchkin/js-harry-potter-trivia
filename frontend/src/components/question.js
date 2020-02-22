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
    this.adapter = new QuestionsAdapter(this);
  }

  renderQuestion(question) {
    DOMElements.quiz_container.style.display = "table";
    const q = document.createElement("p");

    q.innerHTML = question.content;
    DOMElements.quiz_form.appendChild(q);

    for (let i = 1; i < 5; i++) {
      const div = document.createElement("div");
      const answer = document.createElement("input");
      const answer_text = document.createElement("label");

      answer.setAttribute("type", "radio");
      answer.setAttribute("name", question.id);
      answer.setAttribute("class", "form-check-input");
      answer.setAttribute("id", "user_input");
      answer_text.className = "form-check-label";

      switch (i) {
        case 1:
          answer.setAttribute("value", "A");
          answer_text.innerText = ` ${question.answer_a}`;
          break;
        case 2:
          answer.setAttribute("value", "B");
          answer_text.innerText = ` ${question.answer_b}`;
          break;
        case 3:
          answer.setAttribute("value", "C");
          answer_text.innerText = ` ${question.answer_c}`;
          break;
        case 4:
          answer.setAttribute("value", "D");
          answer_text.innerText = ` ${question.answer_d} \n\n`;
      };

      DOMElements.quiz_form.appendChild(div);
      div.appendChild(answer);
      div.appendChild(answer_text);
    };
  }

  fetchQuestion(userAnswer) {
    this.adapter.getQuestion()
      .then(question => {
        this.renderQuestionInfo(question, userAnswer);
      });
  }

  renderQuestionInfo(question, userAnswer) {
    const q = document.createElement("p");
    const userInput = document.createElement("p");
    const correctAnswer = document.createElement("p");

    q.className = "user_input_info question_info";
    userInput.className = "user_input_info answer_info question_info";
    correctAnswer.className = "user_input_info answer_info";

    q.innerHTML = `Question: ${question.content}`;

    switch (userAnswer.user_input) {
      case "A":
        userInput.innerHTML = `Your Answer: ${question.answer_a}`;
        break;
      case "B":
        userInput.innerHTML = `Your Answer: ${question.answer_b}`;
        break;
      case "C":
        userInput.innerHTML = `Your Answer: ${question.answer_c}`;
        break;
      case "D":
        userInput.innerHTML = `Your Answer: ${question.answer_d}`;
    };

    switch (question.correct_answer) {
      case "A":
        correctAnswer.innerHTML = `Correct Answer: ${question.answer_a}`;
        break;
      case "B":
        correctAnswer.innerHTML = `Correct Answer: ${question.answer_b}`;
        break;
      case "C":
        correctAnswer.innerHTML = `Correct Answer: ${question.answer_c}`;
        break;
      case "D":
        correctAnswer.innerHTML = `Correct Answer: ${question.answer_d}`;
    };

    // is there a more efficient way to do this?
    switch (userAnswer.round_id) {
      case 1:
        DOMElements.r1.appendChild(q);
        DOMElements.r1.appendChild(userInput);
        DOMElements.r1.appendChild(correctAnswer);
        break;
      case 2:
        DOMElements.r2.appendChild(q);
        DOMElements.r2.appendChild(userInput);
        DOMElements.r2.appendChild(correctAnswer);
        break;
      case 3:
        DOMElements.r3.appendChild(q);
        DOMElements.r3.appendChild(userInput);
        DOMElements.r3.appendChild(correctAnswer);
        break;
      case 4:
        DOMElements.r4.appendChild(q);
        DOMElements.r4.appendChild(userInput);
        DOMElements.r4.appendChild(correctAnswer);
        break;
      case 5:
        DOMElements.r5.appendChild(q);
        DOMElements.r5.appendChild(userInput);
        DOMElements.r5.appendChild(correctAnswer);
        break;
      case 6:
        DOMElements.r6.appendChild(q);
        DOMElements.r6.appendChild(userInput);
        DOMElements.r6.appendChild(correctAnswer);
        break;
      case 7:
        DOMElements.r7.appendChild(q);
        DOMElements.r7.appendChild(userInput);
        DOMElements.r7.appendChild(correctAnswer);
    };
  }

}
