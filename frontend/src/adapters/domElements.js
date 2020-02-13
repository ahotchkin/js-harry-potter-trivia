class DOMElements {

  // used in question, round. Replaced.

  static get quiz_form() { return document.getElementById("quiz_form") };


  // used in question, round, userAnswers. Replaced.

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

  // changed to intro from header since header is being used in user. Can I change to something like title?
  static get intro() { return document.getElementById("intro") };

  static get p() { return document.querySelector("p") };

  static get container() { return document.getElementById("container") };


  // used in user:

  static get newUserForm() { return document.getElementById("new_user_form") };

  // Not working in user.js
  static get userName() { return document.getElementById("username") };

  static get header() { return document.getElementById("header") };

  // can this be getElementById???
  static get house() { return document.querySelector("#house") };

  // static get main() { return document.querySelector("main") };

  // changed to textContainer from text_container
  static get textContainer() { return document.getElementById("text_container") };

  static get speaker() { return document.getElementById("speaker") };
}
