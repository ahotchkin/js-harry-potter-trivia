class UserAnswersAdapter {

  constructor() {
    this.baseUrl = `http://localhost:3000/api/v1/user_answers`
  }


  getUserAnswer() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  // want to send a post request to create a new UserAnswer in the Rails DB. Code is incomplete.
  createUserAnswer() {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
    // below sends a parsed JSON object back to the users component in createUser()
    .then(response => response.json())
  }
}
