class UserAnswer < ApplicationRecord
  belongs_to :user
  # is this needed???
  belongs_to :round
  belongs_to :question
end
