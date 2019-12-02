class Question < ApplicationRecord
  belongs_to :round
  has_many :answers
  has_many :answer_keys
end
