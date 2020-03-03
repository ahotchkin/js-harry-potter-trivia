class UserRoundsAdapter {

  constructor() {
    this.baseUrl = `http://localhost:3000/api/v1/user_rounds`;
  }

  getUserRounds() {
    return fetch(this.baseUrl).then(response => response.json());
  }

  createUserRound(userRound) {
    const user_round = {
      user_id: userRound.user_id,
      round_id: userRound.round_id,
      attempts: userRound.attempts
    };

    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          user_round
        })
      })
    .then(response => response.json())
  }

  updateUserRound(userRound, id) {
    // const user_round = {
    //   user_id: userRound.user_id,
    //   round_id: userRound.round_id,
    //   attempts: userRound.attempts += 1
    // };


    // let attempts = userRound.attempts += 1
    // can this be ++ ?
    let attempts = (userRound.attempts += 1)

    // console.log(user_round)


    return fetch(this.baseUrl + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        attempts: userRound.attempts
        // user_round
      })
    })
    .then(response => response.json())

  }



//   function newToy(toyName, imageUrl) {
  //   return fetch(toysUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: toyName,
  //       image: imageUrl,
  //       likes: 0
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(json => renderToy(json));
// }
//
// function increaseLikes(toy) {
//   let p = document.querySelectorAll(".card p")[toy.id - 1]
//   let toyLikes = toy.likes += 1
//
//   fetch(toysUrl + `/${toy.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       likes: toyLikes
//     })
//   })
//   .then(response => response.json())
//   .then((json => {
//     p.innerHTML = `${toyLikes} Likes`;
//   }))
// }

}
