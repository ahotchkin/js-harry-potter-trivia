class RoundsAdapter {

  constructor(round) {
    this.baseUrl = `http://localhost:3000/api/v1/rounds/${round.id}`
  }

  // should this be moved to questionsAdapter.js????

  getRound() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  createRound(id) {
    // the round is in the seeded database, so do I need to create anything?
  }


  // createUserAnswer(user, answers_array) {
  //   const user = {
  //     username: value
  //   }
  //
  //   return fetch(`http://localhost:3000/api/v1/user_answers/${user.id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user
  //     })
  //   })
  //   // below sends a parsed JSON object back to the users component in createUser()
  //   .then(response => response.json())
  // }
  //

}
