class RoundsAdapter {

  constructor(round) {
    this.baseUrl = `http://localhost:3000/api/v1/rounds/${round.id}`;
  }

  async getRound() {
    // return fetch(this.baseUrl).then(response => response.json());
    const response = await fetch(this.baseUrl);
    const round = await response.json();
    return round
  }

}
