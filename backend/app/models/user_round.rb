class UserRound < ApplicationRecord
  belongs_to :user
  belongs_to :round
  validates_presence_of :attempts
end
