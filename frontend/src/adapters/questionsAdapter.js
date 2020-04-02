class QuestionsAdapter {

  constructor(question) {
    this.baseUrl = `http://localhost:3000/api/v1/questions/${question.id}`;
  }

  async getQuestion() {
    const response = await fetch(this.baseUrl);
    return await response.json();
  }

}
