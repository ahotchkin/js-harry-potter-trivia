class User < ApplicationRecord
  has_many :user_answers
  validates_presence_of :username
end
