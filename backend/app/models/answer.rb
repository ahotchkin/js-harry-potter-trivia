class Answer < ApplicationRecord
  belongs_to :question
  has_many :answer_keys
  # has_many :users, through: :answer_keys
end
