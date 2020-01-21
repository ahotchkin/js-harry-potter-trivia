class Questions {

  constructor() {
    this.questions = [];
    this.adapter = new QuestionsAdapter();
  }

  fetchQuestions() {
    this.adapter.getQuestions()
      .then(questions => {
        questions.forEach(question => this.questions.push(question))
      })
      .then(() => {
        console.log(this.questions)
      })
  }

}
