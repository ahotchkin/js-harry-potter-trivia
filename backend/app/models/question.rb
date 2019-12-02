class Question < ApplicationRecord
  belongs_to :round
  has_many :user_answers
  # has_many :users, through: :user_answers
end
