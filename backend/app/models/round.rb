class Round < ApplicationRecord
  has_many :questions
  has_many :user_answers
  validates_presence_of :title
end
