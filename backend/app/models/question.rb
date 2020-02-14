class Question < ApplicationRecord
  belongs_to :round
  has_many :user_answers
end
