class UsersAdapter {

  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/users";
  }

  async createUser(value) {
    const user = {
      username: value
    };

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
    
    return await response.json();
  }

}
