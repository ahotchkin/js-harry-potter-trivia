class DOMElements {

  // used in question, round:

  static get quiz_form() { return document.getElementById("quiz_form") };


  // used in question, round, userAnswers

  static get quiz_container() { return document.getElementById("quiz_container") };


  // used in question, userAnswers:

  static get r1() { return document.getElementById("r1") };

  static get r2() { return document.getElementById("r2") };

  static get r3() { return document.getElementById("r3") };

  static get r4() { return document.getElementById("r4") };

  static get r5() { return document.getElementById("r5") };

  static get r6() { return document.getElementById("r6") };

  static get r7() { return document.getElementById("r7") };

  // used in round, user:

  static get body() { return document.querySelector("body") };



  // used in round:

  static get start_button() { return document.getElementById("start_button") };

  // changed to intro from header since header is being used in user
  static get intro() { return document.getElementById("intro") };

  static get p() { return document.querySelector("p") };

  static get container() { return document.getElementById("container") };


  // used in user:

  static get newUserForm() { return document.getElementById("new_user_form") };

  static get userName() { return document.getElementById("username") };

  static get header() { return document.getElementById("header") };

  static get house() { return document.querySelector("#house") };

  static get main() { return document.querySelector("main") };

  // changed to textContainer from text_container
  static get textContainer() { return document.getElementById("text_container") };

  static get speaker() { return document.getElementById("speaker") };
}


// questionBindingsAndEventListeners() {
//   this.form = document.getElementById("quiz_form")
//   this.quiz_container = document.getElementById("quiz_container")
//   // should I be creating these here instead?
//   this.r1 = document.getElementById("r1")
//   this.r2 = document.getElementById("r2")
//   this.r3 = document.getElementById("r3")
//   this.r4 = document.getElementById("r4")
//   this.r5 = document.getElementById("r5")
//   this.r6 = document.getElementById("r6")
//   this.r7 = document.getElementById("r7")
// }



// roundBindingsAndEventListeners() {
//   this.start_button = document.getElementById("start_button")


// keep in round
//   // why is it not this.createUser() - with parenthesis
//   // hard bind this to the round when we execute fetchAndLoadRound, so when we access this from fetchAndLoadRound it is the Round class
//   this.start_button.addEventListener("click", this.fetchAndLoadRound.bind(this));


//   this.header = document.getElementById("intro");
//   this.body = document.querySelector("body");
//   this.p = document.querySelector("p");
//   this.form = document.getElementById("quiz_form")
//   this.quiz_container = document.getElementById("quiz_container")

// keep in round
//   this.submit_round = document.createElement("button")
//   this.submit_round.id = "submit_round"
//
//   // hard bind this to the round when we execute submitAnswers, so when we access this from submitAnswers it is the Round class
//   this.submit_round.addEventListener("click", this.submitAnswers.bind(this));


//   this.container = document.getElementById("container")


// keep in round
//   this.div = document.createElement("div")
//   this.div.id = "submit_round"
//
// }



// userBindingsAndEventListeners() {
//   this.newUserForm = document.getElementById("new_user_form");


// keep in user
//   // why is it not this.createUser() - with parenthesis
//   // hard bind this to the users when we execute createUser(), so when we access this it is the Users class
//   this.newUserForm.addEventListener("submit", this.createUser.bind(this));


//   this.username = document.getElementById("username");
//   this.header = document.getElementById("header");
//   this.body = document.querySelector("body");
//   this.house = document.querySelector("#house");
//   this.main = document.querySelector("main");
//   this.text_container = document.getElementById("text_container")
//   this.speaker = document.getElementById("speaker")
//
// }



// userAnswersBindingsAndEventListeners() {
//   this.r1 = document.getElementById("r1")
//   this.r2 = document.getElementById("r2")
//   this.r3 = document.getElementById("r3")
//   this.r4 = document.getElementById("r4")
//   this.r5 = document.getElementById("r5")
//   this.r6 = document.getElementById("r6")
//   this.r7 = document.getElementById("r7")
//   this.quiz_container = document.getElementById("quiz_container")
// }
