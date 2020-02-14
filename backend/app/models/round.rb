class Round < ApplicationRecord
  has_many :questions
  has_many :user_answers
end
