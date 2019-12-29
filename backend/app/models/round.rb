class Round < ApplicationRecord
  has_many :questions
  # is this needed???
  has_many :user_answers
end
