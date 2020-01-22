class QuestionsAdapter {

  constructor(question) {
    this.baseUrl = `http://localhost:3000/api/v1/questions/${question.id}`
  }

  getQuestion() {
    return fetch(this.baseUrl).then(response => response.json())
  }

}
