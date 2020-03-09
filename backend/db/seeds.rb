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

question_1 = Question.create(:round_id => 1, :question_number => 1, :content => "When is Harry’s birthday?", :answer_a => "July 31, 1980", :answer_b => "October 31, 1980", :answer_c => "July 31, 1981", :answer_d => "October 31, 1981", :correct_answer => "A")

question_2 = Question.create(:round_id => 1, :question_number => 2, :content => "Where is the boa constrictor from at the zoo?", :answer_a => "Argentina", :answer_b => "Columbia", :answer_c => "Brazil", :answer_d => "Venezuela", :correct_answer => "C")

question_3 = Question.create(:round_id => 1, :question_number => 3, :content => "When did Voldemort kill Harry’s parents?", :answer_a => "July 31, 1980", :answer_b => "October 31, 1980", :answer_c => "July 31, 1981", :answer_d => "October 31, 1981", :correct_answer => "D")

question_4 = Question.create(:round_id => 1, :question_number => 4, :content => "Where does Harry first learn about Nicolas Flamel?", :answer_a => "A Chocolate Frog card", :answer_b => "Hagrid", :answer_c => "A History of Magic", :answer_d => "Great Wizards of the Twentieth Century", :correct_answer => "A")

question_5 = Question.create(:round_id => 1, :question_number => 5, :content => "Who saves Harry from Voldemort in the Forbidden Forrest?", :answer_a => "Bane", :answer_b => "Hagrid", :answer_c => "Firenze", :answer_d => "Ronan", :correct_answer => "C")

question_6 = Question.create(:round_id => 1, :question_number => 6, :content => "How does Quirrell find out how to get past Fluffy?", :answer_a => "Hagrid lets it slip after dinner one night, over a glass of mead", :answer_b => "Hagrid tells him over drinks, in exchange for a dragon egg", :answer_c => "Hagrid accidentally mentions it in conversation, no alcohol is involved", :answer_d => "Hagrid tells him at the Hog’s Head, where a disguised Quirrell keeps buying him drinks", :correct_answer => "D")

question_7 = Question.create(:round_id => 1, :question_number => 7, :content => "What is one bit of wisdom Dumbledore imparts to Harry during his 1st year at Hogwarts?", :answer_a => "Indifference and neglect often do much more damage than outright dislike.", :answer_b => "To the well-organized mind, death is but the next great adventure.", :answer_c => "Understanding is the first step to acceptance, and only with acceptance can there be recovery.", :answer_d => "It is my belief that the truth is generally preferable to lies.", :correct_answer => "B")



question_8 = Question.create(:round_id => 2, :question_number => 1, :content => "Which of the following is not one of the ways Dobby tries to “save” Harry?", :answer_a => "Dobby closes the platform so Harry can’t get on the Hogwarts Express", :answer_b => "Dobby intercepts all of Harry’s letters so he won’t want to return to school", :answer_c => "Dobby sends Harry to school in a flying car in an effort to get him expelled", :answer_d => "Dobby bewitches a Bludger to chase Harry around the Quidditch pitch", :correct_answer => "C")

question_9 = Question.create(:round_id => 2, :question_number => 2, :content => "Who is the snake going after at the duel when Harry tells it to back off?", :answer_a => "Ernie Macmillan", :answer_b => "Seamus Finnigan", :answer_c => "Lavender Brown", :answer_d => "Justin Finch-Fletchley", :correct_answer => "D")

question_10 = Question.create(:round_id => 2, :question_number => 3, :content => "Who are Harry, Ron, and Hermione meant to impersonate with the Polyjuice Potion?", :answer_a => "Harry as Vincent Crabbe, Ron as Gregory Goyle, Hermione as Millicent Bulstrode", :answer_b => "Harry as Gregory Goyle, Ron as Vincent Crabbe, Hermione as Millicent Bulstrode", :answer_c => "Harry as Vincent Crabbe, Ron as Gregory Goyle, Hermione as Pansy Parkinson", :answer_d => "Harry as Gregory Goyle, Ron as Vincent Crabbe, Hermione as Pansy Parkinson", :correct_answer => "B")

question_11 = Question.create(:round_id => 2, :question_number => 4, :content => "How many years have passed since the last time the Chamber of Secrets was opened?", :answer_a => "25 years", :answer_b => "50 years", :answer_c => "75 years", :answer_d => "100 years", :correct_answer => "B")

question_12 = Question.create(:round_id => 2, :question_number => 5, :content => "Which victim is correctly paired with his/her petrification circumstance?", :answer_a => "Colin Creevey saw the Basilisk through his camera", :answer_b => "Hermione saw the Basilisk’s reflection in water on the floor", :answer_c => "Ernie Macmillan saw the Basilisk through Nearly Headless Nick", :answer_d => "Nearly Headless Nick saw the Basilisk’s reflection in a mirror", :correct_answer => "A")

question_13 = Question.create(:round_id => 2, :question_number => 6, :content => "Who accompanies Harry and Ron down in the Chamber of Secrets?", :answer_a => "Hermione", :answer_b => "Professor McGonagall", :answer_c => "Professor Lockhart", :answer_d => "Hagrid", :correct_answer => "C")

question_14 = Question.create(:round_id => 2, :question_number => 7, :content => "What is one bit of wisdom Dumbledore imparts to Harry during his 2nd year at Hogwarts?", :answer_a => "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", :answer_b => "It does not do to dwell on dreams and forget to live.", :answer_c => "Always use the proper name for things. Fear of a name increases fear of the thing itself.", :answer_d => "It is our choices that show what we truly are, far more than our abilities.", :correct_answer => "D")



question_15 = Question.create(:round_id => 3, :question_number => 1, :content => "At what point is Harry no longer able to contain his anger towards Aunt Marge?", :answer_a => "When Aunt Marge showers Dudley with money and presents, but neglects to give Harry anything", :answer_b => "When Aunt Marge calls Harry a nasty little liar and a burden, and insists his parents died in a car crash", :answer_c => "When Aunt Marge tells Harry that if he had been left on her doorstep she would have dumped him at an orphanage", :answer_d => "When Aunt Marge explains how Harry turned out by saying if there’s something wrong with the bitch, there’ll be something wrong with the pup", :correct_answer => "B")

question_16 = Question.create(:round_id => 3, :question_number => 2, :content => "How does Harry hail the Knight Bus?", :answer_a => "By sticking his non-wand hand in the air", :answer_b => "By sticking is wand hand in the air", :answer_c => "By booking a ticket in advance", :answer_d => "By selecting the XXXL option in the Uber app", :correct_answer => "B")

question_17 = Question.create(:round_id => 3, :question_number => 3, :content => "Why was Sirius Black convicted?", :answer_a => "He accidentally killed 12 muggles with an explosion when trying to kill Peter Pettigrew", :answer_b => "He betrayed Lily and James Potter as their secret keeper", :answer_c => "He was framed for killing Peter Pettigrew and 12 muggles", :answer_d => "He was a Death Eater and was sentenced without a trial", :correct_answer => "C")

question_18 = Question.create(:round_id => 3, :question_number => 4, :content => "Who were the Marauders and what were their aliases?", :answer_a => "James Potter as Prongs, Sirius Black as Padfoot, Remus Lupin as Moony, Peter Pettigrew as Wormtail", :answer_b => "James Potter as Padfoot, Sirius Black as Snuffles, Remus Lupin as Moony, Peter Pettigrew as Wormtail", :answer_c => "James Potter as Prongs, Sirius Black as Padfoot, Alastor Moody as Mad-Eye, Peter Pettigrew as Scabbers", :answer_d => "James Potter as Padfoot, Sirius Black as Snuffles, Remus Lupin as Moony, Alastor Moody as Mad-Eye", :correct_answer => "A")

question_19 = Question.create(:round_id => 3, :question_number => 5, :content => "Who tried to set a trap for Snape by luring him to the Shrieking Shack?", :answer_a => "Remus Lupin", :answer_b => "James Potter", :answer_c => "Sirius Black", :answer_d => "Peter Pettigrew", :correct_answer => "C")

question_20 = Question.create(:round_id => 3, :question_number => 6, :content => "Whose lives are saved with the use of the Time-Turner?", :answer_a => "Remus Lupin and Buckbeak", :answer_b => "Sirius Black and Peter Pettigrew", :answer_c => "Remus Lupin and Peter Pettigrew", :answer_d => "Sirius Black and Buckbeak", :correct_answer => "D")

question_21 = Question.create(:round_id => 3, :question_number => 7, :content => "What is one bit of wisdom Dumbledore imparts to Harry during his 3rd year at Hogwarts?", :answer_a => "You think the dead we have loved ever truly leave us? You think that we don’t recall them more clearly than ever in times of great trouble?", :answer_b => "I will only truly have left this school when none here are loyal to me.", :answer_c => "Numbing the pain for a while will make it worse when you finally feel it.", :answer_d => "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.", :correct_answer => "A")



question_22 = Question.create(:round_id => 4, :question_number => 1, :content => "Who casts the Dark Mark at the Quidditch World Cup?", :answer_a => "Barty Crouch Jr.", :answer_b => "Winky the house elf", :answer_c => "Barty Crouch Sr.", :answer_d => "Lucius Malfoy", :correct_answer => "A")

question_23 = Question.create(:round_id => 4, :question_number => 2, :content => "Which dragon does each Triwizard Champion draw out of the bag for the first task?", :answer_a => "Fleur draws the Chinese Fireball, Krum draws the Swedish Short-Snout, Cedric draws the Hungarian Horntail, and Harry draws the Welsh Green", :answer_b => "Fleur draws the Swedish Short-Snout, Krum draws the Hungarian Horntail, Cedric draws the Welsh Green, and Harry draws the Chinese Fireball", :answer_c => "Fleur draws the Hungarian Horntail, Krum draws the Welsh Green, Cedric draws the Chinese Fireball, and Harry draws the Swedish Short-Snout", :answer_d => "Fleur draws the Welsh Green, Krum draws the Chinese Fireball, Cedric draws the Swedish Short-Snout, and Harry draws the Hungarian Horntail", :correct_answer => "D")

question_24 = Question.create(:round_id => 4, :question_number => 3, :content => "With whom do Harry and Ron attend the Yule Ball, respectively?", :answer_a => "Cho Change and Lavender Brown", :answer_b => "Padma Patil and Parvati Patil", :answer_c => "Ginny Weasley and Lavender Brown", :answer_d => "Parvati Patil and Padma Patil", :correct_answer => "D")

question_25 = Question.create(:round_id => 4, :question_number => 4, :content => "What is the first memory Harry witnesses in the Pensieve?", :answer_a => "Dumbledore’s memory of Barty Crouch Jr.’s trial at the Ministry of Magic", :answer_b => "Dumbledore’s memory of Ludo Bagman’s trial at the Ministry of Magic", :answer_c => "Dumbledore’s memory of Igor Karkaroff’s trial at the Ministry of Magic", :answer_d => "Dumbledore’s memory of Barty Crouch Jr. and Bellatrix Lestrange’s trial at the Ministry of Magic", :correct_answer => "C")

question_26 = Question.create(:round_id => 4, :question_number => 5, :content => "In what order do the Triwizard Champions enter the maze?", :answer_a => "Harry and Cedric enter first, Krum enters second, Fleur enters third", :answer_b => "Fleur enters first, Cedric enters second, Harry enters third, Krum enters fourth", :answer_c => "Krum enters first, Harry enters second, Fleur enters third, Cedric enters fourth", :answer_d => "Harry and Krum enter first, Cedric enters second, Fleur enters third", :correct_answer => "A")

question_27 = Question.create(:round_id => 4, :question_number => 6, :content => "What are the components used to resurrect Voldemort?", :answer_a => "Flesh of the father, bone of the servant, blood of the enemy", :answer_b => "Bone of the father, blood of the servant, flesh of the enemy", :answer_c => "Bone of the father, flesh of the servant, blood of the enemy", :answer_d => "Blood of the father, flesh of the servant, bone of the enemy", :correct_answer => "C")

question_28 = Question.create(:round_id => 4, :question_number => 7, :content => "What is one bit of wisdom Dumbledore imparts to Harry during his 4th year at Hogwarts?", :answer_a => "Trust me, the time may come when you will be very glad you saved Pettigrew’s life.", :answer_b => "Curiosity is not a sin. But we should exercise caution with our curiosity.", :answer_c => "The consequences of our actions are always so complicated, so diverse, that predicting the future is a very difficult business indeed.", :answer_d => "To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.", :correct_answer => "B")



question_29 = Question.create(:round_id => 5, :question_number => 1, :content => "What is the code needed to enter the Ministry of Magic via phone booth?", :answer_a => "62446", :answer_b => "64224", :answer_c => "64226", :answer_d => "62442", :correct_answer => "D")

question_30 = Question.create(:round_id => 5, :question_number => 2, :content => "Who can see the Thestrals?", :answer_a => "Harry", :answer_b => "Harry and Neville", :answer_c => "Harry, Neville, and Luna", :answer_d => "Harry and Luna", :correct_answer => "C")

question_31 = Question.create(:round_id => 5, :question_number => 3, :content => "What line is Harry forced to write until it “sinks in” during detention with Umbridge?", :answer_a => "I must not tell lies", :answer_b => "I must not be late", :answer_c => "I must not talk back", :answer_d => "I must not get angry and throw a fit because no one believes me that Voldemort is back", :correct_answer => "A")

question_32 = Question.create(:round_id => 5, :question_number => 4, :content => "Who snitches on Dumbledore’s Army?", :answer_a => "Cho Chang", :answer_b => "Zacharias Smith", :answer_c => "Marietta Edgecombe", :answer_d => "Michael Corner", :correct_answer => "C")

question_33 = Question.create(:round_id => 5, :question_number => 5, :content => "After entering the circular room in the Department of Mysteries, what is the first room Harry and Co. enter?", :answer_a => "The Death Chamber (the one with the Veil)", :answer_b => "The Brain Room (the one with all the brains…obviously)", :answer_c => "The Hall of Prophecy (the one with all the prophecies…obviously)", :answer_d => "The Time Room (the one with all the clocks…obviously)", :correct_answer => "B")

question_34 = Question.create(:round_id => 5, :question_number => 6, :content => "Which Unforgivable Curse does Harry try to use on Bellatrix after she kills Sirius? ", :answer_a => "Imperio", :answer_b => "Crucio", :answer_c => "Avada Kedavra", :answer_d => "Sectumsempra", :correct_answer => "B")

question_35 = Question.create(:round_id => 5, :question_number => 7, :content => "What is one bit of wisdom Dumbledore imparts to Harry during his 5th year at Hogwarts?", :answer_a => "Age is foolish and forgetful when it underestimates youth.", :answer_b => "You know, I sometimes think we Sort too soon.", :answer_c => "People find it far easier to forgive others for being wrong than being right.", :answer_d => "Youth cannot know how age thinks and feels. But old men are guilty if they forget what it was to be young.", :correct_answer => "D")



question_36 = Question.create(:round_id => 6, :question_number => 1, :content => "Who is not invited into Professor Slughorn’s compartment on the Hogwarts Express?", :answer_a => "Neville Longbottom", :answer_b => "Hermione Granger", :answer_c => "Ginny Weasley", :answer_d => "Cormac McLaggen", :correct_answer => "B")

question_37 = Question.create(:round_id => 6, :question_number => 2, :content => "What is the correct order of Defense Against the Dark Arts professors since Harry’s 1st year?", :answer_a => "Professor Quirrell, Professor Lockhart, Professor Moody, Professor Lupin, Professor Umbridge, Professor Snape", :answer_b => "Professor Quirrell, Professor Lupin, Professor Lockhart, Professor Moody, Professor Umbridge, Professor Snape", :answer_c => "Professor Quirrell, Professor Lockhart, Professor Lupin, Professor Umbridge, Professor Moody, Professor Snape", :answer_d => "Professor Quirrell, Professor Lockhart, Professor Lupin, Professor Moody, Professor Umbridge, Professor Snape", :correct_answer => "D")

question_38 = Question.create(:round_id => 6, :question_number => 3, :content => "Who is given a cursed necklace at the Three Broomsticks to deliver to Dumbledore?", :answer_a => "Alicia Spinnet", :answer_b => "Angelina Johnson", :answer_c => "Lavender Brown", :answer_d => "Katie Bell", :correct_answer => "D")

question_39 = Question.create(:round_id => 6, :question_number => 4, :content => "What are the three D’s of Apparition?", :answer_a => "Destination, Determination, Deliberation", :answer_b => "Deliberation, Dedication, Destination", :answer_c => "Dedication, Deliberation, Direction", :answer_d => "Direction, Declaration, Determination", :correct_answer => "A")

question_40 = Question.create(:round_id => 6, :question_number => 5, :content => "Why does Professor Slughorn accompany Harry to Aragog’s burial?", :answer_a => "To supervise Harry, who isn’t supposed to be out of the castle", :answer_b => "To provide emotional support for Hagrid", :answer_c => "To collect acromantula venom from Aragog", :answer_d => "To speak at Aragog’s burial", :correct_answer => "C")

question_41 = Question.create(:round_id => 6, :question_number => 6, :content => "Which of the following memories are in the order in which Harry and Dumbledore visit them?", :answer_a => "Morfin Gaunt’s memory of Tom Riddle entering the House of Gaunt, uninvited; Professor Slughorn’s altered memory with Tom Riddle; Hokey’s memory of Tom Riddle’s visit to Hepzibah Smith’s", :answer_b => "Hokey’s memory of Tom Riddle’s visit to Hepzibah Smith’s; Professor Slughorn’s altered memory with Tom Riddle; Professor Slughorn’s real memory with Tom Riddle", :answer_c => "Dumbledore’s memory of his visit to meet Tom Riddle at the orphanage; Bob Ogden’s memory of his visit to the House of Gaunt; Morfin Gaunt’s memory of Tom Riddle entering the House of Gaunt, uninvited", :answer_d => "Morfin Gaunt’s memory of Tom Riddle entering the House of Gaunt, uninvited; Professor Slughorn’s real memory with Tom Riddle; Dumbledore’s memory of Voldemort visiting Hogwarts", :correct_answer => "A")

question_42 = Question.create(:round_id => 6, :question_number => 7, :content => "What is one bit of wisdom Dumbledore imparts to Harry during his 6th year at Hogwarts?", :answer_a => "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.", :answer_b => "It is the unknown we fear when we look upon death and darkness, nothing more.", :answer_c => "It is a curious thing, but perhaps those who are best suited to power are those who have never sought it.", :answer_d => "Suffering like this proves you are still a man. This pain is part of being human.", :correct_answer => "B")



question_43 = Question.create(:round_id => 7, :question_number => 1, :content => "Which 6 people impersonate Harry on the trip away from number four, Privet Drive?", :answer_a => "Mundungus, Fred, George, Ron, Hermione, and Ginny", :answer_b => "Ginny, Tonks, Ron, Hermione, Fred, and George", :answer_c => "Ron, Hermione, Fred, George, Fleur, and Mundungus", :answer_d => "Fred, George, Fleur, Tonks, Ron, and Hermione", :correct_answer => "C")

question_44 = Question.create(:round_id => 7, :question_number => 2, :content => "Where do Harry, Ron, and Hermione first go when they leave Bill and Fleur’s wedding?", :answer_a => "Tottenham Court Road", :answer_b => "Number twelve, Grimmauld Place", :answer_c => "The Forest of Dean", :answer_d => "Godric’s Hollow", :correct_answer => "A")

question_45 = Question.create(:round_id => 7, :question_number => 3, :content => "Which employees do Harry, Ron, and Hermione impersonate when they infiltrate the Ministry of Magic?", :answer_a => "Harry as Reg Cattermole, Ron as Dirk Cresswell, Hermione as Mafalda Hopkirk", :answer_b => "Harry as Pius Thicknesse, Ron as Reg Cattermole, Hermione as Amelia Bones", :answer_c => "Harry as Albert Runcorn, Ron as Reg Cattermole, Hermione as Mafalda Hopkirk", :answer_d => "Harry as Reg Cattermole, Ron as Pius Thicknesse, Hermione as Millicent Bagnold", :correct_answer => "C")

question_46 = Question.create(:round_id => 7, :question_number => 4, :content => "In what order are the 6 intended Horcruxes destroyed?", :answer_a => "The diary, the cup, the ring, the diadem, the locket, the snake", :answer_b => "The diary, the ring, the locket, the cup, the diadem, the snake", :answer_c => "The diary, the diadem, the cup, the locket, the ring, the snake", :answer_d => "The diary, the locket, the diadem, the ring, the cup, the snake", :correct_answer => "B")

question_47 = Question.create(:round_id => 7, :question_number => 5, :content => "Who is already imprisoned at Malfoy Manor when Harry, Ron, and Hermione are captured?", :answer_a => "Luna Lovegood and Mr. Ollivander", :answer_b => "Luna Lovegood, Mr. Ollivander, Dean Thomas, and Griphook", :answer_c => "Mr. Ollivander, Dean Thomas, and Griphook", :answer_d => "Mr. Ollivander and Griphook", :correct_answer => "A")

question_48 = Question.create(:round_id => 7, :question_number => 6, :content => "How is Rowena Ravenclaw’s diadem destroyed?", :answer_a => "The Sword of Gryffindor", :answer_b => "Fiendfyre", :answer_c => "A Basilisk fang", :answer_d => "Harry breaks it in two, because it’s just…plastic", :correct_answer => "B")

question_49 = Question.create(:round_id => 7, :question_number => 7, :content => "What is one bit of wisdom Dumbledore imparts to Harry during the Battle of Hogwarts?", :answer_a => "It matters not what someone is born, but what they grow to be.", :answer_b => "You can love. Which, given everything that has happened to you, is a great and remarkable thing.", :answer_c => "It is important to fight, and fight again, and keep fighting, for only then can evil be kept at bay, though never quite eradicated.", :answer_d => "Do not pity the dead. Pity the living, and, above all, those who live without love.", :correct_answer => "D")
