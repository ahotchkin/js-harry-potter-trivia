class RoundsAdapter {

  constructor(round) {
    this.baseUrl = `http://localhost:3000/api/v1/rounds/${round.id}`
  }

  // should this be moved to questionsAdapter.js????

  getQuestions() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  createRound(id) {
    // the round is in the seeded database, so do I need to create anything?
  }

}
