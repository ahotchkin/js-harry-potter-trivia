require 'rails_helper'

RSpec.describe UserRound, :type => :model do

  describe "validations" do
    it { should validate_presence_of(:attempts) }
  end

  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:round) }
  end

end
