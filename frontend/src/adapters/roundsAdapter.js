class RoundsAdapter {

  constructor(round) {
    this.baseUrl = `http://localhost:3000/api/v1/rounds/${round.id}`;
  }

  async getRound() {
    const response = await fetch(this.baseUrl);
    return await response.json();
  }

}
