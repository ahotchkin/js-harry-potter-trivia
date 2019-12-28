class User {
  constructor(userJSON){
    this.id = userJSON.id;
    this.username = userJSON.username
  }

  renderUser() {
    return `<li>${this.username}</li>`
  }
}
