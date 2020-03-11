# Harry Potter Trivia

Have you spent the better part of the last two decades immersed in the Wizarding World of Harry Potter? Do you dream of having an owl mail delivery service? Are you still waiting for your Hogwarts Letter to arrive? Then this trivia game is for you.

Create a username, select your house, and begin your adventure. But be careful, if you aren't as knowledgeable as you think, Voldemort will take control of the Wizarding World as we know it.

Each round you'll have 3 chances to answer at least 5 of 7 questions correctly. Should you successfully get through all 7 rounds, you will save the Wizarding World. Should you fail, Voldemort will prevail and we'll be stuck in some weird alternate Cursed Child reality. Good luck!

## Screenshots

![](https://user-images.githubusercontent.com/33204849/76117042-0ffc4180-5fb9-11ea-920d-3ebef94f797c.png)
![](https://user-images.githubusercontent.com/33204849/76117072-1e4a5d80-5fb9-11ea-9756-84c8cbb007c8.png)
![](https://user-images.githubusercontent.com/33204849/76117119-3326f100-5fb9-11ea-9a91-bc5e75c77e8e.png)

## Demo Video

[Watch Here](https://youtu.be/rpA5Lei2CPc)

## Installation & Usage

* Clone this repo
* Download PostgreSQL for [Mac](https://postgresapp.com/downloads.html) or [Windows](https://www.postgresql.org/download/)
* In the backend directory:
  * Execute bundle install
  * Run rails db:migrate
  * Run rails db:seed to seed the database (rounds and questions)
  * Start the server with rails s
* In the main directory:
  * Execute open frontend/index.html
* In the browser:
  * Begin your Harry Potter Trivia journey

## Tests

* Run rspec to run the test suite

## Built With

* Ruby version 2.3.3

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ahotchkin/js-harry-potter-trivia. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the JS Harry Potter Trivia project’s codebases, issue trackers, chat rooms, and mailing lists is expected to follow the [code of conduct](https://github.com/ahotchkin/js-harry-potter-trivia/blob/master/CODE_OF_CONDUCT.md).
