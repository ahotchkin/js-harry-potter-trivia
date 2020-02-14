class UserAnswer < ApplicationRecord
  belongs_to :user
  belongs_to :round
  belongs_to :question
end
