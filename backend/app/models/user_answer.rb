class UserAnswer < ApplicationRecord
  belongs_to :user
  belongs_to :round
  belongs_to :question
  validates_presence_of :correct_answer, :user_input
end
