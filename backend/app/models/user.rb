class User < ApplicationRecord
  has_many :user_answers
  has_many :user_rounds
  validates_presence_of :username
end
