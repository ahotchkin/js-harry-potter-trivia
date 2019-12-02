class User < ApplicationRecord
  belongs_to :house
  has_many :answer_keys
  # has_many :answers, through: :answer_keys
end
