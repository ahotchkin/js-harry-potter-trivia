class UsersAdapter {

  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/users";
  }

  async createUser(value) {
    const user = {
      username: value
    };

    // return fetch(this.baseUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     user
    //   })
    // })
    // // below sends a parsed JSON object back to the users component in createUser()
    // .then(response => response.json())

    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
    });



    // below sends a parsed JSON object back to the users component in createUser()



    return await response.json();

  }

}
