class Round < ApplicationRecord
  has_many :questions
  has_many :user_answers
  has_many :user_rounds
  validates_presence_of :title
end
