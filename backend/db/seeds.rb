# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

round_1 = Round.create(:title => "Round 1")
round_2 = Round.create(:title => "Round 2")
round_3 = Round.create(:title => "Round 3")
round_4 = Round.create(:title => "Round 4")
round_5 = Round.create(:title => "Round 5")
round_6 = Round.create(:title => "Round 6")
round_7 = Round.create(:title => "Round 7")

question_1 = Question.create(:round_id => 1, :content => "This is the question right here?", :answer_a => "This is answer A. It is incorrect.", :answer_b => "This is answer B. It is correct.", :answer_c => "This is answer C. It is incorrect.", :answer_d => "This is answer D. It is incorrect", :correct_answer => "B")

question_2 = Question.create(:round_id => 1, :content => "This is the question right here?", :answer_a => "This is answer A. It is correct.", :answer_b => "This is answer B. It is incorrect.", :answer_c => "This is answer C. It is incorrect.", :answer_d => "This is answer D. It is incorrect", :correct_answer => "A")

question_3 = Question.create(:round_id => 1, :content => "This is the question right here?", :answer_a => "This is answer A. It is incorrect.", :answer_b => "This is answer B. It is incorrect.", :answer_c => "This is answer C. It is incorrect.", :answer_d => "This is answer D. It is correct", :correct_answer => "D")

question_4 = Question.create(:round_id => 1, :content => "This is the question right here?", :answer_a => "This is answer A. It is correct.", :answer_b => "This is answer B. It is incorrect.", :answer_c => "This is answer C. It is incorrect.", :answer_d => "This is answer D. It is incorrect", :correct_answer => "A")

question_5 = Question.create(:round_id => 1, :content => "This is the question right here?", :answer_a => "This is answer A. It is incorrect.", :answer_b => "This is answer B. It is incorrect.", :answer_c => "This is answer C. It is correct.", :answer_d => "This is answer D. It is incorrect", :correct_answer => "C")
