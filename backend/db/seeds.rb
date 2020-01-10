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

question_1 = Question.create(:round_id => 1, :content => "This is Round 1 Question 1 right here?", :answer_a => "This is Question 1 Answer A. It is incorrect.", :answer_b => "This is Question 1 Answer B. It is correct.", :answer_c => "This is Question 1 Answer C. It is incorrect.", :answer_d => "This is Question 1 Answer D. It is incorrect", :correct_answer => "B")

question_2 = Question.create(:round_id => 1, :content => "This is Round 1 Question 2 right here?", :answer_a => "This is Question 2 Answer A. It is correct.", :answer_b => "This is Question 2 Answer B. It is incorrect.", :answer_c => "This is Question 2 Answer C. It is incorrect.", :answer_d => "This is Question 2 Answer D. It is incorrect", :correct_answer => "A")

question_3 = Question.create(:round_id => 1, :content => "This is Round 1 Question 3 right here?", :answer_a => "This is Question 3 Answer A. It is incorrect.", :answer_b => "This is Question 3 Answer B. It is incorrect.", :answer_c => "This is Question 3 Answer C. It is incorrect.", :answer_d => "This is Question 3 Answer D. It is correct", :correct_answer => "D")

question_4 = Question.create(:round_id => 1, :content => "This is Round 1 Question 4 right here?", :answer_a => "This is Question 4 Answer A. It is correct.", :answer_b => "This is Question 4 Answer B. It is incorrect.", :answer_c => "This is Question 4 Answer C. It is incorrect.", :answer_d => "This is Question 4 Answer D. It is incorrect", :correct_answer => "A")

question_5 = Question.create(:round_id => 1, :content => "This is Round 1 Question 5 right here?", :answer_a => "This is Question 5 Answer A. It is incorrect.", :answer_b => "This is Question 5 Answer B. It is incorrect.", :answer_c => "This is Question 5 Answer C. It is correct.", :answer_d => "This is Question 5 Answer D. It is incorrect", :correct_answer => "C")

question_6 = Question.create(:round_id => 1, :content => "This is Round 1 Question 6 right here?", :answer_a => "This is Question 6 Answer A. It is incorrect.", :answer_b => "This is Question 6 Answer B. It is incorrect.", :answer_c => "This is Question 6 Answer C. It is correct.", :answer_d => "This is Question 6 Answer D. It is incorrect", :correct_answer => "C")

question_7 = Question.create(:round_id => 1, :content => "This is Round 1 Question 7 right here?", :answer_a => "This is Question 7 Answer A. It is incorrect.", :answer_b => "This is Question 7 Answer B. It is correct.", :answer_c => "This is Question 7 Answer C. It is incorrect.", :answer_d => "This is Question 7 Answer D. It is incorrect", :correct_answer => "B")


question_8 = Question.create(:round_id => 2, :content => "This is Round 2 Question 1 right here?", :answer_a => "This is Question 1 Answer A. It is incorrect.", :answer_b => "This is Question 1 Answer B. It is incorrect.", :answer_c => "This is Question 1 Answer C. It is correct.", :answer_d => "This is Question 1 Answer D. It is incorrect", :correct_answer => "C")

question_9 = Question.create(:round_id => 2, :content => "This is Round 2 Question 2 right here?", :answer_a => "This is Question 2 Answer A. It is incorrect.", :answer_b => "This is Question 2 Answer B. It is incorrect.", :answer_c => "This is Question 2 Answer C. It is incorrect.", :answer_d => "This is Question 2 Answer D. It is correct", :correct_answer => "D")

question_10 = Question.create(:round_id => 2, :content => "This is Round 2 Question 3 right here?", :answer_a => "This is Question 3 Answer A. It is incorrect.", :answer_b => "This is Question 3 Answer B. It is correct.", :answer_c => "This is Question 3 Answer C. It is incorrect.", :answer_d => "This is Question 3 Answer D. It is incorrect", :correct_answer => "B")

question_11 = Question.create(:round_id => 2, :content => "This is Round 2 Question 4 right here?", :answer_a => "This is Question 4 Answer A. It is incorrect.", :answer_b => "This is Question 4 Answer B. It is incorrect.", :answer_c => "This is Question 4 Answer C. It is incorrect.", :answer_d => "This is Question 4 Answer D. It is correct", :correct_answer => "D")

question_12 = Question.create(:round_id => 2, :content => "This is Round 2 Question 5 right here?", :answer_a => "This is Question 5 Answer A. It is correct.", :answer_b => "This is Question 5 Answer B. It is incorrect.", :answer_c => "This is Question 5 Answer C. It is incorrect.", :answer_d => "This is Question 5 Answer D. It is incorrect", :correct_answer => "A")

question_13 = Question.create(:round_id => 2, :content => "This is Round 2 Question 6 right here?", :answer_a => "This is Question 6 Answer A. It is incorrect.", :answer_b => "This is Question 6 Answer B. It is correct.", :answer_c => "This is Question 6 Answer C. It is incorrect.", :answer_d => "This is Question 6 Answer D. It is incorrect", :correct_answer => "B")

question_14 = Question.create(:round_id => 2, :content => "This is Round 2 Question 7 right here?", :answer_a => "This is Question 7 Answer A. It is incorrect.", :answer_b => "This is Question 7 Answer B. It is incorrect.", :answer_c => "This is Question 7 Answer C. It is incorrect.", :answer_d => "This is Question 7 Answer D. It is correct", :correct_answer => "D")


question_15 = Question.create(:round_id => 3, :content => "This is Round 3 Question 1 right here?", :answer_a => "This is Question 1 Answer A. It is incorrect.", :answer_b => "This is Question 1 Answer B. It is correct.", :answer_c => "This is Question 1 Answer C. It is incorrect.", :answer_d => "This is Question 1 Answer D. It is incorrect", :correct_answer => "B")

question_16 = Question.create(:round_id => 3, :content => "This is Round 3 Question 2 right here?", :answer_a => "This is Question 2 Answer A. It is incorrect.", :answer_b => "This is Question 2 Answer B. It is correct.", :answer_c => "This is Question 2 Answer C. It is incorrect.", :answer_d => "This is Question 2 Answer D. It is incorrect", :correct_answer => "B")

question_17 = Question.create(:round_id => 3, :content => "This is Round 3 Question 3 right here?", :answer_a => "This is Question 3 Answer A. It is incorrect.", :answer_b => "This is Question 3 Answer B. It is incorrect.", :answer_c => "This is Question 3 Answer C. It is correct.", :answer_d => "This is Question 3 Answer D. It is incorrect", :correct_answer => "C")

question_18 = Question.create(:round_id => 3, :content => "This is Round 3 Question 4 right here?", :answer_a => "This is Question 4 Answer A. It is correct.", :answer_b => "This is Question 4 Answer B. It is incorrect.", :answer_c => "This is Question 4 Answer C. It is incorrect.", :answer_d => "This is Question 4 Answer D. It is incorrect", :correct_answer => "A")

question_19 = Question.create(:round_id => 3, :content => "This is Round 3 Question 5 right here?", :answer_a => "This is Question 5 Answer A. It is incorrect.", :answer_b => "This is Question 5 Answer B. It is incorrect.", :answer_c => "This is Question 5 Answer C. It is correct.", :answer_d => "This is Question 5 Answer D. It is incorrect", :correct_answer => "C")

question_20 = Question.create(:round_id => 3, :content => "This is Round 3 Question 6 right here?", :answer_a => "This is Question 6 Answer A. It is incorrect.", :answer_b => "This is Question 6 Answer B. It is incorrect.", :answer_c => "This is Question 6 Answer C. It is incorrect.", :answer_d => "This is Question 6 Answer D. It is correct", :correct_answer => "D")

question_21 = Question.create(:round_id => 3, :content => "This is Round 3 Question 7 right here?", :answer_a => "This is Question 7 Answer A. It is incorrect.", :answer_b => "This is Question 7 Answer B. It is correct.", :answer_c => "This is Question 7 Answer C. It is incorrect.", :answer_d => "This is Question 7 Answer D. It is incorrect", :correct_answer => "B")


question_22 = Question.create(:round_id => 4, :content => "This is Round 4 Question 1 right here?", :answer_a => "This is Question 1 Answer A. It is correct.", :answer_b => "This is Question 1 Answer B. It is incorrect.", :answer_c => "This is Question 1 Answer C. It is incorrect.", :answer_d => "This is Question 1 Answer D. It is incorrect", :correct_answer => "A")

question_23 = Question.create(:round_id => 4, :content => "This is Round 4 Question 2 right here?", :answer_a => "This is Question 2 Answer A. It is incorrect.", :answer_b => "This is Question 2 Answer B. It is incorrect.", :answer_c => "This is Question 2 Answer C. It is incorrect.", :answer_d => "This is Question 2 Answer D. It is correct", :correct_answer => "D")

question_24 = Question.create(:round_id => 4, :content => "This is Round 4 Question 3 right here?", :answer_a => "This is Question 3 Answer A. It is incorrect.", :answer_b => "This is Question 3 Answer B. It is incorrect.", :answer_c => "This is Question 3 Answer C. It is incorrect.", :answer_d => "This is Question 3 Answer D. It is correct", :correct_answer => "D")

question_25 = Question.create(:round_id => 4, :content => "This is Round 4 Question 4 right here?", :answer_a => "This is Question 4 Answer A. It is incorrect.", :answer_b => "This is Question 4 Answer B. It is incorrect.", :answer_c => "This is Question 4 Answer C. It is correct.", :answer_d => "This is Question 4 Answer D. It is incorrect", :correct_answer => "C")

question_26 = Question.create(:round_id => 4, :content => "This is Round 4 Question 5 right here?", :answer_a => "This is Question 5 Answer A. It is correct.", :answer_b => "This is Question 5 Answer B. It is incorrect.", :answer_c => "This is Question 5 Answer C. It is incorrect.", :answer_d => "This is Question 5 Answer D. It is incorrect", :correct_answer => "A")

question_27 = Question.create(:round_id => 4, :content => "This is Round 4 Question 6 right here?", :answer_a => "This is Question 6 Answer A. It is incorrect.", :answer_b => "This is Question 6 Answer B. It is incorrect.", :answer_c => "This is Question 6 Answer C. It is correct.", :answer_d => "This is Question 6 Answer D. It is incorrect", :correct_answer => "C")

question_28 = Question.create(:round_id => 4, :content => "This is Round 4 Question 7 right here?", :answer_a => "This is Question 7 Answer A. It is incorrect.", :answer_b => "This is Question 7 Answer B. It is correct.", :answer_c => "This is Question 7 Answer C. It is incorrect.", :answer_d => "This is Question 7 Answer D. It is incorrect", :correct_answer => "B")


question_29 = Question.create(:round_id => 5, :content => "This is Round 5 Question 1 right here?", :answer_a => "This is Question 1 Answer A. It is incorrect.", :answer_b => "This is Question 1 Answer B. It is incorrect.", :answer_c => "This is Question 1 Answer C. It is incorrect.", :answer_d => "This is Question 1 Answer D. It is correct", :correct_answer => "D")

question_30 = Question.create(:round_id => 5, :content => "This is Round 5 Question 2 right here?", :answer_a => "This is Question 2 Answer A. It is incorrect.", :answer_b => "This is Question 2 Answer B. It is incorrect.", :answer_c => "This is Question 2 Answer C. It is correct.", :answer_d => "This is Question 2 Answer D. It is incorrect", :correct_answer => "C")

question_31 = Question.create(:round_id => 5, :content => "This is Round 5 Question 3 right here?", :answer_a => "This is Question 3 Answer A. It is correct.", :answer_b => "This is Question 3 Answer B. It is incorrect.", :answer_c => "This is Question 3 Answer C. It is incorrect.", :answer_d => "This is Question 3 Answer D. It is incorrect", :correct_answer => "A")

question_32 = Question.create(:round_id => 5, :content => "This is Round 5 Question 4 right here?", :answer_a => "This is Question 4 Answer A. It is incorrect.", :answer_b => "This is Question 4 Answer B. It is incorrect.", :answer_c => "This is Question 4 Answer C. It is correct.", :answer_d => "This is Question 4 Answer D. It is incorrect", :correct_answer => "C")

question_33 = Question.create(:round_id => 5, :content => "This is Round 5 Question 5 right here?", :answer_a => "This is Question 5 Answer A. It is incorrect.", :answer_b => "This is Question 5 Answer B. It is incorrect.", :answer_c => "This is Question 5 Answer C. It is incorrect.", :answer_d => "This is Question 5 Answer D. It is correct", :correct_answer => "D")

question_34 = Question.create(:round_id => 5, :content => "This is Round 5 Question 6 right here?", :answer_a => "This is Question 6 Answer A. It is correct.", :answer_b => "This is Question 6 Answer B. It is incorrect.", :answer_c => "This is Question 6 Answer C. It is incorrect.", :answer_d => "This is Question 6 Answer D. It is incorrect", :correct_answer => "A")

question_35 = Question.create(:round_id => 5, :content => "This is Round 5 Question 7 right here?", :answer_a => "This is Question 7 Answer A. It is incorrect.", :answer_b => "This is Question 7 Answer B. It is incorrect.", :answer_c => "This is Question 7 Answer C. It is correct.", :answer_d => "This is Question 7 Answer D. It is incorrect", :correct_answer => "C")


question_36 = Question.create(:round_id => 6, :content => "This is Round 6 Question 1 right here?", :answer_a => "This is Question 1 Answer A. It is incorrect.", :answer_b => "This is Question 1 Answer B. It is correct.", :answer_c => "This is Question 1 Answer C. It is incorrect.", :answer_d => "This is Question 1 Answer D. It is incorrect", :correct_answer => "B")

question_37 = Question.create(:round_id => 6, :content => "This is Round 6 Question 2 right here?", :answer_a => "This is Question 2 Answer A. It is incorrect.", :answer_b => "This is Question 2 Answer B. It is incorrect.", :answer_c => "This is Question 2 Answer C. It is incorrect.", :answer_d => "This is Question 2 Answer D. It is correct", :correct_answer => "D")

question_38 = Question.create(:round_id => 6, :content => "This is Round 6 Question 3 right here?", :answer_a => "This is Question 3 Answer A. It is incorrect.", :answer_b => "This is Question 3 Answer B. It is incorrect.", :answer_c => "This is Question 3 Answer C. It is incorrect.", :answer_d => "This is Question 3 Answer D. It is correct", :correct_answer => "D")

question_39 = Question.create(:round_id => 6, :content => "This is Round 6 Question 4 right here?", :answer_a => "This is Question 4 Answer A. It is correct.", :answer_b => "This is Question 4 Answer B. It is incorrect.", :answer_c => "This is Question 4 Answer C. It is incorrect.", :answer_d => "This is Question 4 Answer D. It is incorrect", :correct_answer => "A")

question_40 = Question.create(:round_id => 6, :content => "This is Round 6 Question 5 right here?", :answer_a => "This is Question 5 Answer A. It is incorrect.", :answer_b => "This is Question 5 Answer B. It is correct.", :answer_c => "This is Question 5 Answer C. It is incorrect.", :answer_d => "This is Question 5 Answer D. It is incorrect", :correct_answer => "B")

question_41 = Question.create(:round_id => 6, :content => "This is Round 6 Question 6 right here?", :answer_a => "This is Question 6 Answer A. It is correct.", :answer_b => "This is Question 6 Answer B. It is incorrect.", :answer_c => "This is Question 6 Answer C. It is incorrect.", :answer_d => "This is Question 6 Answer D. It is incorrect", :correct_answer => "A")

question_42 = Question.create(:round_id => 6, :content => "This is Round 6 Question 7 right here?", :answer_a => "This is Question 7 Answer A. It is incorrect.", :answer_b => "This is Question 7 Answer B. It is incorrect.", :answer_c => "This is Question 7 Answer C. It is incorrect.", :answer_d => "This is Question 7 Answer D. It is correct", :correct_answer => "D")


question_43 = Question.create(:round_id => 7, :content => "This is Round 7 Question 1 right here?", :answer_a => "This is Question 1 Answer A. It is incorrect.", :answer_b => "This is Question 1 Answer B. It is incorrect.", :answer_c => "This is Question 1 Answer C. It is correct.", :answer_d => "This is Question 1 Answer D. It is incorrect", :correct_answer => "C")

question_44 = Question.create(:round_id => 7, :content => "This is Round 7 Question 2 right here?", :answer_a => "This is Question 2 Answer A. It is correct.", :answer_b => "This is Question 2 Answer B. It is incorrect.", :answer_c => "This is Question 2 Answer C. It is incorrect.", :answer_d => "This is Question 2 Answer D. It is incorrect", :correct_answer => "A")

question_45 = Question.create(:round_id => 7, :content => "This is Round 7 Question 3 right here?", :answer_a => "This is Question 3 Answer A. It is incorrect.", :answer_b => "This is Question 3 Answer B. It is incorrect.", :answer_c => "This is Question 3 Answer C. It is correct.", :answer_d => "This is Question 3 Answer D. It is incorrect", :correct_answer => "C")

question_46 = Question.create(:round_id => 7, :content => "This is Round 7 Question 4 right here?", :answer_a => "This is Question 4 Answer A. It is incorrect.", :answer_b => "This is Question 4 Answer B. It is correct.", :answer_c => "This is Question 4 Answer C. It is incorrect.", :answer_d => "This is Question 4 Answer D. It is incorrect", :correct_answer => "B")

question_47 = Question.create(:round_id => 7, :content => "This is Round 7 Question 5 right here?", :answer_a => "This is Question 5 Answer A. It is correct.", :answer_b => "This is Question 5 Answer B. It is incorrect.", :answer_c => "This is Question 5 Answer C. It is incorrect.", :answer_d => "This is Question 5 Answer D. It is incorrect", :correct_answer => "A")

question_48 = Question.create(:round_id => 7, :content => "This is Round 7 Question 6 right here?", :answer_a => "This is Question 6 Answer A. It is incorrect.", :answer_b => "This is Question 6 Answer B. It is incorrect.", :answer_c => "This is Question 6 Answer C. It is incorrect.", :answer_d => "This is Question 6 Answer D. It is correct", :correct_answer => "D")

question_49 = Question.create(:round_id => 7, :content => "This is Round 7 Question 7 right here?", :answer_a => "This is Question 7 Answer A. It is incorrect.", :answer_b => "This is Question 7 Answer B. It is correct.", :answer_c => "This is Question 7 Answer C. It is incorrect.", :answer_d => "This is Question 7 Answer D. It is incorrect", :correct_answer => "B")
