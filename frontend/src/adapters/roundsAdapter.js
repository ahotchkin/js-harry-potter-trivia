class RoundsAdapter {

  constructor(round) {
    this.baseUrl = `http://localhost:3000/api/v1/rounds/${round.id}`;
  }

  getRound() {
    return fetch(this.baseUrl).then(response => response.json());
  }

}
