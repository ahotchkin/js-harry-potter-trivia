class User < ApplicationRecord
  belongs_to :house
  has_many :user_answers
  # has_many :questions, through: :user_answers
end
