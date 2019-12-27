class UsersAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/users"
  }

  getUsers() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  createUser(value) {
    const user {
      username: value
    }

    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
    })

    //   return fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify({
    //       user
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(json =>
    //     h1.innerHTML = `Hello ${json.user.username}`
    //     // const h1 = renderUser(json.user)
    //     document.querySelector("body").appendChild(h1))
    // }
  }
}
