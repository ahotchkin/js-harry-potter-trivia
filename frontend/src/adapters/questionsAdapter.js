class QuestionsAdapter {

  constructor(round) {
    this.baseUrl = `http://localhost:3000/api/v1/questions`
  }

  getQuestions() {
    return fetch(this.baseUrl).then(response => response.json())
  }

}
